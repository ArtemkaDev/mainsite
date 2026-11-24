import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@aplocoin/ui/sdk.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "AploCoin",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-aplo-theme="system">
      <body className="aplo-root">{children}</body>
    </html>
  );
}
