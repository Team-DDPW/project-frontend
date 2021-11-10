import React, { useState, useCallback, useEffect, Component } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import destinations from '../assets/state.json';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

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

  // const fetchOrigins = useCallback(async () => {
  //   try {
  //     const response = await authAxios.get(`/country/list`);
  //     console.log(response.data.countries);
  //     setOrigins(response.data.countries);
  //   } catch (err) {}
  // });

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    authAxios
      .get(`/country/list`)
      .then((response) => setOrigins(response.data.countries));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  console.log(origins);
  //   return (
  //     <Container>
  //       <Row>
  //         <Col sm={5}>
  //           <FormControl sx={{ mb: 40 }}>
  //             <InputLabel htmlFor="grouped-native-select">Origin</InputLabel>
  //             <Select
  //               native
  //               defaultValue=""
  //               id="grouped-native-select"
  //               label="Grouping"
  //               // onClick={() => fetchOrigins()}
  //             >
  //               <option aria-label="None" value="" />
  //               {Object.keys(origins).map((key, i) => (
  //                 <option>{origins[key]}</option>
  //               ))}
  //             </Select>
  //           </FormControl>
  //         </Col>
  //         <Col sm={5}>
  //           <FormControl>
  //             <InputLabel htmlFor="grouped-native-select">Destination</InputLabel>
  //             <Select
  //               native
  //               defaultValue=""
  //               id="grouped-native-select"
  //               label="Grouping"
  //             >
  //               <option aria-label="None" value="" />

  //               {Object.keys(destinations).map((key, i) => (
  //                 <option>{destinations[key]}</option>
  //               ))}
  //             </Select>
  //           </FormControl>
  //         </Col>
  //         <Col sm={2}>
  //           <Button variant="contained">Search</Button>
  //         </Col>
  //       </Row>
  //     </Container>
  //   );
  // }

  // export default Dropdown;

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
          <Button variant="primary">Search</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Dropdown;
