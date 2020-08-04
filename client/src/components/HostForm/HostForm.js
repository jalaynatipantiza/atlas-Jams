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
      <h2>Host Info</h2>
      <TextField id="standard-basic" label="Name" />
      <TextField id="standard-basic" label="Email" />
      <TextField id="standard-basic" label="Number" />
      <TextField id="standard-basic" label="City" />
      <TextField id="standard-basic" label="Address" />
      <TextField id="standard-basic" label="Space Pictures" />
      <TextField id="standard-basic" label="Capacity" />
      <TextField id="standard-basic" label="Description" multiline />
      <Button variant="contained" color="primary" href="#">Submit</Button>
    </form>
  );
}