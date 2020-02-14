import React from "react";

const NavAuthButton = function (props) {
	const { login, logout, isAuth } = props;
	return (
			<a onClick={isAuth ? logout : login} className="nav-link port-navbar-link">
				{isAuth ? 'Logout' : 'Login'}
			</a>
		);
};

export default NavAuthButton;
