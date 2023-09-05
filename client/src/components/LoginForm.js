import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

const Login = () => {
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [login, { error }] = useMutation(LOGIN_USER);
  const [formState, setFormState] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
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
    <Form onSubmit={handleSubmit}>
      <Alert dismissable onClose={() => setShowAlert(false)} show={showAlert}>
        Incorrect login!
      </Alert>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Your email"
          name="email"
          value={formState.email}
          onChange={handleInputChange}
          required
        />
        <Form.Control.Feedback type="invaild">
          Email is required!
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Your password"
          name="password"
          value={formState.password}
          onChange={handleInputChange}
          required
        />
        <Form.Control.Feedback type="invaild">
          Password is required!
        </Form.Control.Feedback>
      </Form.Group>
      <Button disabled={!(formState.email && formState.password)} type="submit">
        Log In
      </Button>
    </Form>
  );
};

export default Login;
