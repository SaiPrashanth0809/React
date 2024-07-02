// Import the AltBar component at the top

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import MotionPhotosAutoIcon from '@mui/icons-material/MotionPhotosAuto';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import GavelIcon from '@mui/icons-material/Gavel';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import BlindIcon from '@mui/icons-material/Blind';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import BiotechIcon from '@mui/icons-material/Biotech';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import CelebrationIcon from '@mui/icons-material/Celebration';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import CastleIcon from '@mui/icons-material/Castle';
import BasicTextFields from './Searchbar';
import SearchIcon from '@mui/icons-material/Search';
import ResponsiveDrawer from './bar';

const drawerWidth = 240;

function Drawe(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [showAltBar, setShowAltBar] = React.useState(false); // State to control the visibility of AltBar

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const toggleAltBar = () => {
    setShowAltBar(!showAltBar);
  };

  const drawer = (
    <div >
      <Toolbar />
      <img src="./Ping.png" alt="logo" width="200px" style={{ marginBottom: '20px', paddingLeft: '25px', marginTop: '-30px' }} />
      <Divider />
      <Typography sx={{ paddingLeft: '20px', marginTop: '9px' }}>
        Categories
      </Typography>
      <List>
        {['Galary', 'Top Rated', 'Upcoming'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <LocalMoviesIcon  />}
                {index === 1 && <StarOutlineIcon  />}
                {index === 2 && <UpcomingIcon  />}
              </ListItemIcon>
              <ListItemText primary={text}  />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Typography sx={{ paddingLeft: '20px', marginTop: '13px' }}>
        Genres
      </Typography>
      <List>
        {[
          'Action', 'Animation', 'Comedy', 'Crime', 'Documentary',
          'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music',
          'Mystery', 'Romance', 'Science Fiction', 'TV Movie', 'Thriller',
          'War', 'Western'
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <SportsHandballIcon  />}
                {index === 1 && <MotionPhotosAutoIcon  />}
                {index === 2 && <TheaterComedyIcon  />}
                {index === 3 && <GavelIcon  />}
                {index === 4 && <SlideshowIcon  />}
                {index === 5 && <Diversity3Icon  />}
                {index === 6 && <HandshakeIcon  />}
                {index === 7 && <AutoFixHighIcon  />}
                {index === 8 && <AvTimerIcon  />}
                {index === 9 && <MoodBadIcon  />}
                {index === 10 && <MusicNoteIcon  />}
                {index === 11 && <BlindIcon  />}
                {index === 12 && <VolunteerActivismIcon  />}
                {index === 13 && <BiotechIcon  />}
                {index === 14 && <LiveTvIcon  />}
                {index === 15 && <CelebrationIcon  />}
                {index === 16 && <RestaurantMenuIcon  />}
                {index === 17 && <CastleIcon  />}
              </ListItemIcon>
              <ListItemText primary={text}  />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <Button color="inherit" onClick={toggleAltBar}><Brightness4Icon /></Button>
          </IconButton>
          <Box sx={{ flexGrow: 1, paddingLeft: '170px' }} />
          <SearchIcon sx={{ fontSize: '30px', marginTop: '13px' }} />
          <Box sx={{ flexGrow: 1 }}>
            <BasicTextFields />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <AccountCircleIcon />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {  width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {  width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {showAltBar && <ResponsiveDrawer />}
    </Box>
  );
}

Drawe.propTypes = {
  window: PropTypes.func,
};

export default Drawe;
