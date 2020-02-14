import axios from 'axios';
import Cookies from 'js-cookie';

export const getSecretData = async () => {
	const jwt = Cookies.get('jwt');
	console.log(jwt);
	try {
		const secret =  await axios.get('/api/v1/secret', {
			headers: {
				authorization: `Bearer ${jwt}`
			}
		});
		return secret.data;
	} catch (err) {
		console.error(err);
		return [];
	}
};
