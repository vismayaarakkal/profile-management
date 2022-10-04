import React, { useState } from "react";
import { Button, Form, Row } from 'react-bootstrap';
import axios from "axios";
import { Link } from 'react-router-dom';
const ForgotPassword = () => {

    const [userMail, setUserMail] = useState('');

    const checkAuthentication = async () => {
        try {
            const userData = {
                userMail: userMail
            }
            const response = await axios("retreiveLogin", userData);
            console.log(response?.data?.message);

        } catch (e) {
            console.log(e.message);
        }
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        checkAuthentication();
    }
   
        return (
            <Form onSubmit={(e) => onSubmitHandler(e)} className="form-container">
                <h3 className="form-title">Sign In</h3>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" id="email" placeholder="Email" onChange={(e) => setUserMail(e?.target?.value)} required />
                </Form.Group>
                
                <Button type="submit" variant="primary">SUBMIT</Button>
                <p className="link-primary">
                      <Link to="/" > SignIn</Link>
                    </p>
            </Form>
        );

}

export default ForgotPassword;