'use client';

import '@/i18n/config';
import { ReactNode, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n/config';

export function TranslationProvider({ children, lang }: { children: ReactNode, lang: string }) {
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
