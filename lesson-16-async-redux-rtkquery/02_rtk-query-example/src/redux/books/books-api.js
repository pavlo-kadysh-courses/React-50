import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const booksApi = createApi({
    reducerPath: "bookApi",
    tagTypes: ["Books"],
    baseQuery: fetchBaseQuery({baseUrl: "https://6356dec49243cf412f8f494e.mockapi.io/api/books"}),
    keepUnusedDataFor: 30,
    endpoints: (builder) => ({
        fetchBooks: builder.query({
            query: (page) => `/?page=${page}&limit=5`,
            providesTags: (result) => result ? [
                ...result.map(({id}) => ({type: "Books", id})), 
                {type: "Books", id: "LIST"}
            ] : [{type: "Books", id: "LIST"}]
        }),
        addBook: builder.mutation({
            query: (body) => ({
                url: "/",
                method: "POST",
                body
            }),
            invalidatesTags: [{type: "Books", id: "LIST"}]
        }),
        removeBook: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{type: "Books", id: "LIST"}]
        })
    })
})

export const { useFetchBooksQuery, useAddBookMutation, useRemoveBookMutation } = booksApi;

export default booksApi;