import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Grid';
import DraftsIcon from '@mui/icons-material/Drafts';

export default function RecipeReviewCard() {
  return (
    <Grid container>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <Card
          sx={{ maxWidth: 345, bgcolor: '#b3d5f5' }}
          display="flex"
          width={500}
          height={80}
        >
          <CardHeader
            avatar={<DraftsIcon fontSize="large" />}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Let's connect with requester"
            subheader="September 14, 2016"
          />
          <div>
            <TextField
              style={{ width: 350 }}
              id="standard-multiline-static"
              label="Send Email"
              multiline
              rows={4}
              variant="standard"
            />
          </div>
          <CardActions disableSpacing>
            <Button variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
