import Image from 'next/image'
import React from 'react'
import AppIcon from '../../public/social.jpg'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation();
  return (
    <div className="flex justify-between items-center pr-4 pl-4 bg-white shadow-md">
      <div className="flex items-center gap-2">
        <Image src={AppIcon} alt="Logo" className="h-20 w-20" />
        <span className="text-xl font-semibold">{t('title')}</span>
      </div>
      <LanguageSwitcher/>
    </div>
  )
}
