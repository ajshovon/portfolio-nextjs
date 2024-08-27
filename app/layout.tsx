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
