'use client';

import { useTranslation } from 'react-i18next';
import { ReactNode, useState, useEffect } from 'react';

export const I18nHydrationGate = ({ children }: { children: ReactNode }) => {
  const { ready } = useTranslation();
  const [isReady, setIsReady] = useState(false);
  
  useEffect(() => {
    if (ready) {
      setIsReady(true);
    }
  }, [ready]);

  if (!isReady) return null;
  return <>{children}</>;
};
