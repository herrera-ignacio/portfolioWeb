import axios from 'axios';
import Cookies from 'js-cookie';

const setAuthHeader = () => {
	const token = Cookies.get('jwt');

	if (token) {
		return {
			headers: {
				authorization: `Bearer ${token}`
			}
		}
	}

	return undefined;
};

export const getSecretData = async () => {
	try {
		const secret =  await axios.get('/api/v1/secret', setAuthHeader());
		return secret.data;
	} catch (err) {
		console.error(err);
		return [];
	}
};
