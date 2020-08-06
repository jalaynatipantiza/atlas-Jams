import React from 'react';
import EventsCard from './EventsCards';
import useStyles from './styles/styles';

export default function EventsCardList(props) {
  const events = props.events
  const sideScroll = props.sideScroll
  const classes = useStyles();

  const list = events.map((event)=>{
    return <EventsCard key={event.id} description={event.description} name={event.name} time={event.time} date={event.date} event_picture={event.event_picture} am={event.am}/>
  })
  return (
    <div className={classes.card} style={sideScroll? {flexWrap:"nowrap"}: null}>
      {list}
    </div>
  
  );
}