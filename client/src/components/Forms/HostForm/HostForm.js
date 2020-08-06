
import React, { useState } from 'react';
import useStyles from '../styles/styles';
import { TextField, Button, Grid } from '@material-ui/core';
import axios from 'axios';


export default function SignupForm() {
  const classes = useStyles();

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
        console.log(res)
        window.localStorage.setItem("id", res.data.id);
        window.localStorage.setItem("is_host", res.data.is_host);
        window.localStorage.setItem("is_performer", res.data.is_performer);
      });
  };

  return (
    // <form style={{marginTop: "100px"}} className={classes.root} noValidate autoComplete="off" onSubmit={event => event.preventDefault()}>
    //   <Grid 
    //     container
    //     className={classes.container}
    //   >
    //     <div className={classes.nonField}>
    //       <h2>Host Info</h2>
    //     </div>
    //     <TextField id="standard-basic" label="Name" onChange={event => setName(event.target.value)} className={classes.field} />
    //     <TextField id="standard-basic" label="Email" onChange={event => setEmail(event.target.value)} className={classes.field} />
    //     <TextField id="standard-basic" label="Number" onChange={event => setNumber(event.target.value)} className={classes.field} />
    //     <TextField id="standard-basic" label="City" onChange={event => setCity(event.target.value)} className={classes.field} />
    //     <TextField id="standard-basic" label="Address" onChange={event => setAddress(event.target.value)} className={classes.field} />
    //     <TextField id="standard-basic" label="Space Pictures" onChange={event => setSpacePictures(event.target.value)} className={classes.field} />
    //     <TextField id="standard-basic" label="Capacity" onChange={event => setCapacity(event.target.value)} className={classes.field} />
    //     <TextField id="standard-basic" label="Description" multiline onChange={event => setDescription(event.target.value)} className={classes.field} />
    //     <div className={classes.nonField}>
    //       <Button onClick={event => signUp()} variant="contained" color="primary" href="#">Submit</Button>
    //     </div>
    //   </Grid>
    // </form>
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
      {/* <TextField id="standard-basic" label="Genre" onChange={event => setUser({...user, genre: event.target.value })} className={classes.field} /> */}
      {/* <TextField id="standard-basic" label="Video Links" onChange={event => setUser({...user, name: event.target.value })} className={classes.field} />
      <TextField id="standard-basic" label="Description" multiline onChange={event => setUser({...user, name: event.target.value })} className={classes.field} /> */}
      <TextField id="standard-basic" label="Password" type="password" onChange={event => setUser({...user, password: event.target.value })} className={classes.field} />
      <TextField id="standard-basic" label="Password Confirmation" onChange={event => setUser({...user, password_confirmation: event.target.value })} type="password"  className={classes.field} />
      <div className={classes.nonField}>
        <Button variant="contained" onClick={event => signUp()} color="primary" href="#">Submit</Button>
      </div>
    </Grid>
  </form>
  );
}