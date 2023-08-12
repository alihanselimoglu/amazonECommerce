import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

const SigninScreen = () => {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  return (
    <>
      <Container classname="small-container">
        <Helmet>
          <title>Sign In</title>
        </Helmet>
        <h1 className="my-3">Sign In</h1>
        <Form>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              required
            />
          </Form.Group>
          <Button type="submit" variant="primary">
            Sign In
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New Customer?{' '}
            <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SigninScreen;
