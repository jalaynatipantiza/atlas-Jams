import React from 'react';
import useStyles from '../styles/styles';
import { TextField, Button, Grid } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';


export default function EventForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} style={{marginTop:"90px"}} noValidate autoComplete="off">
      <Grid 
        container
        className={classes.container}
      >
        <div className={classes.nonField}>
          <h2>Event Info</h2>
        </div>
        <TextField id="standard-basic" label="Event name" className={classes.field} />

        <TextField id="standard-basic" label="Description" className={classes.field} multiline />
        <TextField
        id="datetime-local"
        label="Date-Time"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        InputLabelProps={{
          shrink: true,
        }}
        style={{width:"100%"}}
      />

        <TextField id="standard-basic" label="Duration in minutes" className={classes.field} />
        <TextField id="standard-basic" label="Ticket Price" className={classes.field} />
        <div className={classes.nonField} style={{display:"flex", justifyContent:"flex-end"}}>
          <Button variant="contained" color="primary" href="#">Add Performers</Button>
        </div>
      </Grid>
    </form>
  );
}