import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';

import SuperComponent from '../components/SuperComponent';

class Index extends SuperComponent {

	static async getInitialProps() {
		let userData = {};

		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
			userData = response.data;
		} catch (err) {
			console.error(err);
		}

		return {
			userData
		}
	}

	constructor(props) {
		super(props);

		this.state = {
			title: 'I am Index Page'
		}
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

	componentDidUpdate() {
		console.log('componentDidUpdate');
	}

	componentWillUnmount() {
		console.log('componentWillUnmount');
	}

	updateTitle = () => {
		this.setState({ title: 'Updated Index Page'});
	};

	render() {
		const { title } = this.state;
		const { userData } = this.props;

		return (
			<BaseLayout>
				<h1 className='fromPage'>Index Page from Class Component</h1>
				<h2> { title } </h2>
				<h3> Fetched data: { userData.title } </h3>
				<button onClick={this.updateTitle}> Change Title </button>
			</BaseLayout>
		)
	}
}

export default Index;
