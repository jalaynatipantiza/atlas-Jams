import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, Typography, IconButton, Button, Menu, MenuItem } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import zIndex from '@material-ui/core/styles/zIndex';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import useStyles from "./styles/styles";
import Axios from 'axios';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

  const { goToHome, goToProfile, goToSignUpPage, goToPerformerForm, goToHostForm, goToLogIn, navTheme } = props
  
  const trigger = useScrollTrigger({
    disableHysteresis: true
  });

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [style, setStyle] = useState()


  const classes = useStyles();
  const pickStyle = () => {
    if (navTheme === "DARK"){
      return {
        appOne: classes.appBar, 
        appTwo: classes.appBar2, 
        toolbarOne: classes.toolbar, 
        toolBarTwo: classes.toolbar2
      }
    }
    if (navTheme === "BLACK"){
      return {
        appOne: classes.appBar, 
        appTwo: classes.appBar2, 
        toolbarOne: classes.toolbar, 
        toolBarTwo: classes.toolbarColor
      }
    }
    return {
      appOne: classes.appBar2, 
      appTwo: classes.appBar, 
      toolBarOne: classes.toolbar2, 
      toolBarTwo: classes.toolbar
    }
  }
  const signOut = () => {
    Axios.get("/logout")
    .then(() => {
      window.localStorage.clear();
    })
  }
  const localStorage = window.localStorage

 
  return(
    <React.Fragment>
      <nav className={classes.nav}>
      <AppBar className={trigger ? pickStyle().appOne : pickStyle().appTwo}>
        <Toolbar className={trigger ? pickStyle().toolBarOne : pickStyle().toolBarTwo}>
          <Link to={'/'} style={{ textDecoration: 'none', color: "white" }}>
            <IconButton style={{font: "initial"}} color="inherit">
              <p>Atlas Jams</p>
            </IconButton>
          </Link>
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
            <Link to={`/events`} style={{ textDecoration: 'none', color:"black" }}>
              <MenuItem onClick={handleClose} onClick={goToProfile}>Profile</MenuItem>
            </Link>
            <Link to={`/login`} style={{ textDecoration: 'none', color:"black" }}>
              <MenuItem onClick={handleClose}>Sign In</MenuItem>
            </Link>
              <MenuItem onClick={handleClose} onClick={() => signOut()}>Sign Out</MenuItem>
            <Link to={'/signup'} style={{ textDecoration: 'none', color:"black" }}>
              <MenuItem onClick={handleClose}>Signup</MenuItem>
            </Link>
            <Link to={'/signup/performer'} style={{ textDecoration: 'none', color:"black" }}>
              <MenuItem onClick={handleClose}>Become Performer</MenuItem>
            </Link>
            <Link to={'/signup/host'} style={{ textDecoration: 'none', color:"black" }}>
              <MenuItem onClick={handleClose}>Become Host</MenuItem>
            </Link>
          </Menu>
        </Toolbar>
      </AppBar>
      </nav>
     <div className={classes.offset} />
    </React.Fragment>
  )
};

export default Navbar;
