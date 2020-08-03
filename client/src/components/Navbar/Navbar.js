import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Navbar = (props) => {
  return(
    <nav>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Hey look it's a navbar!
          </Typography>
        </Toolbar>
      </AppBar>
    </nav>
  )
};

export default Navbar