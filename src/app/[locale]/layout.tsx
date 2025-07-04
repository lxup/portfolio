import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '@/styles/globals.css';
import Providers from "@/providers/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "loup",
  description: "my workkkkkssssss",
};

const RootLayout = async ({
  children,
  params
} : {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) =>{
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers locale={locale}>
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;