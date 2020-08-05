import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import axios from "axios"

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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logIn = () => {
    // axios request to authenticate user
    axios({
      method: 'post',
      url: '/sessions',
      data: {
        email: email,
        password: password
      }
    })
      .then(res => {
        console.log(res);
      });

    console.log(email, password);
  };

  return (
    <form  style={{marginTop: "100px"}} onSubmit={event => event.preventDefault()} className={classes.root} noValidate autoComplete="off">
      <h2>Login</h2>
      <TextField id="standard-basic" label="Email" onChange={event => setEmail(event.target.value)} />
      <TextField id="standard-basic" label="Password" onChange={event => setPassword(event.target.value)} />
      <Button onClick={() => logIn()} variant="contained" color="primary" href="#">Submit</Button>
    </form>
  );
};