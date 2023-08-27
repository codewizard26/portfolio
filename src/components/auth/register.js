import React from "react";
import { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import axios from "axios";


const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form validation and submission logic here
    console.log('Form submitted with data:', formData);
  };
    

return (
    <div>
    <Container>
      <Row className="vh-100 mt-4 d-flex justify-content-center align-items-center">
        <Col  md={8} lg={6} xs={12}>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-md-4">
                <h2 className="fw-bold mb-2 text-uppercase ">Register</h2>
                <p className=" mb-5">Please enter your login and password!</p>
                <div className="mb-3">
                <Form.Group
                      className="mb-3"
                      controlId="formBasicPassword"
                      onSubmit={submitForm}
                    >
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Name" value = {user.name} onChange={handleInputChange}/>
                    </Form.Group>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                        Email address
                      </Form.Label>
                      <Form.Control type="email" placeholder="Enter email" value = {user.email} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" value = {user.password} onChange={handleChange} />
                    </Form.Group>
                    
                    <div className="d-grid">
                      <Button variant="primary" type="submit">
                        Register
                      </Button>
                    </div>
                  </Form>
                  <div className="mt-3">
                    <p className="mb-0  text-center">
                     Already  have an account?{" "}
                      <a href="/signin" className="text-primary fw-bold">
                        Sign In
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
)
}

export default Signup