import { configureStore } from '@reduxjs/toolkit';
import { medelSlices } from '../slices/medelSlices';

export const store = configureStore({
  reducer: {
    medelList: medelSlices.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;