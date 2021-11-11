import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function Crossimage() {
  return (
    <div
      style={{ display: 'flex', width: '50%', padding: 80, margin: 'auto' }}
    >
      <Carousel>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={'/2.jpg'} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={'/1.jpg'} alt="Image Two" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={'/3.jpg'} alt="Image Two" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Crossimage;
