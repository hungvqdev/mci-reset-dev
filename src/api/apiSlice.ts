import {
  LoginRequest,
  LoginResponse,
  AvailableFunctionsRequest,
  AvailableFunctionsResponse,
} from "@/types/apiTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/apis/v1/`,
  }),
  endpoints: (builder) => ({
    userLogin: builder.mutation<LoginResponse, LoginRequest>({
      query: ({ username, password }) => ({
        url: "user-login/",
        method: "POST",
        body: { username, password },
      }),
    }),
    getAvailableFunctions: builder.mutation<AvailableFunctionsResponse, AvailableFunctionsRequest>({
      query: ({ user_id }) => ({
        url: "get-available-functions/",
        method: "POST",
        body: { user_id },
      }),
    }),
  }),
});

export const { useUserLoginMutation, useGetAvailableFunctionsMutation } = api;
