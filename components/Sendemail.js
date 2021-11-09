// import { Modal, Form, Row, Col } from 'react-bootstrap';
// import React, { useState } from 'react';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardActions from '@mui/material/CardActions';
// import IconButton from '@mui/material/IconButton';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
// import Grid from '@mui/material/Grid';
// import DraftsIcon from '@mui/icons-material/Drafts';
// import { FaEnvelope } from 'react-icons/fa';
// import emailjs from 'emailjs-com';

// function sendemail() {

//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [submitted, setSubmitted] = useState(false);

// //   const handleSubmit = (e) => {
// //   e.preventDefault()
// //   console.log('Sending')
// //   let data = {
// //     message
// //   }
// // })

//   console.log(message);
//   return (
//     <>
//       <Button variant="text" onClick={handleShow}>
//         <FaEnvelope onClick={handleShow} />
//       </Button>
//       {/* <FaEnvelope variant="text"  onClick={handleShow} /> */}
//       <Modal show={show} onHide={handleClose} animation={false}>
//         <Modal.Header closeButton>
//           <Modal.Title>Let's Connect with the requestor!</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Card
//             sx={{ maxWidth: '100%', bgcolor: '#b3d5f5' }}
//             display="flex"
//             width={5000}
//             height={80}
//           >
//             <CardHeader
//               avatar={<DraftsIcon fontSize="large" />}
//               action={
//                 <IconButton aria-label="settings">
//                   <MoreVertIcon />
//                 </IconButton>
//               }
//               title="Let's connect with requester"
//               subheader="September 14, 2016"
//             />
//             <div>
//               <TextField
//                 style={{ width: 350 }}
//                 id="standard-multiline-static"
//                 label="Send Email"
//                 multiline
//                 rows={4}
//                 variant="standard"
//                 type='text'
//                 name='message'
//                 onChange={(e)=>{setMessage(e.target.value)}}
//               />
//             </div>
//             <CardActions disableSpacing></CardActions>
//           </Card>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="contained" endIcon={<SendIcon />}>
//             Send
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default sendemail;

import { Modal, Form, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

function sendemail() {
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
        <FaEnvelope onClick={handleShow} />
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        ref={form}
        onSubmit={sendEmail}
      >
        <Modal.Header closeButton>
          <Modal.Title>Let's Connect with the requestor!</Modal.Title>
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
export default sendemail;
