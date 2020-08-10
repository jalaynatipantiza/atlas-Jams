import React, {useEffect, useState} from 'react';
import useStyles from '../styles/styles';
import { TextField, Button, Grid, Select,MenuItem, FormControl, NativeSelect, FormHelperText } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';
import {useHistory} from 'react-router-dom'

export default function EventForm() {
  const history = useHistory()
  const classes = useStyles();
  const [spaces, setSpaces] = useState()
  const [performers, setPerformers] = useState()
  const [event, setEvent] = useState({
    space_id: null,
    date: null,
    duration: null,
    name: null,
    price: null,
    description: null,
    time: null,
    am: null, 
    attendants: null,
    event_picture: null,
    performers: []
  })

  useEffect(()=>{
    axios.get(`/spaces/user/${window.sessionStorage.id}`)
      .then((res)=>{
        const array = res.data.map(space => {
          return <MenuItem value={space.id}>{space.address}</MenuItem>
        })
        setSpaces(array)
      })
      .then(()=>{
        axios.get('/performers')
          .then(res => {
            const array = res.data.map(performer => {
              return <MenuItem value={performer.id} >
              {performer.name}
            </MenuItem>
            })
            setPerformers(array)
          })
      })
    },[])
    const [key, setKey] = useState(0)
  const [performersOption , setPerformersOption] = useState([])

  const removePerformer = (key) => {
    setPerformersOption(prev => {
      prev.pop()
      setEvent((prev)=> {
        prev.performers.pop()
        return {...prev}
      })
      setKey(key - 1)
      return [...prev]
    })
  }
  const createAnotherPerformer = () => {


    setPerformersOption(prev => {
      return [...prev,   <div style={{display:'flex', width:"100%", justifyContent:"space-between"}}>
      <div /*style={{width:"80%"}}*/>
            
          <FormControl /*className={classes.formControl}*/  style={{width:"100%", marginTop:"10px"}}>
            
          <Select
            // value={age}
            // onChange={handleChange}
            onChange={event => {setEvent((prev)=> {
              console.log(event.target.value);
              return {...prev, performers: [...prev.performers, parseInt(event.target.value)]}})}}
            displayEmpty
            // className={classes.selectEmpty}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="lol" disabled>
              Placeholder
            </MenuItem>
            {
          performers
        }
          </Select>

           <FormHelperText>Invite a performer to perform at your event!</FormHelperText>
        </FormControl>

      </div>
     </div> ]
    } )
    setKey(key + 1);

  }

  const submit = () => {

    axios({
      method: 'post',
      url: '/event',
      data: {
          ...event,
      }
    })
    .then((res) =>{
      history.push(`/events/${res.data}`)
    })
  }
  //onChange={(event) => setSignUpInfo(prev => {return {...prev, host: event_name: event.target.value}})}
  const dateTime = (datetime) => {
    const string = datetime.split("T")
    let date = string[0]
    let time
    let am  
   console.log(string);
   console.log(string[1]);
   const timeArr = string[1].split(":")
   const int = parseInt(timeArr[0])
   if(int >= 0 && int <= 11 ){
    am = true
    if(int === 0){
      time = `12:${timeArr[1]}`
    } else{
      time = `${timeArr[0]}:${timeArr[1]}`
    }
   } else{
    if(int === 12){
      time = `${timeArr[0]}:${timeArr[1]}`
    }
    else {
      time = `${timeArr[0] - 12}:${timeArr[1]}`
    }
    am = false
   }
   setEvent(prev => {return {...prev, time, date, am}})
  }
  
  return (
    <form className={classes.root} style={{marginTop:"90px"}} noValidate autoComplete="off">
      <Grid 
        container
        className={classes.container}
      >
        <div className={classes.nonField}>
          <h2>Event Info</h2>
        </div>
        <TextField id="standard-basic" label="Event name" onChange={text => setEvent({...event, name: text.target.value })} className={classes.field} />

        <TextField id="standard-basic" label="Description" onChange={text => setEvent({...event, description: text.target.value })} className={classes.field} multiline />
        <TextField
        id="datetime-local"
        label="Date-Time"
        type="datetime-local"
        InputLabelProps={{
          shrink: true,
        }}
        style={{width:"100%"}}
        onChange={event => dateTime(event.target.value)}
      />
      {/* <FormControl className={classes.formControl}> */}
        <FormControl /*className={classes.formControl}*/   style={{width:"100%", marginTop:"10px"}}>
                
              <Select
                // value={age}
                // onChange={handleChange}
                displayEmpty
                onChange={text => setEvent({...event, space_id: parseInt(text.target.value) })}
                // className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="" disabled>
                  Placeholder
                </MenuItem>
                {
              spaces
            }
              </Select>


        <FormHelperText>Pick one of your locations to host your event</FormHelperText>
            </FormControl>
        <div style={{display:'flex', width:"100%", justifyContent:"space-between"}}>
          <div /*style={{width:"80%"}}*/>
                
              <FormControl /*className={classes.formControl}*/  style={{width:"100%", marginTop:"10px"}}>
                
              <Select
                // value={age}
                // onChange={handleChange}
                onChange={event => {setEvent((prev)=> {
                  console.log(event.target.value);
                  return {...prev, performers: [...prev.performers, parseInt(event.target.value)]}})}}
                displayEmpty
                // className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="lol" disabled>
                  Placeholder
                </MenuItem>
                {
              performers
            }
              </Select>

               <FormHelperText>Invite a performer to perform at your event!</FormHelperText>
            </FormControl>

          </div>
          <Button variant="contained" color="primary" onClick={()=>createAnotherPerformer(key)} href="#" style={{font:"90%", height: "30%", width:"5%"}}>+</Button>
         </div>
         {performersOption}
         <Button variant="contained" color="red" onClick={() => removePerformer()} href="#" style={{font:"90%", height: "30%", width:"5%"}}>-</Button>
      {/* </FormControl> */}
        <TextField id="standard-basic" onChange={text => {
          const int = parseInt(text.target.value) 
          setEvent({...event, duration: int })}}  label="Duration in minutes" className={classes.field} />
        <TextField id="standard-basic" onChange={text => {
          const int = parseFloat(text.target.value) 
          setEvent({...event, price: int })}}  label="Ticket Price" className={classes.field} />
        <TextField id="standard-basic"  onChange={text => setEvent({...event, event_picture: text.target.value })} label="Event Picture (url)" className={classes.field} />
        <div className={classes.nonField} style={{display:"flex", justifyContent:"flex-end"}}>
          <Button variant="contained" color="primary" onClick={submit} href="#">Submit</Button>
        </div>
      </Grid>
    </form>
  );
}