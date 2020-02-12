import React from 'react';
import Typed from 'react-typed';
import BaseLayout from '../components/layouts/BaseLayout';
import { Container, Col, Row } from 'reactstrap';

import SuperComponent from '../components/SuperComponent';

class Index extends SuperComponent {
	constructor(props) {
		super(props);

		this.roles = ['Fullstack Developer', 'Solutions Architect', 'Agile team player']
		console.log(process.env.TEST_VAR);
	}

	render() {
		return (
			<BaseLayout className="cover">
				<div className="main-section">
					<div className="background-image">
						<img src="/static/images/background-index.png"  alt="background"/>
					</div>

					<Container>
						<Row>
							<Col md="6">
								<div className="hero-section">
									<div className={`flipper`}>
										<div className="back">
											<div className="hero-section-content">
												<h2> Software Engineer </h2>
												<div className="hero-section-content-intro">
													AWS Solutions Architect, Javascript Expert.
												</div>
											</div>
											<img className="image" src="/static/images/section-1.png"/>
											<div className="shadow-custom">
												<div className="shadow-inner"> </div>
											</div>
										</div>
									</div>
								</div>
							</Col>
							<Col md="6" className="hero-welcome-wrapper">
								<div className="hero-welcome-text">
									<h1>
										Welcome to my portfolio.
										Discover the projects I've been working on through the years.
										Want me on your team? You can hire me!
									</h1>
								</div>
								<Typed
									loop
									typeSpeed={60}
									backSpeed={60}
									strings={this.roles}
									shuffle={false}
									backDelay={1000}
									loopCount={0}
									showCursor
									cursorChar="|"
									className="self-typed"
								/>
								<div className="hero-welcome-bio">
									<h1>
										Let's take a look at my work.
									</h1>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</BaseLayout>

		)
	}
}

export default Index;
