import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './UserLogin.css';

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
    fetch('http://127.0.0.1:3500/Userlogin', {
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
    <div className="navbar">
    <div className="container-fluid d-flex align-items-center justify-content-end p-0">
      <Form onSubmit={handleSubmit} className="login-form d-flex">
      <div className="d-flex align-items-center mr-2">
          <Form.Label className="mr-2">Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange}style={{ width: '90px' }} />
          {errors.username &&  <p className="text-danger fs-6" > {errors.username}</p>}
          </div>

          <div className="d-flex align-items-center mr-2">
          <Form.Label className="mr-2">Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" value={password} onChange={handlePasswordChange}style={{ width: '90px' }}/>
          {errors.password && <p className="text-danger fs-6" > {errors.password}</p>}
          </div>

        <Button variant="primary" type="submit" className="ml-2">
          Login
        </Button>
      </Form>
    </div>
    </div>
  );
}

export default LoginPage;