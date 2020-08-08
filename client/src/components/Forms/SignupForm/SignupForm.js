import React, { useState } from 'react';
import useStyles from '../styles/styles';
import { TextField, Button, Grid } from '@material-ui/core';
import axios from 'axios';
import {Link, useHistory} from "react-router-dom"


export default function SignupForm(props) {

  const history = useHistory()
  const {goToPerformerForm, goToHostForm} = props
  const classes = useStyles();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  window.localStorage.navTheme = 'BLACK'

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
        let userType = "attendee"
        if(res.data.is_performer){
          userType = "performer"
        } else if(res.data.is_host){
          userType = "host"
        }
        window.localStorage.setItem("user_type", userType);
        window.localStorage.setItem("id", res.data.id);
        history.push('/')

      });


  }

  return (
    <form style={{marginTop: "100px", display: "flex", flexDirection: 'column'}} onSubmit={event => event.preventDefault()} className={classes.root} noValidate autoComplete="off">
        <div style={{marginLeft:"auto", marginRight:'auto', width:'50%', justifyContent:"space-between", display:'flex'}}>
        <Link to={"/signup/performer"} style={{textDecoration:"none"}}>
            <Button  variant="contained" color="primary" href="#" >
                Become a performer
            </Button>
      </Link>
      <Link to={"/signup/host"} style={{textDecoration:"none"}}>
            <Button  variant="contained" color="primary" href="#" >
                Become a host
            </Button>
      </Link>


        </div>
      <Grid 
        container
        className={classes.container}
      >
        <div className={classes.nonField}>
          <h2>Signup</h2>
        </div>
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