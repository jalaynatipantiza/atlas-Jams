import React, { useState, useEffect} from 'react';
import axios from "axios";
import useStyles from './styles'
import EventsCardList from '../EventsCards/EventCardList';
import EventCalendar from './calendar';
import '../../App.css'


export default function AttendeeProfile(props){
  const classes = useStyles();
  const [events, setEvents] = useState([])
  useEffect(()=>{
   axios.get(`/attendee/${window.sessionStorage.id}/events`)
       .then(res => {  
           setEvents(res.data)
       })
  }, [])


  return (
    <React.Fragment>
      <div style={{margin: "7em 2em", display:"flex"}}>
        <h1 className={classes.h1}>My Events!</h1>
        <div className={classes.calendar}>
          <EventCalendar/>
        </div>
      </div>
      <div style={{display:"flex", justifyContent: "center"}}>
        <EventsCardList events={events}/>
      </div>
    </React.Fragment>
  )
}