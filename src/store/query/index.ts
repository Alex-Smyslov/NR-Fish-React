import {
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://nr-fish-server.vercel.app',
});

export const refreshTokenQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  return result;
};

export const moduleApi = createApi({
  reducerPath: 'moduleApi',
  baseQuery: refreshTokenQuery,
  tagTypes: [],
  endpoints: () => ({}),
});
