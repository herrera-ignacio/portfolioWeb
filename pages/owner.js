import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';

class Owner extends React.Component {

	render() {
		return (
			<BaseLayout>
				<BasePage>
					<h1> I am Owner's Page </h1>
				</BasePage>
			</BaseLayout>
		)
	}
}

export default withAuth(Owner, 'admin');
