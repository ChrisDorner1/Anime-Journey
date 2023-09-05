import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import "./style.css";

const Login = () => {
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [login] = useMutation(LOGIN_USER);
  const [formState, setFormState] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({
        variables: { email: formState.email, password: formState.password },
      });
      Auth.login(data.login.token);
    } catch (error) {
      setShowAlert(true);
      console.log(error);
    }
    setValidated(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="login">
      {/* <div className="card-header">
          <ul className="nav-item">
            <a className="nav-link active" aria-current="true" href="#">
              Login
            </a>
            <a className="nav-link" href="/signup">
              Sign Up
            </a>
          </ul> */}
      <div className="card-body">
      <div className="card-header">
          <ul className="nav-item">
            <a className="nav-link active" aria-current="true" href="#">
              Login
            </a>
            <a className="nav-link" href="/signup">
              Sign Up
            </a>
          </ul>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert}>
          Incorrect login!
        </Alert>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="login-input">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Beepus@leepus.com"
              name="email"
              value={formState.email}
              onChange={handleInputChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Email is required!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="login-input">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password1234"
              name="password"
              value={formState.password}
              onChange={handleInputChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Password is required!
            </Form.Control.Feedback>
          </Form.Group>
          <Button disabled={!(formState.email && formState.password)} type="submit">
            Log In
          </Button>
        </Form>
      </div>
      </div>
    </div>
  );
};

export default Login;
