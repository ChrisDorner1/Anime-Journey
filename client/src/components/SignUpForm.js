import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

const SignUp = ({ setShowLogin }) => {
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [addUser] = useMutation(ADD_USER);
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
      setShowLogin(true);
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
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert}>
        Incorrect login!
      </Alert>

      <Form.Group>
        <Form.Label htmlFor="username">Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Your username"
          name="username"
          value={formState.username}
          onChange={handleInputChange}
          required
        />
        {validated && !formState.username && (
        <Form.Control.Feedback type="invalid">
          Username is required!
        </Form.Control.Feedback>
        )}
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Your email"
          name="email"
          value={formState.email}
          onChange={handleInputChange}
          required
        />
        <Form.Control.Feedback type="invalid">
          Email is required!
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
        />
        <Form.Control.Feedback type="invalid">
          Password is required!
        </Form.Control.Feedback>
      </Form.Group>
      <Button
        disabled={
          !(formState.username && formState.email && formState.password)
        }
        type="submit"
      >
        Sign Up!
      </Button>
    </Form>
  );
};

export default SignUp;
