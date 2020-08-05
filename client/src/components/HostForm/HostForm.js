import React, { useState } from 'react';
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

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [spacePictures, setSpacePictures] = useState('');
  const [capacity, setCapacity] = useState('');
  const [description, setDescription] = useState('');

  const signUp = () => {
    //make post request
    // Axios.post("/users")
    // .then()
    console.log(name, email, number, city, address, spacePictures, capacity, description);
  };

  return (
    <form style={{marginTop: "100px"}} className={classes.root} noValidate autoComplete="off" onSubmit={event => event.preventDefault()}>
      <h2>Host Info</h2>
      <TextField id="standard-basic" label="Name" onChange={event => setName(event.target.value)} />
      <TextField id="standard-basic" label="Email" onChange={event => setEmail(event.target.value)} />
      <TextField id="standard-basic" label="Number" onChange={event => setNumber(event.target.value)} />
      <TextField id="standard-basic" label="City" onChange={event => setCity(event.target.value)} />
      <TextField id="standard-basic" label="Address" onChange={event => setAddress(event.target.value)} />
      <TextField id="standard-basic" label="Space Pictures" onChange={event => setSpacePictures(event.target.value)} />
      <TextField id="standard-basic" label="Capacity" onChange={event => setCapacity(event.target.value)} />
      <TextField id="standard-basic" label="Description" multiline onChange={event => setDescription(event.target.value)} />
      <Button onClick={event => signUp()} variant="contained" color="primary" href="#">Submit</Button>
    </form>
  );
}