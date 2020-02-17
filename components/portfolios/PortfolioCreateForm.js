import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button } from 'reactstrap';
import PortInput from '../form/PortInput';
import PortDate from '../form/PortDate';

const validateInputs = (values) => {
	let errors = {};

	Object.entries(values).forEach(([key, value]) => {
		if (!values[key] && (values[key] === 'startDate' || values[key] === 'endDate')) {
			errors[key] = `Field ${key} is required!`
		}
	});

	return errors;
};

const INITIAL_VALUES = {
	title: '',
	company: '',
	location: '',
	position: '',
	description: '',
	startDate: '',
	endDate: '',
};

const PortfolioCreateForm = () => (
	<div>
		<h1>Any place in your app!</h1>
		<Formik
			initialValues={INITIAL_VALUES}
			validate={(values) => validateInputs(values)}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 400);
			}}
		>
			{({ isSubmitting }) => (
				<Form>
						<Field component={PortInput} type="text" label="Title" name="title" />

						<Field component={PortInput} type="text" label="Company" name="company" />

						<Field component={PortInput} type="text" label="Location" name="location" />

						<Field component={PortInput} type="text" label="Position" name="position" />

						<Field component={PortInput} type="textarea" label="Description" name="description"/>

						<Field component={PortDate} type="text" label="Start Date" name="startDate" />

						<Field component={PortDate} type="text" label="End Date" name="endDate" />

					<Button type="submit" disabled={isSubmitting}>
						Submit
					</Button>
				</Form>
			)}
		</Formik>
	</div>
);

export default PortfolioCreateForm;
