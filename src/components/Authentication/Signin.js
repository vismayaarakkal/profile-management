import React, { useEffect, useState } from "react";
import { Button, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Signin = () => {
    const [userMail, setUserMail] = useState('');
    const [password, setPassword] = useState('');
    const [newUserMail, setNewUserMail] = useState('');
    const [newUserName, setNewUserName] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();
    let [authMode, setAuthMode] = useState("signin");
    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false));

    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setauthenticated(true);
            navigate("/dashboard")
        }
    }, []);

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    const checkAuthentication = async () => {
        try {
            const signInData = {
                email: userMail,
                password: password
            }
            // const userData = await axios("userLogin", signInData);
            // console.log(userData?.data?.message);
            setauthenticated(true);
            localStorage.setItem("authenticated", true);
            if (authenticated) {
                console.log(authenticated);
                navigate("/dashboard");

            } else {
                navigate("/");
            }

        } catch (e) {
            console.log(e.message);
        }
    }
    const createNewProfile = async () => {

        const signUpData = {
            name: newUserName,
            email: newUserMail,
            password: newPassword
        }
        try {
            // const newProfile = await axios("createNewProfile", signUpData);
            // console.log(newProfile?.data?.message);
            console.log("New Profile Created");
            setauthenticated(true);
            localStorage.setItem("authenticated", true);
            if (authenticated) {
                console.log(authenticated);
                navigate("/dashboard");

            } else {
                navigate("/");
            }
        } catch (e) {
            console.log(e.message);
        }
    }

    const onSigninSubmit = (event) => {
        event.preventDefault();
        checkAuthentication();
    }
    const onSignupSubmit = (event) => {
        event.preventDefault();
        createNewProfile();
    }

    if (authMode === "signin") {
        return (
            <Form onSubmit={(e) => onSigninSubmit(e)} className="form-container">
                <h3 className="form-title">Sign In</h3>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" id="email" placeholder="Email" onChange={(e) => setUserMail(e?.target?.value)} required />
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" id="password" placeholder="Password" onChange={(e) => setPassword(e?.target?.value)} required />
                </Form.Group>
                <Button type="submit" variant="primary">SIGIN</Button>
                <div>
                    <div>
                        Not registered yet?{" "}
                        <span className="link-primary" onClick={changeAuthMode}>
                            Sign Up
                        </span>
                        <p className="link-primary">
                            <Link to="retreiveLogin" > Forgot Password</Link>
                        </p>
                    </div>
                </div>
            </Form>
        );
    }

    return (
        <Form onSubmit={(e) => onSignupSubmit(e)} className="form-container">
            <h3 className="form-title">SignUp</h3>
            <Form.Group as={Row} className="mb-3">
                <Form.Label>UserName</Form.Label>
                <Form.Control type="text" id="name" placeholder="UserName" onChange={(e) => setNewUserName(e?.target?.value)} required />
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" id="email" placeholder="Email" onChange={(e) => setNewUserMail(e?.target?.value)} required />
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" id="password" placeholder="Password" onChange={(e) => setNewPassword(e?.target?.value)} required />
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

export default Signin;