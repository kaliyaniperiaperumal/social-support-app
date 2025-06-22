"use client";

import { useTranslation } from "react-i18next";

type Props = { step: number };

const ProgressBar = ({ step }: Props) => {
  const { t } = useTranslation();
  const steps = ['tabs.personalTab', 'tabs.familFinanceTab', 'tabs.situationTab'];

  return (
    <div className="flex justify-between gap-2 mb-4">
      {steps.map((label, index) => (
        <div key={index} className="flex-1 text-center">
          <div className={`py-2 px-4 rounded-full ${step === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
            {t(label)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
