import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';

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

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const signUp = () => {
    // make the post request here with name, email, password, passwordConfirmation

    axios({
      method: 'post',
      url: '/users',
      data: {
        name: name,
        email: email,
        password: password,
        password_confrimation: passwordConfirmation
      }
    })
      .then((res) => {
        console.log(res)
      });

    console.log(name, email, password, passwordConfirmation);
  }

  return (
    <form style={{marginTop: "100px"}} onSubmit={event => event.preventDefault()} className={classes.root} noValidate autoComplete="off">
      <h2>Signup</h2>
      <TextField id="standard-basic" label="Name" onChange={event => setName(event.target.value)} />
      <TextField id="standard-basic" label="Email" onChange={event => setEmail(event.target.value)} />
      <TextField id="standard-basic" label="Password" onChange={event => setPassword(event.target.value)} />
      <TextField id="standard-basic" label="Password Confirmation" onChange={event => setPasswordConfirmation(event.target.value)} />
      <Button variant="contained" onClick={event => signUp()} color="primary" href="#">Submit</Button>
    </form>
  );
}