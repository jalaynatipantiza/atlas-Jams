import React from 'react';
import EventsCards from './EventsCards';


export default function EventsCardList({ events, setEvent }) {

  const list = events.map((event)=>{
    return <EventsCards id={event.id} key={event.id} description={event.description} name={event.name} time={event.time} date={event.date} event_picture={event.event_picture} am={event.am} 
    setEvent={setEvent}
    />
  })
  return (
    <div style={{width:"80%",display: "flex", justifyContent:"center", flexDirection:"row", flexWrap:"wrap"}}>
      {list}
    </div>
  
  );
}