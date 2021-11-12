import {
  Container,
  Grid,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  Button,
} from '@mui/material';
import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa';
import Sendemail from './Sendemail';
import React, { useState, useEffect } from 'react';
import useResource from '../hooks/useResource.js';
import { InputGroup, FormControl } from 'react-bootstrap';

function List() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const { resources, loading } = useResource();
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);

  const handleSearch = (event) => {
    let value = event.target.value;
    let result = [];
    console.log(value);
    result = allData.filter((data) => {
      return data.origin_country.search(value) != -1;
    });
    setFilteredData(result);
  };

  useEffect(() => {
    setAllData(resources);
    setFilteredData(resources);
  }, []);

  console.log('resources line 22: ', filteredData);
  // console.log('resources line 22: ', resources);

  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search by Origin "
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(event) => handleSearch(event)}
          type="text"
        />
      </InputGroup>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {filteredData &&
            filteredData.map((card) => (
              <Grid item key={card.id} xs={12}>
                <Card
                  sx={{
                    height: '30rem',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={
                      {
                        // 16:9
                        // pt: '56.25%',
                      }
                    }
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTpev6JNGxeOkBgVdxwxz2kHsG0_t5LQoIJA&usqp=CAU"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="h3">
                      Item Name: {card.item_name}
                    </Typography>
                    <Typography>
                      Item Description: {card.item_description}
                    </Typography>
                    <Typography>Offer Price: {card.offer_price}</Typography>
                    <Typography>
                      Origin Country: {card.origin_country}
                    </Typography>
                    <Typography>
                      Destination Country: {card.destination_country}
                    </Typography>
                    <Typography>Weight: {card.weight}</Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small">
                      <Link href={`/detail/${card}`}>Details</Link>
                    </Button>
                    <Sendemail />
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
}

export default List;
