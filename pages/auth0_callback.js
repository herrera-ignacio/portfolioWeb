import React, { useEffect } from 'react';
import { useAuth } from 'react-use-auth';
import Cookies from 'js-cookie';

const AUTHCallback = () => {
	const { authResult, isAuthenticating, user, handleAuthentication } = useAuth();
	useEffect(() => {
		handleAuthentication({ postLoginRoute: '/' });
	}, []);

	const renderPlaceholder = () => (
		<h1>
			This is the auth callback page, you should be redirected
			immediately.
		</h1>
	);

	if (isAuthenticating) {
		return renderPlaceholder();
	} else {
		// There's a brief moment before authentication starts where user is undefined
		// By time authentication ends, authResult info should be ready
		if (authResult) {
			const {	idToken, expiresIn } = authResult;
			// (refreshToken can be activated from Auth0 Dashboard)
			// expiresIn is in seconds, js-cookie expects a date
			const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

			Cookies.set('jwt', idToken, { expires: expirationDate } )
		}
		return renderPlaceholder();
	}

};

export default AUTHCallback;
