import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

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
    <Form noValidate validated={validated} onSubmit={handleSubmit} >
      <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert}>
        Incorrect login!
      </Alert>

      <div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" aria-current="true" href="#">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/signup">Sign Up</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert}>
        Incorrect login!
      </Alert>
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
      <Form.Group>
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
  </div>
</div>
    </Form>
  );
};

export default Login;
