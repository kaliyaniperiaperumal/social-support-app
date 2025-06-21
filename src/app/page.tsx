'use client';

import { useTranslation } from 'react-i18next';
//import { I18nHydrationGate } from '@/components/I18nHydrationGate';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useEffect, useState } from 'react';

export default function Home() {
  const { t, ready } = useTranslation();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (ready) {
      setIsReady(true);
    }
  }, [ready]);

  if (!isReady) return null;

  return (
    <div>
      <LanguageSwitcher/>
      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold mb-4">{t('title')}</h1>
      </main>
    </div>
  );
}
