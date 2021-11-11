import React, { useState, useCallback, useEffect, Component } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import destinations from '../assets/state.json';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';

function Dropdown() {
  const [origins, setOrigins] = useState([]);

  const apiUrl = 'https://countries-cities.p.rapidapi.com/location';
  const authAxios = axios.create({
    baseURL: apiUrl,
    headers: {
      'x-rapidapi-host': 'countries-cities.p.rapidapi.com',
      'x-rapidapi-key': process.env.NEXT_PUBLIC_SECRET_KEY,
    },
  });

  useEffect(() => {
    authAxios
      .get(`/country/list`)
      .then((response) => setOrigins(response.data.countries));
  }, []);

  // console.log(origins);

  return (
    <Container>
      <Row className="dropdownrow">
        <Col col-md-offset-2>
          <Form.Select aria-label="Default select example">
            <option>Origin</option>
            {Object.keys(origins).map((key, i) => (
              <option>{origins[key]}</option>
            ))}
          </Form.Select>
        </Col>
        <Col col-md-offset-2>
          <Form.Select aria-label="Default select example">
            <option>Destination</option>
            {Object.keys(destinations).map((key, i) => (
              <option>{destinations[key]}</option>
            ))}
          </Form.Select>
        </Col>
        <Col>
          <Button variant="primary">
            <Link href="/listings">Search</Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Dropdown;
