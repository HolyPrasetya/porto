import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Holpras — Portfolio",
  description: "Personal portfolio of Holpras",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,800,900&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
