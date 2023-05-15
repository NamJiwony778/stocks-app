import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://finnhub.io/api/v1/",
  }),
  endpoints: (builder) => ({
    getStockQuote: builder.query({
      query: () => `quote?symbol=AAPL&token=${process.env.REACT_APP_API_KEY}`,
    }),
  }),
});

export const { useGetStockQuoteQuery } = dataApi;
