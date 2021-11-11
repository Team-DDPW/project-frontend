import React from 'react';
import { Card, Row, Container, Col } from 'react-bootstrap';

function Headingcard() {
  return (
    <>
      <Card className="text-center">
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title>Let's Find people who can help you!!</Card.Title>
          <Card.Text>
            FastEx has been providing the best services as a platform bringing
            community together. Users gets rewarded for helping people to ship
            their package.
          </Card.Text>
          <Card.Text>
            Users gets rewarded for helping people to ship their package.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
      <Container>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default Headingcard;
