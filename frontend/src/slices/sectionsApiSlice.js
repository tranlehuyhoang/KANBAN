import { apiSlice } from './apiSlice.js';
const SECTIONS_URL = '/api/sections';

export const sectionApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createSection: builder.mutation({
            query: (data) => ({
                url: `${SECTIONS_URL}/${data}`,
                method: 'POST',
                body: data,
            }),
        }),
        updateSection: builder.mutation({
            query: (data) => ({
                url: `${SECTIONS_URL}/${data.sectionId}`,
                method: 'PUT',
            }),
        }),
        deleteSection: builder.mutation({
            query: (data) => ({
                url: `${SECTIONS_URL}/${data}`,
                method: 'DELETE',
                body: data,
            }),
        }),

    }),
});

export const {
    useCreateSectionMutation,
    useUpdateSectionMutation,
    useDeleteSectionMutation


} = sectionApiSlice;