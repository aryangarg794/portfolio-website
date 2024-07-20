import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GlobalProvider from "@/providers/cursorprovider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Portfolio - Aryan Garg",
  description: "The personal portfolio of Aryan Garg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProvider>
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
