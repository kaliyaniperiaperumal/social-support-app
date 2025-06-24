"use client";
import { useRouter } from "next/navigation";
import i18n from '@/i18n/config'; 
import { useEffect, useState } from "react";

const LanguageSwitcher = () => {
  const router = useRouter();
  const [selectedLang, setSelectedLang] = useState("en");

  useEffect(() => {
    const cookieLang = document.cookie
      .split("; ")
      .find((row) => row.startsWith("NEXT_LOCALE="))
      ?.split("=")[1];

    const initialLang = cookieLang || "en";
    setSelectedLang(initialLang);

    document.documentElement.lang = initialLang;
    document.documentElement.dir = initialLang === "ar" ? "rtl" : "ltr";

    if (i18n.language !== initialLang) {
      i18n.changeLanguage(initialLang);
    }
  }, []);

  const changeLanguage = async (lng: string) => {
    document.cookie = `NEXT_LOCALE=${lng}; path=/`;
    setSelectedLang(lng);
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    router.refresh();
  };

  return (
    <div className="flex justify-end">
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        value={selectedLang}
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
