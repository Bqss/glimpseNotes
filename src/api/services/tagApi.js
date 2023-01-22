import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { v4 } from "uuid";


export const tagApi = createApi({
    reducerPath : "tag",
    baseQuery : fetchBaseQuery({baseUrl : "http://localhost:3000/"}),
    tagTypes : ["tag"],
    endpoints : (builder) => ({
        getAllTag : builder.query({
            query : () => "tag",
            providesTags : ["tag"]
        }),
        tagAdded : builder.mutation({
            query : (payload) => ({
                url : "tag",
                method : "post",
                body :{
                    id: v4(4),
                    value : payload
                }
            }),
            invalidatesTags : ["tag"]
        }),
        tagDeleted : builder.mutation({
            query : (id) => {

                return {
                    url : `tag/${id}`,
                    method : "delete",
                }
            },
            invalidatesTags : ["tag"]
        })

    })
})

export const { useGetAllTagQuery , useTagAddedMutation, useTagDeletedMutation } = tagApi ;