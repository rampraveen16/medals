import { configureStore } from '@reduxjs/toolkit';
import { medelSlices } from './app/medals/medelSlices';

export const store = configureStore({
  reducer: {
    medelList: medelSlices.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;