import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import { Link } from "react-router-dom";
import "./style.css";

const Login = ({ setShowSignUp, setShowLogin }) => {
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [login] = useMutation(LOGIN_USER);
  const [formState, setFormState] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
      setShowSignUp(true);
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


  const handleLogin = async () => {
    if (formState.email && formState.password) {
      try {
        const { data } = await login({
          variables: { ...formState },
        });
        Auth.login(data.login.token);
        setShowSignUp(true);
      } catch (error) {
        setShowAlert(true);
      }
    } else {
      setShowAlert(true);
    }
  };

  return (
    <Form className="login" noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Your email"
          name="email"
          value={formState.email}
          onChange={handleInputChange}
          required
          autoComplete="email" 
        />
        <Form.Control.Feedback type="invalid">
          {/* Email is required! */}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Your password"
          name="password"
          value={formState.password}
          onChange={handleInputChange}
          required
          autoComplete="password"
        />
        <Form.Control.Feedback type="invalid">
          {/* Password is required! */}
        </Form.Control.Feedback>
      </Form.Group>
      <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert}>
        Incorrect login!
      </Alert>
      <div className="login-buttons">
        <Button onClick={handleLogin}>Log In</Button>
        <Link to="/signup">
          <Button className="nav-link">Don't have an account? Sign up here!</Button>
        </Link>
      </div>
    </Form>
  );
};

export default Login;
