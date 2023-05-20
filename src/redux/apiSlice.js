import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://financialmodelingprep.com/api/v3/",
  }),
  endpoints: (builder) => ({
    getStockScreener: builder.query({
      query: () =>
        `stock-screener?marketCapLowerThan=10000000000000&betaMoreThan=1&volumeMoreThan=10&exchange=NYSE,NASDAQ&limit=10&apikey=${process.env.REACT_APP_API_KEY}`,
    }),
    getCompanyOutlook: builder.query({
      query: () => `profile/GOOGL?apikey=${process.env.REACT_APP_API_KEY}`,
    }),
    getMarketCapitalization: builder.query({
      query: () =>
        `historical-market-capitalization/AAPL?limit=100&apikey=${process.env.REACT_APP_API_KEY}`,
    }),
    getStockSymbol: builder.query({
      query: () =>
        `/stock_market/gainers?apikey=${process.env.REACT_APP_API_KEY}`,
    }),
    // getStockPriceChange: builder.query({
    //   query: () =>
    //     `stock-price-change/AAPL,FB,MSFT,MMM?apikey=${process.env.REACT_APP_API_KEY}`,
    // }),
  }),
});

export const {
  useGetStockScreenerQuery,
  useGetCompanyOutlookQuery,
  useGetStockPriceChangeQuery,
  useGetMarketCapitalizationQuery,
  useGetStockSymbolQuery,
} = dataApi;
