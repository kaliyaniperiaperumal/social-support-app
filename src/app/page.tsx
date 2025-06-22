'use client';

import FormWizard from '@/components/FormWizard';
import Header from '@/components/Header';
import SuccessToast from '@/components/SuccessToast';
import { RootState } from '@/redux/store';
import '@/styles/page.css';
import { useDispatch, useSelector } from 'react-redux';
import { setToaster } from '@/redux/formSlice';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const showToast = useSelector((state: RootState) => state.form.showToast);
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header/>
      <main className="pt-24 p-6">
        <h1 className="text-2xl font-bold mb-4">{t("mainSectionMessage")}</h1>
        <FormWizard/>
      </main>
      {showToast && (
        <SuccessToast
          message={t("formSuccessMessage")}
          onClose={() => dispatch(setToaster(false))}
        />
      )}
    </div>
  );
}
