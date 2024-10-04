"use client"; // Mark this as a client component
import { SessionProvider } from "next-auth/react";

export default function ClientSessionWrapper({ session }) {
  return (
    <SessionProvider session={session}>
    </SessionProvider>
  );
}
