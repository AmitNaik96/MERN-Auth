import { apiSlice } from "./apiSlice";
const USERS_URL = '/api/users';
//all this is boiler-plate code.try to understand later :)
export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,  //auth POST request to backend
                method: 'POST', // by default GET request
                body: data,
            }),
        }),

        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}`,
                method: 'POST',
                body: data,
            }),
        }),

        // this logout is for Navbardropdown in header 
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST'
            })
        }),
        
        updateUser: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/profile`,
                method: 'PUT',
                body: data,
            }),
        }),
    }),
});

//exoprt naming do like this body.mutation then LoginMutation
export const { 
    useLoginMutation,
    useLogoutMutation, 
    useRegisterMutation, 
    useUpdateUserMutation,
} = usersApiSlice;