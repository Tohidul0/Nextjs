import { cookies } from 'next/headers';
import { UserAgentProvider } from "@/components/providers/userAgentProvider";
import { UserAgentClient } from "./UserAgentClient";  // Add this import

export const UserAgent = () => {
  const cookieStore = cookies();
  const serverUserAgent = cookieStore.get('user-agent')?.value;

  return (
    <UserAgentProvider userAgent={serverUserAgent}>
      <UserAgentClient serverUserAgent={serverUserAgent} />
    </UserAgentProvider>
  );
};