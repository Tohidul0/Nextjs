"use client";

import Link from 'next/link';

export const BackToHome = () => {
  return (
    <Link href="/" className="text-blue-500 hover:text-blue-700 mb-4 block">
      ← Back to Home
    </Link>
  );
};