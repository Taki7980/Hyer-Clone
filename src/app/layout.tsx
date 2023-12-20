import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/resuseable/ThemeProvider";

const inter = Ubuntu({ weight: "500", subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Hyer-Clone",
  description: "A hyer clone created with nextjs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
