import {apiSlice} from "./apiSlice.js";

const USERS_URL = '/api'

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        login: builder.mutation({
            query:(data)=>({
                url: `${USERS_URL}/login`,
                method: 'POST',
                body: data
            })
        }),
        register: builder.mutation({
            query:(data)=>({
                url: `${USERS_URL}/register`,
                method: 'POST',
                body: data
            })
        }),
        updateUser: builder.mutation({
            query:(data)=>({
                url: `${USERS_URL}/users/updateUser`,
                method: 'PATCH',
                body: data
            })
        }),
        forgotPassword: builder.mutation({
            query:(data)=>({
                url: `${USERS_URL}/forgotPassword`,
                method: 'POST',
                body: data
            })
        }),
        resetPassword: builder.mutation({
            query:(data)=>({
                url: `${USERS_URL}/resetPassword`,
                method: 'POST',
                body: data
            })
        }),
        logout: builder.mutation({
            query:(arg)=> ({
                url: `${USERS_URL}/logout`,
                method: 'DELETE'
            })
        })
    })
})

export const {useLoginMutation, useLogoutMutation, useRegisterMutation, useUpdateUserMutation,useForgotPasswordMutation,useResetPasswordMutation} = usersApiSlice