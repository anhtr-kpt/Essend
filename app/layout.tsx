import type { Metadata } from "next";
import "./global.css";
import { nunito } from "./ui/fonts";

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
      <body className={`${nunito.className}  antialiased`}>{children}</body>
    </html>
  );
}
