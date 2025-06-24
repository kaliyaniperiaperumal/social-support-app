"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { TranslationProvider } from '@/components/TranslationProvider';
import { I18nHydrationGate } from "@/components/I18nHydrationGate";
import { ReduxProvider } from "@/components/ReduxProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
  lang
}: {
  children: React.ReactNode;
  lang: string;
}) {
  return (
    <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ReduxProvider>
          <TranslationProvider lang={lang}>
            <I18nHydrationGate>
              {children}
            </I18nHydrationGate>
          </TranslationProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}