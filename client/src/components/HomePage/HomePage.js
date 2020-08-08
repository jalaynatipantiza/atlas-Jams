import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBox from '../Navbar/searchBox';
import EventsCardList from '../EventsCards/EventCardList';

function HomePage({ setEvent }) {

  // console.log('HomePage', events)

  const [events, setEvents] = useState([])

  useEffect(()=>{
    window.scrollTo(0, 0)
    axios.get("/all/events")
    .then(res => {
      console.log('res.data', res.data)
      const arr = res.data.map(event => {
        return event.event
      })
      setEvents(arr)
    })
  }, [])

  // console.log('events:', events);

  window.localStorage.navTheme = 'LIGHT'
  return (
    <React.Fragment>
      <SearchBox />
      <p style={{display:"flex", justifyContent:"center"}}>ALL UPCOMING EVENTS</p>
      <div style={{height: "100vh", width: "100vw", display:"flex", justifyContent:"center"}}>
       <EventsCardList events={events} />
      </div>
    </React.Fragment>
      
  )
}

export default HomePage;
