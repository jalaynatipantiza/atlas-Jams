import React from 'react';
import EventsCards from './EventsCards';
import useStyles from './styles/styles';
import { useEffect } from 'react';


export default function EventsCardList({ events, sideScroll }) {
  const classes = useStyles();

  console.log("it is what it is",events);
  const list = events.map((event)=>{
    return <EventsCards id={event.id} key={event.id} description={event.description} name={event.name} time={event.time} date={event.date} event_picture={event.event_picture} am={event.am} accepted={event.accepted} user_id={event.user_id} location={event.location} />
  })
  return (
    <div className={classes.card} style={sideScroll? {flexWrap:"nowrap"}: null}>
      {list}
    </div>
  
  );
}