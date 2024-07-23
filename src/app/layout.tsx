import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import GlobalProvider from "@/providers/globalprovider";
import "./globals.css";

const poppins = Poppins({ 
  weight: "400",
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Aryan Garg",
  description: "The personal portfolio of Aryan Garg - Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <link
        rel="apple-touch-icon"
        href="/apple-icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      </head>
      <body className={poppins.className}>
        <GlobalProvider>
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
