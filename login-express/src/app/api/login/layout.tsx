//src/app/api/login/layout.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to backend",
};

export default function RootLayout({
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
