import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// functions to create API client and define base for network requests

const baseQuery = fetchBaseQuery({ baseUrl: '' });
// setting base Url for API requests 

export const apiSlice = createApi({ //creating api slice !!
    baseQuery,
    tagTypes: ['User'],
    endpoints: (builder) => ({})
});

// code sets up API client. 