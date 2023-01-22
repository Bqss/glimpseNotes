import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { v4 } from "uuid";

export const  noteApi = createApi({
    reducerPath : "notes",
    baseQuery : fetchBaseQuery({baseUrl : "http://localhost:3000/"}),
    tagTypes : ["notes"],
    endpoints : (builder)  => ({
        getAllNote : builder.query({
            query : () => "notes",
            providesTags : (result) => (
                result ? [...result.map(({id}) => ({type: "notes", id})), "notes"] : ["notes"]
            )
        }),
        createNote : builder.mutation({
            query : (body) => {
                const edited = {
                    id : v4(12),
                    createdAt : new Date().toUTCString(),
                    updatedAt : new Date().toUTCString(),
                    ...body
                }
                return {
                    url : "notes",
                    method : "POST",
                    body : edited,
                }
            },
            invalidatesTags : ["notes"]
        }),
        deleteNote : builder.mutation({
            query : (id) => ({
                url : `notes/${id}`,
                method : "DELETE",
            }),
            invalidatesTags : ["notes"]
        }),
        softDeleteNote : builder.mutation({
            query : ({id , isSoftDelete, ...patch}) => ({
                url : `notes/${id}`,
                method : "PUT",
                body : {
                    id,
                    isSoftDelete : true ,
                    ...patch
                }
            }),
            invalidatesTags : (result, error, {id} ) => ([{type: "notes", id}])
        }),
        archiveNote : builder.mutation({
            query: ({id, ...patch}) => {
                return {
                    url : `notes/${id}`,
                    method : "PUT",
                    body : {
                        id,
                        ...patch,
                        isArchived : true
                    }
                }
            },
            invalidatesTags : (result, error, {id}) => ([{type: "notes", id}])
        }),
        updateNote : builder.mutation({
            query : ({id, ...patch}) => ({
                url : `notes/${id}`,
                method : "PUT",
                body : {
                    id,
                    updatedAt: new Date().toUTCString(),
                    ...patch
                }
            }),
            invalidatesTags : (result, error, {id}) => ([{type: "notes",id}])
        }),
        toggleNotePin : builder.mutation({
            query : ({id, isPinned, ...patch}) => {
                const edited = {
                    id,
                    isPinned : !isPinned,
                    ...patch
                }
                return {
                    url : `notes/${id}`,
                    method: "PUT",
                    body : edited
                }
            },
            invalidatesTags : (result, error, {id}) => ([{type: "notes",id}])
        })
    })
})


export const {useGetAllNoteQuery , useCreateNoteMutation , useDeleteNoteMutation, useArchiveNoteMutation, useUpdateNoteMutation, useToggleNotePinMutation, useSoftDeleteNoteMutation} = noteApi;

