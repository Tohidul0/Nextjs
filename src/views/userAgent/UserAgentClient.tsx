"use client";

import { BackToHome } from "@/components/backToHome/backToHome";

type UserAgentClientProps = {
  serverUserAgent?: string;
};

export const UserAgentClient = ({ serverUserAgent }: UserAgentClientProps) => {
  return (
    <div>
      <BackToHome />
      {serverUserAgent && (
        <div className="flex font-mono font-semibold text-sm">
          <div className="border p-2">UserAgent</div>
          <div className="border p-2">{serverUserAgent}</div>
        </div>
      )}
      {!serverUserAgent && <div>No user agent</div>}
    </div>
  );
};