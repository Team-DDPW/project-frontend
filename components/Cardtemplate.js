import React from 'react'
import { Row, Button, Col, Card } from 'react-bootstrap';

function card() {
    return (
      <Row xs={1} md={3} className="g-4">
        <Col>
          <Card style={{ width: '20rem' }}>
            <Card.Img src={'/cargo.jpg'} alt="Card image" />;
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              ✨✨✨✨✨
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '20rem' }}>
            <Card.Img src={'/1.jpg'} alt="Card image" />;
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              ✨✨✨✨
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '20rem' }}>
            <Card.Img src={'/3.jpg'} alt="Card image" />;
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              ✨✨✨✨✨
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
}

export default card
