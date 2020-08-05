import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Grid } from '@material-ui/core';
import axios from "axios"

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  container: {
    width: '40%',
    margin: '100px auto 0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  field: {
    width: '100%',
    margin: 10,
  },
  nonField: {
    width: '100%',
    margin: 20,
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
      <Grid 
        container
        className={classes.container}
      >
        <div className={classes.nonField}>
          <h2>Login</h2>
        </div>
        <TextField id="standard-basic" label="Email" onChange={event => setEmail(event.target.value)} className={classes.field} />
        <TextField id="standard-basic" label="Password" onChange={event => setPassword(event.target.value)} className={classes.field} />
        <div className={classes.nonField}>
          <Button onClick={() => logIn()} variant="contained" color="primary" href="#">Submit</Button>
        </div>
      </Grid>
    </form>
  );
};