import apiSlice from "../api/apiSlice";

const categoriesApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        categoriesPost: builder.mutation({
            // note: an optional `queryFn` may be used in place of `query`
            query: (data) => ({
              url: '/categories',
              method: 'POST',
              body: data
            }),
            }),

        categoriesGet: builder.query({
            // note: an optional `queryFn` may be used in place of `query`
            query: () => ({
              url: '/categories',
            }),
            }),
   
        categoriesGetById: builder.query({
            // note: an optional `queryFn` may be used in place of `query`
            query: (id) => ({
              url: `/categories/${id}`,
            }),
            })
    })
    })

export const {useGetCategoriesPostMutation, useGetCategoriesGetQuery,useGetCategoriesGetByIdQuery} = categoriesApi;