'use client';
import { useSocialAuthenticateMutation } from '@/redux/features/authApiSlice';
import LoadingSpinner from '@/components/common/Loading'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import { setAuth } from '@/redux/features/authSlice';
import { toast } from 'react-toastify';

export default function Page({ params }) {

  const [socialAuthenticate] = useSocialAuthenticateMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();
  
  useEffect(() => {
    const { state, code } = params
    socialAuthenticate({ state, code })
        .unwrap()
        .then(() => {
         dispatch(setAuth());
         toast.success('Logged in');
          router.push('/');
          })
        .catch((error) => {
          toast.error('Failed to log in auth/google.jsx');
          console.error(error.data.detail)
          router.push('/auth/login');
         })

    }, [dispatch, router, socialAuthenticate, params]);

  return (
    <div>
        <LoadingSpinner/>
    </div>
  )
}
