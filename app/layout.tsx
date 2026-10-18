import type { Metadata } from "next";
import "./globals.css";
import { bodyFont } from "./fonts";

export const metadata: Metadata = {
  title: {
    default: "Orphic — People. Ideas. Moments.",
    template: "%s | Orphic",
  },
  description:
    "A social space for deeper conversations, real connections, and a more thoughtful internet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>{children}</body>
    </html>
  );
}