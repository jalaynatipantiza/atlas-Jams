import React from 'react';
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

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid 
        container
        className={classes.container}
      >
        <div className={classes.nonField}>
          <h2>Event Info</h2>
        </div>
        <TextField id="standard-basic" label="Name" className={classes.field} />
        <TextField id="standard-basic" label="Date" className={classes.field} />
        <TextField id="standard-basic" label="Time" className={classes.field} />
        <TextField id="standard-basic" label="Duration" className={classes.field} />
        <TextField id="standard-basic" label="Price" className={classes.field} />
        <TextField id="standard-basic" label="Description" className={classes.field} multiline />
        <TextField id="standard-basic" label="Performer(s)" className={classes.field} />
        <div className={classes.nonField}>
          <Button variant="contained" color="primary" href="#">Add Performer</Button>
        </div>
        <div className={classes.nonField}>
          <Button variant="contained" color="primary" href="#">Submit</Button>
        </div>
      </Grid>
    </form>
  );
}