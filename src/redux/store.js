import { configureStore } from "@reduxjs/toolkit";
import { dataApi } from "./apiSlice";

export const store = configureStore({
  reducer: {
    [dataApi.reducerPath]: dataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([dataApi.middleware]),
});
