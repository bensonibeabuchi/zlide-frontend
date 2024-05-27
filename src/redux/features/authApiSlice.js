import { apiSlice } from '../services/apiSlice';

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({

    retrieveUser: builder.query({
      query: () => '/users/me/',
    }),

    socialAuthenticate: builder.mutation({
      query: ({ provider, state, code }) => ({
        url: `/o/google-oauth2/?state=${encodeURIComponent(state)}&code=${encodeURIComponent(code)}`,
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }),
    }),

    login: builder.mutation({
      query: ({ email, password }) => ({
        url: '/login/',
        method: 'POST',
        body: { email, password },
      }),
    }),

    register: builder.mutation({
      query: ({ first_name, last_name, email, password, re_password, job_title, company }) => ({
        url: '/register/',
        method: 'POST',
        body: { first_name, last_name, email, password, re_password, job_title, company },
      }),
    }),

    verify: builder.mutation({
      query: () => ({
        url: '/jwt/verify/',
        method: 'POST',
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: '/logout/',
        method: 'POST',
      }),
    }),

    activation: builder.mutation({
      query: ({ email, otp }) => ({
        url: '/activate/',
        method: 'POST',
        body: { email, otp },
      }),
    }),

    resendOtp: builder.mutation({
      query: (email) => ({
        url: '/resend-otp/',
        method: 'POST',
        body: { email },
      }),
    }),

    resetPassword: builder.mutation({
      query: (email) => ({
        url: '/users/reset_password/',
        method: 'POST',
        body: { email },
      }),
    }),

    resetPasswordConfirm: builder.mutation({
      query: ({ uid, token, new_password, re_new_password }) => ({
        url: '/users/reset_password_confirm/',
        method: 'POST',
        body: { uid, token, new_password, re_new_password },
      }),
    }),

    generateSlide: builder.mutation({
      query: ( user_input ) => ({
        url: '/presentation/generate-slides/',
        method: 'POST',
        body: { user_input },
      }),
    }),

    retrieveSlide: builder.query({
      query: () => '/presentation/generate-slides/',
    }),


    retrieveSingleSlide: builder.query({
      query: (id) => `/presentation/zlide/${id}/`,
    }),
    
    updateSlide: builder.mutation({
      query: ( { id, ...patch}) => ({
        url: `/presentation/zlide/${id}/`,
        method: 'PATCH',
        body: patch,
      }) 
    }),

    deleteSlide: builder.mutation({
      query: (id) => ({
        url: `/presentation/zlide/${id}/`,
        method: 'DELETE',
      })
    }),

    getAllTestimonials: builder.query({
      query: () => '/testimonial/',
    }),

    getSingleTestimonials: builder.query({
      query: (id) => `/testimonial/${id}`,
    }),

  }),
});

export const {
  useRetrieveUserQuery,
  useResendOtpMutation,
  useSocialAuthenticateMutation,
  useLoginMutation,
  useRegisterMutation,
  useVerifyMutation,
  useLogoutMutation,
  useActivationMutation,
  useResetPasswordMutation,
  useResetPasswordConfirmMutation,
  useGenerateSlideMutation,
  useRetrieveSlideQuery,
  useRetrieveSingleSlideQuery,
  useUpdateSlideMutation,
  useDeleteSlideMutation,
  useGetAllTestimonialsQuery,
  useGetSingleTestimonialsQuery,
} = authApiSlice;
