import React from 'react';
import Header from '../shared/Header';

export default function(props) {
	return (
		<React.Fragment>
			<Header/>
			{props.children}
		</React.Fragment>
	)
}
