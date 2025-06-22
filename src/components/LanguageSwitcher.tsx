"use client";
import { useRouter } from "next/navigation";
import i18n from '@/i18n/config'; 

const LanguageSwitcher = () => {
  const router = useRouter();

  const changeLanguage = async (lng: string) => {
    // Set cookie and reload
    document.cookie = `NEXT_LOCALE=${lng}; path=/`;
    i18n.changeLanguage(lng); // OR i18n.changeLanguage(lng)
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    router.refresh(); // Will re-render page using new locale
  };

  return (
    <div className="flex justify-end">
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2"
        aria-label="Select language"
      >
        <option value="en" title="Switch to English">🇺🇸 English</option>
        <option value="ar" title="التبديل إلى اللغة العربية">🇸🇦 العربية</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
