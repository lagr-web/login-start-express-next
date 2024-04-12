//src/app/api/login/layout.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logged",
  description: "Logged in",
};

export default function dashboard({
  children,
}:Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
 {children}
 </>
  )
}
