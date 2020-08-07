import React from 'react';
import EventsCards from './EventsCards';
import useStyles from './styles/styles';


export default function EventsCardList({ events, sideScroll }) {
  const classes = useStyles();


  const list = events.map(({event, capacity, num_of_attendees})=>{
    return <EventsCards id={event.id} key={event.id} description={event.description} name={event.name} time={event.time} date={event.date} event_picture={event.event_picture} am={event.am} capacity={capacity} num_of_attendees={num_of_attendees} />
  })
  return (
    <div className={classes.card} style={sideScroll? {flexWrap:"nowrap"}: null}>
      {list}
    </div>
  
  );
}