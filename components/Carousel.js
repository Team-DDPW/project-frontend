import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import cargo2 from '../assets/cargo2.jpeg';

function Crossimage() {
  return (
    <div style={{ display: 'block', width: 700, padding: 30 }}>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            alt="Card image cap"
            class="card-img-top embed-responsive-item"
            src={cargo2}
          />

          <Carousel.Caption>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
            alt="Image Two"
          />
          <Carousel.Caption>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Crossimage;
