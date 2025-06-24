"use client";
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { saveData, resetForm, setToaster } from '@/redux/formSlice';
import { useState } from 'react';
import GPTModal from './GPTModel';
import { generateText } from '@/utils/openai';
import { useTranslation } from 'react-i18next';
import FullPageLoader from './FullPageLoader';

type Props = { onBack: () => void };

const Situation = ({ onBack }: Props) => {
  const { register, handleSubmit, setValue, getValues } = useForm();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [modalData, setModalData] = useState<{ field: string, content: string } | null>(null);
  const [showLoader, setShowLoader] = useState(false);

  const onSubmit = (data: Record<string, unknown>) => {
    setShowLoader(true);
    dispatch(saveData(data));
    setTimeout(()=>{
      setShowLoader(false);
      dispatch(resetForm());
      dispatch(setToaster(true));
    }, 3000)
  };

  const handleHelp = async (field: string) => {
    setShowLoader(true);
    const currentValue = getValues(field);
    const prompt = "Help me describe: " + currentValue;
    const suggestion = await generateText(prompt);
    if (suggestion) {
      setModalData({ field, content: suggestion });
      setShowLoader(false);
    }
  };

  const acceptSuggestion = (updatedText: string) => {
    if (modalData) {
      setValue(modalData.field, updatedText);
      setModalData(null);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} aria-label={t("situationInfo.title")}>
        <h2 className="text-lg font-semibold mb-4">{t("situationInfo.title")}</h2>
        {["situation", "employment", "reason"].map((field) => (
          <div key={field} className="mb-4">
            <textarea {...register(field)} placeholder={t(`situationInfo.${field}`)} className="textarea" />
            <button type="button" onClick={() => handleHelp(field)} className="text-sm text-blue-600 underline cursor-pointer">
              {t("situationInfo.helpMeWrite")}
            </button>
          </div>
        ))}
        <div className="flex gap-2 mt-4">
          <button type="button" onClick={onBack} className="btn-secondary">{t("buttons.back")}</button>
          <button type="submit" className="btn-primary">{t("buttons.submit")}</button>
        </div>
      </form>
      {modalData && (
        <GPTModal
          content={modalData.content}
          onAccept={acceptSuggestion}
          onClose={() => setModalData(null)}
        />
      )}
      {showLoader && <FullPageLoader/>}
    </>
  );
};

export default Situation;
