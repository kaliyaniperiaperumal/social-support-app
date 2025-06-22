"use client";
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { saveData } from '@/redux/formSlice';
import { useTranslation } from 'react-i18next';

type Props = { onNext: () => void; onBack: () => void };

const FamilyAndFinance = ({ onNext, onBack }: Props) => {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data: Record<string, unknown>) => {
    dispatch(saveData(data));
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label={t("familyAndFinanceInfo.title")}>
      <h2 className="text-lg font-semibold mb-4">{t("familyAndFinanceInfo.title")}</h2>

      <select {...register("maritalStatus", { required: true })} className="input">
        <option value="">{t("familyAndFinanceInfo.maritalStatus")}</option>
        <option value="single">{t("familyAndFinanceInfo.single")}</option>
        <option value="married">{t("familyAndFinanceInfo.married")}</option>
        <option value="divorced">{t("familyAndFinanceInfo.divorced")}</option>
        <option value="widowed">{t("familyAndFinanceInfo.widowed")}</option>
      </select>
      {errors.maritalStatus && <p className="text-red-500 text-sm">{t("familyAndFinanceInfo.maritalStatus")} is required</p>}

      <input
        {...register("dependents", { required: true, valueAsNumber: true })}
        type="number"
        placeholder={t("familyAndFinanceInfo.dependents")}
        className="input"
      />
      {errors.dependents && <p className="text-red-500 text-sm">{t("familyAndFinanceInfo.dependents")} is required</p>}

      <select {...register("employmentStatus", { required: true })} className="input">
        <option value="">{t("familyAndFinanceInfo.employmentStatus")}</option>
        <option value="employed">{t("familyAndFinanceInfo.employed")}</option>
        <option value="unemployed">{t("familyAndFinanceInfo.unemployed")}</option>
        <option value="self-employed">{t("familyAndFinanceInfo.selfEmployed")}</option>
        <option value="retired">{t("familyAndFinanceInfo.retired")}</option>
      </select>
      {errors.employmentStatus && <p className="text-red-500 text-sm">{t("familyAndFinanceInfo.employmentStatus")} is required</p>}

      <input
        {...register("income", { required: true, valueAsNumber: true })}
        type="number"
        placeholder={t("familyAndFinanceInfo.monthlyIncome")}
        className="input"
      />
      {errors.income && <p className="text-red-500 text-sm">{t("familyAndFinanceInfo.monthlyIncome")} is required</p>}

      <select {...register("housingStatus", { required: true })} className="input">
        <option value="">{t("familyAndFinanceInfo.housingStatus")}</option>
        <option value="rent">{t("familyAndFinanceInfo.rent")}</option>
        <option value="own">{t("familyAndFinanceInfo.own")}</option>
        <option value="living with family">{t("familyAndFinanceInfo.livingWithFamily")}</option>
        <option value="homeless">{t("familyAndFinanceInfo.homeless")}</option>
      </select>
      {errors.housingStatus && <p className="text-red-500 text-sm">{t("familyAndFinanceInfo.housingStatus")} is required</p>}

      <div className="flex gap-2 mt-4">
        <button type="button" onClick={onBack} className="btn-secondary">{t("buttons.back")}</button>
        <button type="submit" className="btn-primary">{t("buttons.next")}</button>
      </div>
    </form>
  );
};

export default FamilyAndFinance;
