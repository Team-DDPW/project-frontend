import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import Date from './Date';

function Post() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [itemName, setitemName] = useState('');
  const [itemDescription, setitemDescription] = useState('');
  const [weight, setWeight] = useState('');
  const [oCountry, setOCountry] = useState('');
  const [dCountry, setDCountry] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priceOffer, setPriceOffer] = useState('');

  // const [state, setState] = useState({ itemName: '', itemDescription: '' });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setState((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  const onSubmit = () => {
    console.log(itemName);
    console.log(itemDescription);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create Post
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Let's Create Your Post!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Item Name</Form.Label>
                <Form.Control
                  className="form-control"
                  type="text"
                  onChange={(e) => setitemName({ itemName: e.target.value })}
                  placeholder="Document / Package"
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Item Description</Form.Label>
              <Form.Control
                className="form-control"
                type="text"
                onChange={(e) =>
                  setitemDescription({ itemDescription: e.target.value })
                }
                placeholder="Detailed Item Description"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Weight</Form.Label>
              <Form.Control placeholder="Package Weight" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Country of Origin</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Destination Country</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Label>Deadline</Form.Label>
              <Date />
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Price Offer</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Default file input example</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" className="btnFormSend" onClick={onSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Post;
