import React from 'react';
import App from 'next/app';
import { AuthProvider } from 'react-use-auth';
import { useRouter } from 'next/router';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';

function MyApp({ Component, pageProps, auth0Params }) {
	const router = useRouter();

	const { domain, clientId } = auth0Params;
	debugger;
	console.log(auth0Params);

	return (
		<AuthProvider
			navigate={router.push}
			auth0_domain={domain}
			auth0_client_id={clientId}
		>
			<Component {...pageProps} auth0Params={auth0Params} />
		</AuthProvider>
	);
}

export default class _App extends App {
	static async getInitialProps(appContext) {
		const appProps = await App.getInitialProps(appContext);
		const auth0Params = {
			domain: process.env.NEXT_STATIC_AUTH0_DOMAIN,
			clientId: process.env.NEXT_STATIC_AUTH0_CLIENT_ID,
		};
		return { ...appProps, auth0Params };
	}

	render () {
		return <MyApp {...this.props} />;
	}
}
