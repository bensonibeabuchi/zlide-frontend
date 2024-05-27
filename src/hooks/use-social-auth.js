import { useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import { setAuth } from '@/redux/features/authSlice';
import { toast } from 'react-toastify';

export default function useSocialAuth(socialAuthenticate, provider) {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const searchParams = useSearchParams();
    const { state, code} = useSearchParams();



    useEffect(() => {
        const state = searchParams.get('state');
        const code = searchParams.get('code');
        
        if (state && code) {
            socialAuthenticate({ provider, state, code })
                .unwrap()
                .then(() => {
                    dispatch(setAuth());
                    toast.success('Logged in');
                    router.push('/');
                })
                .catch(() => {
                    toast.error('Failed to log in use-social-auth');
                    router.push('/auth/login');
                });
        }

    }, [socialAuthenticate, provider, searchParams, dispatch, router, state, code]);
}
