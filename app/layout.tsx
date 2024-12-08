import type { Metadata } from "next";
import "./global.css";
import { noto_sans } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Essend",
  description: "Silver and gold jewelry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${noto_sans.className} antialiased text-secondary tracking-wide`}
      >
        {children}
      </body>
    </html>
  );
}
