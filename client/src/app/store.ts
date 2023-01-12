import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import vocabSlice from "../features/vocab/vocabSlice";

export const store = configureStore({
  reducer: {
    vocab: vocabSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
