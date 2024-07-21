import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import GlobalProvider from "@/providers/globalprovider";
import "./globals.css";

const poppins = Poppins({ 
  weight: "400",
  subsets: ["latin"] 
});

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
      <body className={poppins.className}>
        <GlobalProvider>
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
