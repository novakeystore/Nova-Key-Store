import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "NOVA KEY STORE", description: "NOVA Coin Key Store" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}