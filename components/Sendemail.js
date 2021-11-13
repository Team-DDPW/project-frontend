import { Modal, Form, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

function Sendemail() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_n1iqgwb',
        'template_yqnyfse',
        form.current,
        'user_7hgy6zRZlp5hAalVdhRZw'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Button variant="text" onClick={handleShow}>
        <FaEnvelope onClick={handleShow} size={28} />
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        ref={form}
        onSubmit={sendEmail}
      >
        <Modal.Header closeButton>
          <Modal.Title>Lets Connect with the requestor!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control as="textarea" rows={3} name="message" />
            </Form.Group>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              type="submit"
              value="Send"
            >
              Send
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
export default Sendemail;
