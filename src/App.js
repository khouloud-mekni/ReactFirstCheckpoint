import React from "react";
import {Form} from 'react-bootstrap';
import './App.css';


function App() {
  return (
    <div className="App">
    <h2> please fill out this form </h2>
      <Form className="back">
    <Form.Group className="mb-3" controlId="formBasicUserName">
    <Form.Label>UserName</Form.Label>
    <Form.Control type="UserName" placeholder="Enter your Name" />
    </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />

    <Form.Text className="text-muted" >
      We'll never share your email with anyone else.
    </Form.Text>

  </Form.Group >
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <button> Submit </button>
</Form>
    </div>
  );
}

export default App;
