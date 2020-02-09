import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { Button, Container } from 'reactstrap';

import SuperComponent from '../components/SuperComponent';

import 'bootstrap/dist/css/bootstrap.min.css';

class Index extends SuperComponent {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<BaseLayout>
				<Container>
					<Button color="danger">Danger!</Button>
				</Container>
			</BaseLayout>
		)
	}
}

export default Index;
