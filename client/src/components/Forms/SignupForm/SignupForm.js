import React, { useState } from 'react';
import useStyles from '../styles/styles';
import { TextField, Button, Grid } from '@material-ui/core';
import axios from 'axios';


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
        user:{
          name: name,
          email: email,
          password: password,
          password_confirmation: passwordConfirmation

        }
      }
    })
      .then((res) => {
        console.log(res)
        window.localStorage.setItem("id", res.data.id);
        window.localStorage.setItem("is_host", res.data.is_host);
        window.localStorage.setItem("is_performer", res.data.is_performer);
      });


  }

  return (
    <form style={{marginTop: "100px"}} onSubmit={event => event.preventDefault()} className={classes.root} noValidate autoComplete="off">
      <Grid 
        container
        className={classes.container}
      >
        <div className={classes.nonField}>
          <h2>Signup</h2>
        </div>
        <TextField id="standard-basic" label="Name" onChange={event => setName(event.target.value)} className={classes.field} />
        <TextField id="standard-basic" label="Email" onChange={event => setEmail(event.target.value)} className={classes.field} />
        <TextField id="standard-basic" label="Password" type="password" onChange={event => setPassword(event.target.value)} className={classes.field} />
        <TextField id="standard-basic" label="Password Confirmation" type="password" onChange={event => setPasswordConfirmation(event.target.value)} className={classes.field} />
        <div className={classes.nonField}>
          <Button variant="contained" onClick={() => signUp()} color="primary" href="#">Submit</Button>
        </div>
      </Grid>
    </form>
  );
}