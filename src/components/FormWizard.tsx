"use client";

import ProgressBar from './ProgressBar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import PersonalInfo from './PersonalInfo';
import { nextStep, prevStep } from '@/redux/formSlice';
import FamilyAndFinance from './FamilyAndFinance';
import Situation from './Situation';

const FormWizard = () => {
  const step = useSelector((state: RootState) => state.form.step);
  const dispatch = useDispatch();

  const handleNext = () => dispatch(nextStep());
  const handlePrev = () => dispatch(prevStep());

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 shadow-md rounded-md">
      <ProgressBar step={step} />
      {step === 1 && <PersonalInfo onNext={handleNext} />}
      {step === 2 && <FamilyAndFinance onNext={handleNext} onBack={handlePrev} />}
      {step === 3 && <Situation onBack={handlePrev} />}
    </div>
  );
};

export default FormWizard;
