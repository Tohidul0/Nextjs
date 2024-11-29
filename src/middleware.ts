import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const userAgent = request.headers.get('user-agent') || '';
  
  // Set the user agent in a cookie for server-side access
  response.cookies.set('user-agent', userAgent, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  });
  
  return response;
}

// Optional: Configure middleware to run on specific paths
export const config = {
  matcher: '/:path*',
};