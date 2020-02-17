import React from 'react';
import { Row, Col } from 'reactstrap';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from "../components/BasePage";
import PortfolioCreateForm from '../components/portfolios/PortfolioCreateForm';

import withAuth from '../components/hoc/withAuth';

class PortfolioNew extends React.Component {

	render() {
		return (
			<BaseLayout>
				<BasePage className="portfolio-create-page" title="Create New Portfolio">
					<Row>
						<Col md="6">
							<PortfolioCreateForm onClick={(vars) => { console.log(vars) }} />
						</Col>
					</Row>
				</BasePage>
			</BaseLayout>
		)
	}
}

export default withAuth(PortfolioNew, 'admin');
