import React from 'react';
import axios from 'axios';
import BaseLayout from '../components/layouts/BaseLayout';
import { Link } from '../routes';
import BasePage from "../components/BasePage";
import { Col, Card, CardHeader, CardBody, CardText, CardTitle, Row } from 'reactstrap';

class Portfolios extends React.Component {
	static async getInitialProps() {
		let posts = [];

		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
			posts = response.data;
		} catch (err) {
			console.error(err);
		}

		return {
			posts: posts.splice(0, 10),
		}
	}

	renderPosts(posts) {
		return posts.map((post, index) => {
			return (
			<Col md="4" key={index}>
				<React.Fragment >
					<span>
						<Card className="portfolio-card">
							<CardHeader className="portfolio-card-header">#{post.id}</CardHeader>
							<CardBody>
								<p className="portfolio-card-city"> Demo location </p>
								<CardTitle className="portfolio-card-title">{post.title}</CardTitle>
								<CardText className="portfolio-card-text">Some Description</CardText>
								<div className="readMore"> </div>
							</CardBody>
						</Card>
					</span>
				</React.Fragment>
			</Col>
		)
		});
	}

	render() {
		const { posts } = this.props;

		return (
			<BaseLayout>
				<BasePage className="portfolio-page" title="Portfolios">
					<Row>
						{ this.renderPosts(posts) }
					</Row>
				</BasePage>
			</BaseLayout>
		)
	}
}

export default Portfolios;
