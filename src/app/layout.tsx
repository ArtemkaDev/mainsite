import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { publicAsset } from "@/lib/public-asset";

import "@aplocoin/ui/sdk.css";
import "@fontsource-variable/murecho";
import "@fontsource-variable/open-sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "AploCoin",
  icons: { icon: publicAsset("/favicon.ico") },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute={["class", "data-aplo-theme"]} defaultTheme="system">
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
