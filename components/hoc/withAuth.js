import React from 'react';
import { useAuth } from 'react-use-auth';
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../BasePage';

export default function(Component) {
	function withAuth(props) {
		const { isAuthenticated } = useAuth();
		const renderProtectedPage = function () {
			if (isAuthenticated()) {
				return (
					<Component {...props} isAuthenticated={isAuthenticated} />
				);
			}
			return (
				<BaseLayout isAuthenticated={isAuthenticated}>
					<BasePage>
						<h1>You are not authorized. Please login to access this page.</h1>
					</BasePage>
				</BaseLayout>
			)
		};

		return renderProtectedPage();
	}

	withAuth.getInitialProps = async (args) => {
		let pageProps = {};
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(args);
		}
		return { ...pageProps };
	};

	return withAuth;
}
