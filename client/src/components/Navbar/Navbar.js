import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, IconButton, Button, Menu, MenuItem } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import zIndex from '@material-ui/core/styles/zIndex';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import useStyles from "./styles/styles"

const Navbar = (props) => {

  const {logoClick, profileClick} = props
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
  const classes = useStyles();


  return(
    <React.Fragment>
      <nav className={classes.nav}>
      <AppBar className={trigger ? classes.appBar2 : classes.appBar}>
        <Toolbar className={trigger ? classes.toolbar2 : classes.toolbar}>
          <IconButton onClick={logoClick} style={{font: "initial"}} color="inherit">
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
            <MenuItem onClick={handleClose} onClick={profileClick}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Sign In</MenuItem>
            <MenuItem onClick={handleClose}>Sign Out</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      </nav>
     <div className={classes.offset} />
    </React.Fragment>
  )
};

export default Navbar
