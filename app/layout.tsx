import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import { SiteThemeProvider } from '@/providers/theme';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '[.shovon]',
  description: 'Personal Portfolio || [.shovon]',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta property="og:url" content="https://shovon.me" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="[.shovon]" />
        <meta property="og:description" content="Personal Portfolio || [.shovon]" />
        <meta property="og:image" content="https://shovon.me/assets/images/og.png" />
      </head>
      <body className={`${inter.className} dark:bg-[#232425] bg-white flex min-h-svh flex-col`}>
        <SiteThemeProvider>
          <Header />
          <main className="flex flex-col flex-auto items-center justify-center m-0">{children}</main>
          <Footer />
        </SiteThemeProvider>
       
 
    
      </body>
    </html>
  );
}
