"use client";
import { useRouter } from "next/navigation";
import i18n from '@/i18n/config'; 
import { useEffect, useState } from "react";

const LanguageSwitcher = () => {
  const router = useRouter();
  const [selectedLang, setSelectedLang] = useState("en");
  const [open, setOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  ];

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
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 border border-black px-4 py-2 rounded-md text-sm"
      >
        {languages.find(l => l.code === selectedLang)?.flag}
        <span className="hidden sm:inline">
          {languages.find(l => l.code === selectedLang)?.label}
        </span>
      </button>
      {open && (
        <div className="absolute bg-white border rounded mt-1 w-full z-10 shadow-md">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                changeLanguage(lang.code);
                setOpen(false);
              }}
              className="w-full px-3 py-2 text-left hover:bg-gray-100 flex items-center"
            >
              {lang.flag}
              <span className="hidden sm:inline ml-2">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
