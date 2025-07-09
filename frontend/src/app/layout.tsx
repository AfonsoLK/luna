import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TanstackProvider } from "@/components/providers/tanstack-provider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "luna",
  description: "luna-project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TanstackProvider>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </TanstackProvider>
      </body>
    </html>
  );
}
