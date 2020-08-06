import React, { useState } from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import useStyles from '../styles/styles';
import axios from "axios";
import {useHistory} from "react-router-dom"


export default function SignupForm() {
  const classes = useStyles();
  const history = useHistory();

  window.localStorage.navTheme = 'BLACK'

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logIn = () => {
    // axios request to authenticate user
    axios({
      method: 'post',
      url: '/login',
      data: {
        email: email,
        password: password
      }
    })
      .then(res => {
        window.localStorage.setItem("is_host", res.data.is_host);
        window.localStorage.setItem("is_performer", res.data.is_performer);
        if(res.data.is_host){
          history.push("/host/profile")
        }
        else if (res.data.is_performer){
          history.push("/performer/profile")
        }
        else {
          history.push('/')
        }
      });


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
        <TextField id="standard-basic" label="Password" type="password" onChange={event => setPassword(event.target.value)} className={classes.field} />
        <div className={classes.nonField}>
          <Button onClick={() => logIn()} variant="contained" color="primary" href="#">Submit</Button>
        </div>
      </Grid>
    </form>
  );
};