import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/resuseable/ThemeProvider";
import { cn } from "@/lib/utils";
import localFont from 'next/font/local';

const myFont = localFont({
  src:"../../public/fonts/NeueHaasDisplayLight.ttf"
});
const myFont1 = localFont({
  src:"../../public/fonts/NeueHaasDisplayMediu.ttf"
});
const myFont2 = localFont({
  src:"../../public/fonts/NeueHaasDisplayRoman.ttf",
  weight: "bold"
});

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
      <body className={cn("",myFont2)}>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
