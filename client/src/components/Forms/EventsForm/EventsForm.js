import React from 'react';
import useStyles from '../styles/styles';
import { TextField, Button, Grid } from '@material-ui/core';


export default function SignupForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid 
        container
        className={classes.container}
      >
        <div className={classes.nonField}>
          <h2>Event Info</h2>
        </div>
        <TextField id="standard-basic" label="Name" className={classes.field} />
        <TextField id="standard-basic" label="Date" className={classes.field} />
        <TextField id="standard-basic" label="Time" className={classes.field} />
        <TextField id="standard-basic" label="Duration" className={classes.field} />
        <TextField id="standard-basic" label="Price" className={classes.field} />
        <TextField id="standard-basic" label="Description" className={classes.field} multiline />
        <TextField id="standard-basic" label="Performer(s)" className={classes.field} />
        <div className={classes.nonField}>
          <Button variant="contained" color="primary" href="#">Add Performer</Button>
        </div>
        <div className={classes.nonField}>
          <Button variant="contained" color="primary" href="#">Submit</Button>
        </div>
      </Grid>
    </form>
  );
}