import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';

class Secret extends React.Component {
	static async getInitialProps() {
		const superSecretValue = 'Some secret value';
		return { superSecretValue };
	}

	render() {
		const { superSecretValue } = this.props;
		console.log(this.props);
		return (
			<BaseLayout {...this.props.auth}>
				<BasePage>
					<h1>I am Secret Page</h1>
					<p>Secret content here...</p>
					<h2>{superSecretValue}</h2>
				</BasePage>
			</BaseLayout>
		)
	}
}

export default withAuth(Secret);
