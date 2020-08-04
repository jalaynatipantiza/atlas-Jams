import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, IconButton, Button, Menu, MenuItem } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import zIndex from '@material-ui/core/styles/zIndex';

const useStyles = makeStyles(theme => ({
  nav: {
    zIndex: "1",
    position: "fixed",
    width: "100vw",
  }
  ,
  AppBar: {
    backgroundColor: "none",
  }
  ,
  offset: theme.mixins.toolbar
}));

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
    <React.Fragment>
      <AppBar position="fixed" style={{backgroundColor: "transparent"}}>
        <Toolbar style={{display: "flex", justifyContent: "space-between"}}>
          <IconButton style={{font: "initial"}} color="inherit">
            <p>Atlas Jams</p>
          </IconButton>
          <IconButton color="inherit" onClick={handleClick}>
            <AccountCircleIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Sign In</MenuItem>
            <MenuItem onClick={handleClose}>Sign Out</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </React.Fragment>
  )
};

export default Navbar