"use client";
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { saveData } from '@/redux/formSlice';
import { useTranslation } from 'react-i18next';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaRegCalendarAlt } from 'react-icons/fa';

type Props = { onNext: () => void };

const PersonalInfo = ({ onNext }: Props) => {
  const { t, i18n } = useTranslation();
  const { register, handleSubmit, formState: { errors }, control } = useForm();
  const dispatch = useDispatch();
  const isRTL = i18n.language === 'ar';

  const onSubmit = (data: Record<string, unknown>) => {
    dispatch(saveData(data));
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label={t("personalInfo.title")}>
      <h2 className="text-lg font-semibold mb-4">{t("personalInfo.title")}</h2>

      <input {...register("name", { required: true })} placeholder={t("personalInfo.name")} className="input" />
      {errors.name && <p className="text-red-500 text-sm">{t("personalInfo.name")} {t("formErrorMessage")}</p>}

      <input {...register("nationalId", { required: true })} placeholder={t("personalInfo.nationalId")} className="input" />
      {errors.nationalId && <p className="text-red-500 text-sm">{t("personalInfo.nationalId")} {t("formErrorMessage")}</p>}
      
      {/* <input {...register("dob", { required: true })} type="date" placeholder={t("personalInfo.dob")} className="input" />
      {errors.dob && <p className="text-red-500 text-sm">{t("personalInfo.dob")} {t("formErrorMessage")}</p>} */}

      <div className='relative'>
        <Controller
          control={control}
          name="dob"
          rules={{ required: true }}
          render={({ field }) => (
            <DatePicker
              placeholderText={t("personalInfo.dob")}
              className="input w-full"
              calendarStartDay={6}
              locale={i18n.language}
              dateFormat="yyyy-MM-dd"
              selected={field.value}
              onChange={(date) => field.onChange(date)}
            />
          )}
        />
        <FaRegCalendarAlt className={`absolute top-5 text-gray-500 pointer-events-none ${
            isRTL ? 'left-3' : 'right-3'
          }`} />
      </div>
      {errors.dob && <p className="text-red-500 text-sm">{t("personalInfo.dob")} {t("formErrorMessage")}</p>}
      
      <select {...register("gender", { required: true })} className="input">
        <option value="">{t("personalInfo.gender")}</option>
        <option value="male">{t("personalInfo.male")}</option>
        <option value="female">{t("personalInfo.female")}</option>
        <option value="other">{t("personalInfo.other")}</option>
      </select>
      {errors.gender && <p className="text-red-500 text-sm">{t("personalInfo.gender")} {t("formErrorMessage")}</p>}

      <input {...register("address", { required: true })} placeholder={t("personalInfo.address")} className="input" />
      {errors.address && <p className="text-red-500 text-sm">{t("personalInfo.address")} {t("formErrorMessage")}</p>}

      <input {...register("city", { required: true })} placeholder={t("personalInfo.city")} className="input" />
      {errors.city && <p className="text-red-500 text-sm">{t("personalInfo.city")} {t("formErrorMessage")}</p>}

      <input {...register("state", { required: true })} placeholder={t("personalInfo.state")} className="input" />
      {errors.state && <p className="text-red-500 text-sm">{t("personalInfo.state")} {t("formErrorMessage")}</p>}

      <input {...register("country", { required: true })} placeholder={t("personalInfo.country")} className="input" />
      {errors.country && <p className="text-red-500 text-sm">{t("personalInfo.country")} {t("formErrorMessage")}</p>}

      <input {...register("phone", { required: true })} placeholder={t("personalInfo.phone")} className="input" />
      {errors.phone && <p className="text-red-500 text-sm">{t("personalInfo.phone")} {t("formErrorMessage")}</p>}

      <input {...register("email", {
        required: t("personalInfo.emailRequired"),
        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: t("personalInfo.emailInvalid") }
      })} placeholder={t("personalInfo.email")} className="input" />
      {errors.email && <p className="text-red-500 text-sm">{errors?.email?.message}</p>}

      <button type="submit" className="btn-primary mt-4">{t("buttons.next")}</button>
    </form>
  );
};

export default PersonalInfo;
