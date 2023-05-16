import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CategoriesType, ProductByCategorieType } from "../types/productsTypes";

export const storeApi = createApi({
  reducerPath: "storeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),

  endpoints: (builder) => ({
    getAllCategories: builder.query<CategoriesType, string>({
      query: (name) => `products/${name}`,
    }),
    getProductsByCategorie: builder.query<ProductByCategorieType[], string>({
      query: (name) => `products/category/${name}`,
    }),
    getProductById: builder.query<ProductByCategorieType, string>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useGetProductsByCategorieQuery,
  useGetProductByIdQuery,
} = storeApi;
