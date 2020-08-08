import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";

export default function EventCalendar (){
  
  const handleDateClick = (arg) => { 
    alert(arg.dateStr)
  }
    return (
     <FullCalendar 
     defaultView="dayGridMonth"
     plugins={[ dayGridPlugin]}
     events={[{title: "Upcoming Event", date: "2020-08-22"}, {title: " Upcoming Event", date: "2020-08-23"}]}

     />
    )
  
  
};