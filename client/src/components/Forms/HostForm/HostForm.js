
import React, { useState } from 'react';
import useStyles from '../styles/styles';
import { TextField, Button, Grid } from '@material-ui/core';
import axios from 'axios';
import {Link, useHistory} from "react-router-dom"


export default function SignupForm(props) {
  const classes = useStyles();

  window.sessionStorage.navTheme = 'BLACK'
  let history = useHistory();


  const {goToSignUpPage} = props
  const [user, setUser] = useState({
    name: null,
    email: null ,
    number: null,
    location: null,
    is_host: true,
    password: null,
    password_confirmation: null
  })

  const signUp = () => {
    axios({
      method: 'post',
      url: '/users',
      data: {
        user: {...user}
      }
    })
      .then((res) => {
        let userType = "none"
        if(res.data.is_performer){
          userType = "performer"
        } else if(res.data.is_host){
          userType = "host"
        }
        window.sessionStorage.setItem("user_type", userType);
        window.sessionStorage.setItem("id", res.data.id);

        history.push(`/host/${res.data.id}`)

      });
  };

  return (
    <form style={{marginTop: "100px"}} className={classes.root} noValidate autoComplete="off" onSubmit={event => event.preventDefault()}>
    <Grid 
      container
      className={classes.container}
    >
      <div className={classes.nonField}>
        <h2>Host Info</h2>
      </div>
      <TextField id="standard-basic" label="Name" onChange={event => setUser({...user, name: event.target.value })} className={classes.field} />
      <TextField id="standard-basic" label="Email" onChange={event => setUser({...user, email: event.target.value })} className={classes.field} />
      <TextField id="standard-basic" label="Number" onChange={event => setUser({...user, number: event.target.value })} className={classes.field} />
      <TextField id="standard-basic" label="City" onChange={event => setUser({...user, location: event.target.value })} className={classes.field} />
      <TextField id="standard-basic" label="Password" type="password" onChange={event => setUser({...user, password: event.target.value })} className={classes.field} />
      <TextField id="standard-basic" label="Password Confirmation" onChange={event => setUser({...user, password_confirmation: event.target.value })} type="password"  className={classes.field} />
      <div className={classes.nonField}>
        <Button variant="contained"  onClick={event => signUp()} color="primary" href="#">Submit</Button>
      <Link to={"/signup"} style={{textDecoration:"none"}}>
            <Button  variant="contained" color="primary" href="#" >
                back
            </Button>
        </Link>

        
      </div>
    </Grid>
  </form>
  );
}