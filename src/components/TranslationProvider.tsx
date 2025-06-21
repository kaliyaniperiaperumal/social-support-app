'use client';

import '@/app/i18n/config';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/app/i18n/config';

export function TranslationProvider({ children }: { children: ReactNode }) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
