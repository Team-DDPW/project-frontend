import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from 'next/link';
import Crossimage from '../components/Carousel';
import Dropdown from '../components/Dropdown';

function Heading() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="lg">
        <Dropdown />
        <Typography
          variant="h5"
          alignContent="center"
          color="text.secondary"
          paragraph
          margin = 'auto'
        ></Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button variant="outlined">
            <Link href="/listings" variant="body2">
              Listings
            </Link>
          </Button>
          <Button variant="outlined">Secondary action</Button>
        </Stack>
        <Crossimage />
      </Container>
    </Box>
  );
}

export default Heading;
