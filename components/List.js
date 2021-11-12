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

import useResource from '../hooks/useResource.js';

function List() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const { resources, loading } = useResource();

  // console.log('resources line 22: ', resources);

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {resources &&
          resources.map((card) => (
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
                  image="https://m.media-amazon.com/images/I/317Eq9tmoeL._AC_SX355_.jpg"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Item Name: {card.item_name}
                  </Typography>
                  <Typography>
                    Item Description: {card.item_description}
                  </Typography>
                  <Typography>Offer Price: {card.offer_price}</Typography>
                  <Typography>Origin Country: {card.origin_country}</Typography>
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
  );
}

export default List;
