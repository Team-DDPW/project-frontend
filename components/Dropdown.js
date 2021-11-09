import React, { useState, useCallback, useEffect, Component } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import axios from 'axios';
import destinations from '../assets/state.json';

function Dropdown() {
  const [origins, setOrigins] = useState([]);
  
  const apiUrl = 'https://countries-cities.p.rapidapi.com/location';
  const authAxios = axios.create({
    baseURL: apiUrl,
    headers: {
      'x-rapidapi-host': 'countries-cities.p.rapidapi.com',
      'x-rapidapi-key': '',
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
  return (
    <div>
      <FormControl sx={{ m: 3, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">Origin</InputLabel>
        <Select
          native
          defaultValue=""
          id="grouped-native-select"
          label="Grouping"
          // onClick={() => fetchOrigins()}
        >
          <option aria-label="None" value="" />
          {Object.keys(origins).map((key, i) => (
            <option>{origins[key]}</option>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 3, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">Destination</InputLabel>
        <Select
          native
          defaultValue=""
          id="grouped-native-select"
          label="Grouping"
        >
          <option aria-label="None" value="" />

          {Object.keys(destinations).map((key, i) => (
            <option>{destinations[key]}</option>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" sx={{ mt: 4 }}>
        Search
      </Button>
    </div>
  );
}

export default Dropdown;
