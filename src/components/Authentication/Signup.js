import React from "react";
import { Button, Form, Row } from 'react-bootstrap';
const Signup = (props) => {
    const {changeAuthMode} = props;
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
    
    return (
        <Form onSubmit={(e) => onSubmitHandler(e)} className="form-container">
            <h3 className="form-title">SignUp</h3>
            <Form.Group as={Row} className="mb-3">
                <Form.Label>UserName</Form.Label>
                <Form.Control type="text" id="name" placeholder="UserName" required />
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" id="email" placeholder="Email" required />
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" id="password" placeholder="Password" required />
            </Form.Group>
            <Button type="submit" variant="primary">SIGIN</Button>
            <div>
                <div>
                    Not registered yet?{" "}
                    <span className="link-primary" onClick={changeAuthMode}>
                        SignIn
                    </span>
                </div>
            </div>
        </Form>
    );

}

export default Signup;

