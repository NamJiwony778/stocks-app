import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://financialmodelingprep.com/api/v3/",
  }),
  endpoints: (builder) => ({
    getStockQuote: builder.query({
      query: () => ``,
    }),
    getStockScreener: builder.query({
      query: () =>
        `stock-screener?marketCapLowerThan=10000000000000&betaMoreThan=1&volumeMoreThan=10&exchange=NYSE,NASDAQ&limit=10&apikey=${process.env.REACT_APP_API_KEY}`,
    }),
  }),
});

export const { useGetStockQuoteQuery, useGetStockScreenerQuery } = dataApi;
