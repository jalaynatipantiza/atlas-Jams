import React from 'react';
import EventsCard from './EventsCards';


export default function EventsCardList(props) {
  const events = props.events
  console.log(events);
  const list = events.map((event)=>{
    return <EventsCard key={event.id} description={event.description} name={event.name} time={event.time} date={event.date} url={event.url}/>
  })
  return (
    <div style={{width:"80%",display: "flex", justifyContent:"center", flexDirection:"row", flexWrap:"wrap"}}>
      {list}
    </div>
  
  );
}