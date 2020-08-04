import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, IconButton, Button, Menu, MenuItem } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  nav: {
    zIndex: "1",
    position: "fixed",
    width: "100vw"
  }
  ,
  AppBar: {
    backgroundColor: "none"
  }
});
const Navbar = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();


  return(
    <nav className={classes.nav}>
      <AppBar position="static" style={{backgroundColor: "transparent"}}>
        <Toolbar >
          <IconButton>
            <SearchIcon />
          </IconButton>
          <a href="#">
            <Typography variant="h6">
              Performer
            </Typography>
          </a>
          <a href="#">
            <Typography variant="h6">
              Host
            </Typography>
          </a>
          <IconButton onClick={handleClick}>
            <AccountCircleIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Edit Profile</MenuItem>
            <MenuItem onClick={handleClose}>Sign In</MenuItem>
            <MenuItem onClick={handleClose}>Sign Out</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </nav>
  )
};

export default Navbar