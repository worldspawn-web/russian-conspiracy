'use client';

import * as React from 'react';
import { ThemeProvider } from '@/lib/theme-provider';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </ThemeProvider>
  );
}
