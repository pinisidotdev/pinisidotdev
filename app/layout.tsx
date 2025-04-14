import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: "./../src/fonts/Satoshi-Variable.ttf"
})

export const metadata: Metadata = {
  title: "Pinisi Studio",
  description: "From Archipelago To Algorithm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
