import React from "react";
import { FormGroup, Label, Input } from 'reactstrap';

const PortInput = ({
	label,
	type,
	field, // { name, value, onChange, onBlur }
	form: { touched, errors },
	...props
}) => (
	<FormGroup>
		<Label>{label}</Label>
		<Input type={type} {...field} {...props} />
		{
			touched[field.name]
			&& errors[field.name]
			&& <div className="error">{ errors[field.name] }</div>
		}
	</FormGroup>
);

export default PortInput;
