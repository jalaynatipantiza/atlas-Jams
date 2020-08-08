import React, { useState, useEffect} from 'react';
import axios from "axios";
import useStyles from './styles'
import EventsCardList from '../EventsCards/EventCardList';
import EventCalendar from './calendar';

export default function AttendeeProfile(props){
  const classes = useStyles();
  const [events, setEvents] = useState([])
  useEffect(()=>{
    window.scrollTo(0, 0)
    axios.get("/all/events")
    .then(res => {
      
      const arr = res.data.map(event => {
        return event.event
      })
      setEvents(arr.reverse())
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