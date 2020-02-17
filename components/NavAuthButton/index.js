import React from "react";
import { useAuth } from "react-use-auth";
import Cookies from 'js-cookie';
import NavAuthButton from './NavAuthButton';

const NavAuthButtonContainer = function () {
	const { isAuthenticated , login, logout} = useAuth();
	const isAuth = isAuthenticated();

	const handleLogout = function () {
		Cookies.remove('jwt');
		logout();
	};

	const handleLogin = function() {
		login();
	};

	return (
		<NavAuthButton isAuth={isAuth} login={handleLogin} logout={handleLogout} />
	)
};

export default NavAuthButtonContainer;
