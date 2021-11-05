import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

function Dropdown() {
  const destinations = ['Nepal', 'Ethopia'];
  const origins = ['Texas', 'Washington'];
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

          {origins.map((origin) => (
            <option value={1}>{origin}</option>
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
