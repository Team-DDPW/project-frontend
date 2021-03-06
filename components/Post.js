import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import Date from './Date';
import { useFormFields } from './hooks';
import useResource from '../hooks/useResource.js';

function Post() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [fields, handleFieldChange] = useFormFields({});
  const { createResource } = useResource();

  const onSubmit = () => {
    createResource(fields);
  };

  return (
    <>
      <Button variant="text" onClick={handleShow}>
        Create Post
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Lets Create Your Post!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="item_name">
                <Form.Label>Item Name</Form.Label>
                <Form.Control autoFocus onChange={handleFieldChange} />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="item_description">
              <Form.Label>Item Description</Form.Label>
              <Form.Control onChange={handleFieldChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="weight">
              <Form.Label>Weight</Form.Label>
              <Form.Control
                onChange={handleFieldChange}
                placeholder="Package Weight"
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="origin_country">
                <Form.Label>Origin State</Form.Label>
                <Form.Control onChange={handleFieldChange} />
              </Form.Group>

              <Form.Group as={Col} controlId="destination_country">
                <Form.Label>Destination Country</Form.Label>
                <Form.Control onChange={handleFieldChange} />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Label>Deadline</Form.Label>
              <Date />
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="offer_price">
                <Form.Label>Price Offer</Form.Label>
                <Form.Control onChange={handleFieldChange} />
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" className="btnFormSend" onClick={onSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Post;
