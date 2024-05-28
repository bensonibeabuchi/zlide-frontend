import { toast } from 'react-toastify';

export default async function continueWithSocialAuth(provider, redirect) {
	try {
		const backendwebsite = 'https://zlide-backend-production.up.railway.app'
		const frontendwebsite = 'https://zlide-ben.vercel.app/'
		const url = 'http://127.0.0.1:8000/api/o/google-oauth2/?redirect_uri=http://localhost:3000/auth/google';

		const url2 = `${backendwebsite}/api/o/${provider}/?redirect_uri=${frontendwebsite}/auth/${redirect}`;

		const res = await fetch(url2, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
			credentials: 'include',
		});
		const data = await res.json();
		console.log(data);

		if (res.status === 200 && typeof window !== 'undefined') {
			window.location.replace(data.authorization_url);
		} else {
			try{
				toast.error('Error 1 at continue-with-social utils');
			}
			catch(error){
				console.log(error)
			}

		}
	} catch (err) {
		toast.error('Error at continue-with-social utils final');
	}
}
