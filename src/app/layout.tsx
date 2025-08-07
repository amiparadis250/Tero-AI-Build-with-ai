import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'antd/dist/reset.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';

//  const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "TERO AI",
  description: "Our AI-powered Text-to-Video and Voice-to-Video Challenge Solver is a groundbreaking tool designed to tackle real-world inefficiencies in food handling and beyond",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
