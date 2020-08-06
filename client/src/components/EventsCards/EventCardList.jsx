import React from 'react';
import EventsCards from './EventsCards';
import useStyles from './styles/styles';


export default function EventsCardList({ events, setEvent, sideScroll }) {
  const classes = useStyles();

  const list = events.map((event)=>{
    return <EventsCards id={event.id} key={event.id} description={event.description} name={event.name} time={event.time} date={event.date} event_picture={event.event_picture} am={event.am} 
    setEvent={setEvent}
    />
  })
  return (
    <div className={classes.card} style={sideScroll? {flexWrap:"nowrap"}: null}>
      {list}
    </div>
  
  );
}