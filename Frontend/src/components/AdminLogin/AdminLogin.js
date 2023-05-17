import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './AdminLogin.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const validationErrors = {};
    if (!username) {
      validationErrors.username = 'Email is required';
    }
    if (!password) {
      validationErrors.password = 'Password is required';
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const data = {
      "email": username,
      "password":  password
    };
    fetch('http://127.0.0.1:3500/Adminlogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      const token = data.token;
      if(data.message)
      {
        window.alert(data.message);
      }
      localStorage.setItem('authToken', token);
      if (data.redirectUrl) {
        window.location.href = data.redirectUrl;
      }
    })
    .catch(error => {
      console.log('error:',error);
    });
  };

  return (
    <div className="login-container">
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange} />
          {errors.username &&  <p className="text-danger fs-6" > {errors.username}</p>}
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" value={password} onChange={handlePasswordChange} />
          {errors.password && <p className="text-danger fs-6" > {errors.password}</p>}
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default LoginPage;