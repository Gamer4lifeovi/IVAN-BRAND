import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IVAN — Not Made To Fit In"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
