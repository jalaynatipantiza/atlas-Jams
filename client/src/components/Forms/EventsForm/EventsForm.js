import React, {useEffect, useState} from 'react';
import useStyles from '../styles/styles';
import { TextField, Button, Grid, FormControl, NativeSelect, FormHelperText } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';


export default function EventForm() {
  const classes = useStyles();
  const [spaces, setSpaces] = useState()
  const [performers, setPerformers] = useState()

  useEffect(()=>{
    axios.get(`/spaces/user/${window.localStorage.id}`)
      .then((res)=>{
        const array = res.data.map(space => {
          return <option value={space}>{space.address}</option>
        })
        setSpaces(array)
      })
      .then(()=>{
        axios.get('/performers')
          .then(res => {
            const array = res.data.map(performer => {
              return <option value={performer}>{performer.name}</option>
            })
            setPerformers(array)
          })
      })
  },[])
  

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
      {/* <FormControl className={classes.formControl}> */}
        <NativeSelect
          style={{width:"100%", marginTop:"10px"}}
          className={classes.selectEmpty}
          // value={state.age}
          name="age"
          // onChange={handleChange}
          inputProps={{ 'aria-label': 'age' }}
        >
          <option value="" disabled>
            My Locations
          </option>
          {
            spaces
          }
        </NativeSelect>
        <FormHelperText>Pick one of your locations to host your event</FormHelperText>

        <NativeSelect
          style={{width:"100%", marginTop:"10px"}}
          className={classes.selectEmpty}
          // value={state.age}
          // name="age"
          // onChange={handleChange}
          inputProps={{ 'aria-label': 'age' }}
        >
          <option value="" disabled>
            Performers
          </option>
          {
            performers
          }
        </NativeSelect>
        <FormHelperText>Invite a performer to perform at your event!</FormHelperText>
      {/* </FormControl> */}

        <TextField id="standard-basic" label="Duration in minutes" className={classes.field} />
        <TextField id="standard-basic" label="Ticket Price" className={classes.field} />
        <div className={classes.nonField} style={{display:"flex", justifyContent:"flex-end"}}>
          <Button variant="contained" color="primary" href="#">Submit</Button>
        </div>
      </Grid>
    </form>
  );
}