import React, { useState } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
} from 'reactstrap';
import NavLink from './NavLink';
import NavAuthButton from '../NavAuthButton';

const Header = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	const {
		className,
	} = props;

	return (
		<div>
			<Navbar className={`port-navbar port-nav-base absolute ${className}`} color="transparent" dark expand="md">
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
							<NavAuthButton />
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
}

export default Header;
