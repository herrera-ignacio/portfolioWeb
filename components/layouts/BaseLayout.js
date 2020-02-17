import React from 'react';
import Header from '../shared/Header';

export default function(props) {
	const { className, children } = props;
	const headerType = props.headerType || 'default';
	const headerClassName = headerType === 'index' ? 'port-nav-index' : 'port-nav-default';

	return (
		<div className="layout-container">
			<Header className={headerClassName}/>
			<main className={`cover ${className}`}>
				<div className="wrapper">
					{ children }
				</div>
			</main>
		</div>
	)
}
