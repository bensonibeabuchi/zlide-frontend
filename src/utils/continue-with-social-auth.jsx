import { toast } from 'react-toastify';

export default async function continueWithSocialAuth(provider, redirect) {
	try {
		const backendwebsite = 'http://127.0.0.1:8000'
		const frontendwebsite = 'http://localhost:3000'
		const url = 'http://127.0.0.1:8000/api/o/google-oauth2/?redirect_uri=http://localhost:3000/auth/google';

		const url2 = `${backendwebsite}/api/o/${provider}/?redirect_uri=${frontendwebsite}/auth/${redirect}`;

		const res = await fetch(url, {
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
