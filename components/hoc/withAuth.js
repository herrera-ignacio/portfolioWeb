import React from 'react';
import { useAuth } from 'react-use-auth';
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../BasePage';

const admins = ['ignacioromanherrera@gmail.com'];

export default function(Component, role) {
	function withAuth(props) {
		const { user, isAuthenticated } = useAuth();

		const renderProtectedPage = function () {
			let isAuthorized = true;
			if (role === 'admin') {
				isAuthorized = user && admins.includes(user.email);
			}
			const isAuth = isAuthenticated();
			if (isAuth && isAuthorized) {
				return (
					<Component {...props} isAuthenticated={isAuthenticated} />
				);
			}

			const unauthenticatedMessage = 'You are not authenticated. Please login to access this page.';
			const unauthorizedMessage = 'You are not authorized. You don\'t have permission to visit this page.';

			return (
				<BaseLayout isAuthenticated={isAuthenticated}>
					<BasePage>
						<h1>{!isAuth ? unauthenticatedMessage : unauthorizedMessage}</h1>
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
