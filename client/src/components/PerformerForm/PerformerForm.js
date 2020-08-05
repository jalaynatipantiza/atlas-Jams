import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Grid } from '@material-ui/core';

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

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [city, setCity] = useState('');
  const [genre, setGenre] = useState('');
  const [video, setVideo] = useState('');
  const [description, setDescription] = useState('');

  const signUp = () => {
    // make post request here
    // Axios.post("/users")
    // .then()
    console.log(name, email, number, city, genre, video, description);
  };

  return (
    <form style={{marginTop: "100px"}} className={classes.root} noValidate autoComplete="off" onSubmit={event => event.preventDefault()}>
      <Grid 
        container
        className={classes.container}
      >
        <div className={classes.nonField}>
          <h2>Performer Info</h2>
        </div>
        <TextField id="standard-basic" label="Name" onChange={event => setName(event.target.value)} className={classes.field} />
        <TextField id="standard-basic" label="Email" onChange={event => setEmail(event.target.value)} className={classes.field} />
        <TextField id="standard-basic" label="Number" onChange={event => setNumber(event.target.value)} className={classes.field} />
        <TextField id="standard-basic" label="City" onChange={event => setCity(event.target.value)} className={classes.field} />
        <TextField id="standard-basic" label="Genre" onChange={event => setGenre(event.target.value)} className={classes.field} />
        <TextField id="standard-basic" label="Video Links" onChange={event => setVideo(event.target.value)} className={classes.field} />
        <TextField id="standard-basic" label="Description" multiline onChange={event => setDescription(event.target.value)} className={classes.field} />
        <div className={classes.nonField}>
          <Button variant="contained" onClick={event => signUp()} color="primary" href="#">Submit</Button>
        </div>
      </Grid>
    </form>
  );
}