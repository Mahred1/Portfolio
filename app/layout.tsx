import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ProfileCard from "./_components/Profile/ProfileCard";
import ProfileCardVertical from "./_components/Profile/ProfileCardVertical";
import Navbar from "./_components/Navigation/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mahfuz Redwan",
  description: "Fullstack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <div className="mx-auto flex min-w-[95%] flex-col items-center gap-4 lg:max-w-350 lg:flex-row lg:items-start lg:justify-center">
          <div className="min-w-[95%] overflow-auto lg:sticky lg:top-2.5 lg:h-dvh lg:min-w-fit">
            <ProfileCard />
            <ProfileCardVertical />
          </div>
          <div className="mt-2 max-w-full ">
            
             <Navbar /> 
            
            
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
