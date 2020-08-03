import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function SignupForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <h2>Event Info</h2>
      <TextField id="standard-basic" label="Name" />
      <TextField id="standard-basic" label="Date" />
      <TextField id="standard-basic" label="Time" />
      <TextField id="standard-basic" label="Duration" />
      <TextField id="standard-basic" label="Price" />
      <TextField id="standard-basic" label="Description" />
      <TextField id="standard-basic" label="Performer(s)" />
      <Button variant="contained" color="primary" href="#">Add Performer</Button>
      <Button variant="contained" color="primary" href="#">Submit</Button>
    </form>
  );
}