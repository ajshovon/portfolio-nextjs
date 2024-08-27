'use client';

import { ThemeProvider } from 'next-themes';

import { useSearchParams } from 'next/navigation';

export function SiteThemeProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const theme = searchParams.get('theme');
  return (
    <ThemeProvider attribute="class" defaultTheme={theme ? theme : 'system'} enableSystem>
      {children}
    </ThemeProvider>
  );
}
