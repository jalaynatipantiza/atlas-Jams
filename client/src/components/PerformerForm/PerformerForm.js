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
      <h2>Performer Info</h2>
      <TextField id="standard-basic" label="Name" />
      <TextField id="standard-basic" label="Email" />
      <TextField id="standard-basic" label="Number" />
      <TextField id="standard-basic" label="City" />
      <TextField id="standard-basic" label="Genre" />
      <TextField id="standard-basic" label="Video Links" />
      <TextField id="standard-basic" label="Description" multiline />
      <Button variant="contained" color="primary" href="#">Submit</Button>
    </form>
  );
}