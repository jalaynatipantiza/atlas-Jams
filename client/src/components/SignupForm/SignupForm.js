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
      <h2>Signup</h2>
      <TextField id="standard-basic" label="Name" />
      <TextField id="standard-basic" label="Email" />
      <TextField id="standard-basic" label="Password" />
      <TextField id="standard-basic" label="Password Confirmation" />
      <Button variant="contained" color="primary" href="#">Submit</Button>
    </form>
  );
}