import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ProfileCard from "./_components/Profile/ProfileCard";
import ProfileCardVertical from "./_components/Profile/ProfileCardVertical";
import Navbar from "./_components/navigation/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mahfuz Redwan - Fullstack Developer",
  description: "Fullstack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning
      lang="en"
      className={`${inter.variable} ${mono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var theme = stored === 'light' || stored === 'dark'
                    ? stored
                    : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  if (theme === 'dark') document.documentElement.classList.add('dark');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col ">
        <div className="w-full lg:flex justify-center dark:bg-foreground transition-colors ease-in bg-secondary gap-3 lg:gap-10">
          <aside className="flex-none mt-4 overflow-y-auto lg:sticky top-6 lg:h-dvh ">
            <ProfileCardVertical />
          </aside>
          <main className="lg:max-w-4xl max-w-full flex   flex-col gap-3  flex-1">
            <ProfileCard />
            <div className="flex flex-col gap-5">
              <Navbar />
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
