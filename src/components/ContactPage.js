import React from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as yup from "yup";


const schema = yup.object().shape({
	firstname: yup.string().required("Required, minimum 2 characters"),
	lastname: yup
        .string()
		.required()
		.min(8, "Required, minimum 2 characters"),
	emailadress: yup
		.string()
		.required()
		.min(8, "Required, must be in a valid email format"),
	message: yup
		.string()
		.required()
		.min(10, "Required, minimum 10 characters"),
});

 export default function ContactPage(props){
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });
    function onSubmit() {

    }
    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
				<div className="contactheading">
				<h2>Contact us</h2>
				</div>
                <Form.Label>First name</Form.Label>
                <Form.Control name="firstname" placeholder="Enter your first name" ref={register}/>
                {errors.firstname && <p>Please enter minimum 2 characters.</p>}
            </Form.Group>
            <Form.Group>
                <Form.Label>Last name</Form.Label>
                <Form.Control name="lastname" placeholder="Enter your last name" ref={register}/>
                {errors.lastname && <p>Please enter minimum 2 characters.</p>}
            </Form.Group>
			<Form.Group>
                <Form.Label>Email adress</Form.Label>
                <Form.Control name="emailadress" placeholder="Enter your email" ref={register}/>
                {errors.emailadress && <p>Please enter in a valid email format.</p>}
            </Form.Group>
			<Form.Group>
				<Form.Label>Message</Form.Label>
				<Form.Control name="message" placeholder="Type your message here..." ref={register}/>
				{errors.message && <p>Please enter in minimum 10 characters.</p>}
			</Form.Group>
            <Button type="submit">Submit</Button>
        </Form>
        )
}
