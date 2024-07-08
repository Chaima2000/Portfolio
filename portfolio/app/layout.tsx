import type { Metadata } from "next";
import { Anek_Telugu, Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const AnekTelugu = Anek_Telugu({
   subsets:["latin"],
   variable: "--font-caption", 
  });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chaima Merazi . Developpeuse Web",
  description: "Creation des sites web avec des langages de developpement full stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body 
      className={cn(
        GeistSans.variable, 
        GeistMono.variable,
        AnekTelugu.variable, 
        "front-sans, bg-background, text-foreground")}>{children}</body>
    </html>
  );
}
