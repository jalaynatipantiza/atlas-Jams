import React, {useEffect, useState} from 'react';
import useStyles from '../styles/styles';
import { TextField, Button, Grid, FormControl, NativeSelect, FormHelperText } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';


export default function EventForm() {
  const classes = useStyles();
  const [spaces, setSpaces] = useState()
  const [performers, setPerformers] = useState()
  const [host, setHost] = useState({
    id: window.localStorage.id
  })

  const [space, setSpace] = useState({
  })

  const [performersOfficial, setPerformersOfficial] = useState({
  })

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
    const [key, setKey] = useState(0)
  const [performersOption , setPerformersOption] = useState([])

  const removePerformer = (key) => {
    console.log('removing', key);
    setPerformersOption(prev => {
      prev.splice(key, 1)
      setKey(key - 1)
      return [...prev]
    })
  }
  const createAnotherPerformer = (key) => {
    let specificKey = key
    console.log('new jsx', specificKey);
    setPerformersOption(prev => {
      return [...prev, <div key={specificKey} style={{display:'flex', width:"100%", justifyContent:"space-between"}}>
      <div style={{width:"80%"}}>
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
  
      </div>
      <Button variant="contained" color="red" onClick={() => removePerformer(specificKey)} href="#" style={{font:"90%", height: "30%", width:"5%"}}>-</Button>
     </div> ]
    } )
    setKey(specificKey + 1);

  }

  const submit = () => {
    // axios({
    //   method: 'post',
    //   url: '/event',
    //   data: {
    //       ...signUpInfo,
    //       landons: {1:'hi',2: 'lol'}
    //   }
    // })
  }
  //onChange={(event) => setSignUpInfo(prev => {return {...prev, host: event_name: event.target.value}})}

  return (
    <form className={classes.root} style={{marginTop:"90px"}} noValidate autoComplete="off">
      <Grid 
        container
        className={classes.container}
      >
        <div className={classes.nonField}>
          <h2>Event Info</h2>
        </div>
        <TextField id="standard-basic" label="Event name"  className={classes.field} />

        <TextField id="standard-basic" label="Description" className={classes.field} multiline />
        <TextField
        id="datetime-local"
        label="Date-Time"
        type="datetime-local"
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
          <option value="My Locations" disabled>
            My Locations
          </option>
          {
            spaces
          }
        </NativeSelect>
        <FormHelperText>Pick one of your locations to host your event</FormHelperText>
        <div style={{display:'flex', width:"100%", justifyContent:"space-between"}}>
          <div style={{width:"80%"}}>
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

          </div>
          <Button variant="contained" color="primary" onClick={()=>createAnotherPerformer(key)} href="#" style={{font:"90%", height: "30%", width:"5%"}}>+</Button>
         </div>
         {performersOption}
      {/* </FormControl> */}

        <TextField id="standard-basic" label="Duration in minutes" className={classes.field} />
        <TextField id="standard-basic" label="Ticket Price" className={classes.field} />
        <div className={classes.nonField} style={{display:"flex", justifyContent:"flex-end"}}>
          <Button variant="contained" color="primary" onClick={submit} href="#">Submit</Button>
        </div>
      </Grid>
    </form>
  );
}