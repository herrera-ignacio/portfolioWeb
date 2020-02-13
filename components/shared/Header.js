import React, { useState } from 'react';
import { useAuth } from 'react-use-auth';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
} from 'reactstrap';
import NavLink from './NavLink';

const AuthButton = () => {
	const { isAuthenticated, login, logout } = useAuth();

	const isAuth = isAuthenticated();

	return (
		<a onClick={isAuth ? logout : login} className="nav-link port-navbar-link">
			{isAuth ? 'Logout' : 'Login'}
		</a>
	)
};

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
				<NavbarBrand className="port-navbar-brand" href="/">Ignacio Herrera</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem className="port-navbar-item">
							<NavLink route="/" title="Home"/>
						</NavItem>
						<NavItem className="port-navbar-item" >
							<NavLink route="/about" title="About"/>
						</NavItem>
						<NavItem className="port-navbar-item">
							<NavLink route="/portfolios" title="Portfolios"/>
						</NavItem>
						<NavItem className="port-navbar-item">
							<NavLink route="/blogs" title="Blogs"/>
						</NavItem>
						<NavItem className="port-navbar-item">
							<NavLink route="/cv" title="CV"/>
						</NavItem>
						<NavItem className="port-navbar-item">
							<AuthButton />
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
}

export default Header;
