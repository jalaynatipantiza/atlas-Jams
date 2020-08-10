import React, { useState, useEffect} from 'react';
import axios from "axios";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button } from '@material-ui/core';
import EventsCard from '../EventsCards/EventsCards';
import '../../App.css'



export default function EventCalendar (){
    const [events, setEvents] = useState([])
   useEffect(()=>{
    axios.get(`/attendee/${window.sessionStorage.id}/events`)
        .then(res => {  
            setEvents(res.data)
        })
   }, [])


   const [event, setEvent ] = useState({})

  const handleDateClick = (arg) => { 
    axios.get(`/event/${arg.event._def.publicId}`)
    .then((res) => {
        setEvent(res.data.event)
        handleClickOpen()
    })
  }
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return (
      <div>
     <FullCalendar
     defaultView="dayGridMonth"
     plugins={[ dayGridPlugin, interactionPlugin ]}
     events={events.map(event => {return {title: event.name, date: event.date, id:event.id}})}
     eventColor={'#FFA07A'}
     eventClick={event => handleDateClick(event)}
     />

     <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            <b>X</b>
          </Button>
        </DialogActions>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <EventsCard id={event.id} key={event.id} description={event.description} name={event.name} time={event.time} date={event.date} event_picture={event.event_picture} am={event.am} accepted={event.accepted} user_id={event.user_id} location={event.location}/>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    
      </div>

    )
};