import React, { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import axios from 'axios';

function Dropdown() {
  const [origins, setOrigins] = useState([]);

  useEffect(() => {
    fetchOrigins();
  }, []);
  useEffect(() => {
    console.log(origins);
  }, [origins]);
  const fetchOrigins = async () => {
    const response = await axios(
      'https://countries-cities.p.rapidapi.com/location/country/list'
    );
    setOrigins(response.data.countries);
  };
  // const options = {
  //   method: 'GET',
  //   url: 'https://countries-cities.p.rapidapi.com/location/country/list',
  //   headers: {
  //     'x-rapidapi-host': 'countries-cities.p.rapidapi.com',
  //     'x-rapidapi-key': '1dc3b3cbf7mshf2b32513b562403p1b4a2ejsn261b834ff124',
  //   },
  // };

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log('countries', response.data.countries);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });
  const destinations = ['Nepal', 'Ethopia'];
  // const origins = ['Texas', 'Washington'];
  return (
    <div>
      <FormControl sx={{ m: 3, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">Origin</InputLabel>
        <Select
          native
          defaultValue=""
          id="grouped-native-select"
          label="Grouping"
        >
          <option aria-label="None" value="" />

          {origins &&
            origins.map((origin) => <option value={1}>{origin}</option>)}
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

          {destinations.map((destination) => (
            <option value={1}>{destination}</option>
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
