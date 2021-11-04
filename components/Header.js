import AppBar from '@mui/material/AppBar';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { withStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles({
//   heading1: {
//     flexGrow: 1,
//   },
// });

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>
        <CameraIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          FastEx project
        </Typography>
        <Button color="error">Sign Up</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
