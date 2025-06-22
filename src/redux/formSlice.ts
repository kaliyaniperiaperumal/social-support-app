import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  step: number;
  data: Record<string, unknown>;
  showToast: boolean;
}

const initialState: FormState = {
  step: 1,
  data: {},
  showToast: false
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    nextStep: (state) => { state.step += 1; },
    prevStep: (state) => { state.step -= 1; },
    setStep: (state, action: PayloadAction<number>) => { state.step = action.payload; },
    saveData: (state, action: PayloadAction<Record<string, unknown>>) => {
      state.data = { ...state.data, ...action.payload };
    },
    resetForm: () => initialState,
    setToaster: (state, action: PayloadAction<boolean>) => { state.showToast = action.payload}
  },
});

export const { nextStep, prevStep, setStep, saveData, resetForm, setToaster } = formSlice.actions;
export default formSlice.reducer;
