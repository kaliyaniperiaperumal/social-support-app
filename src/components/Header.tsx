import Image from 'next/image'
import React from 'react'
import AppIcon from '../../public/social.jpg'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation();
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center pr-4 pl-4 h-20 bg-white shadow-md w-full">
      <div className="flex items-center gap-2">
        <Image src={AppIcon} alt="Logo" className="h-20 w-20" />
        <span className="text-xl font-semibold">{t('title')}</span>
      </div>
      <LanguageSwitcher/>
    </div>
  )
}
