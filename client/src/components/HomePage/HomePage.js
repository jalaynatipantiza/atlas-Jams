import React, { useEffect } from 'react';
import SearchBox from '../Navbar/searchBox';
import EventsCardList from '../EventsCards/EventCardList';
import { useState } from 'react';
import Axios from 'axios';

function HomePage() {

  const [events, setEvents] = useState([])
  useEffect(()=>{
    window.scrollTo(0, 0)
    Axios.get("/all/events")
    .then(res => {
      setEvents(res.data)
    })
  }, [])

  window.localStorage.navTheme = 'LIGHT'
  return (
    <React.Fragment>
      <SearchBox />
      <p style={{display:"flex", justifyContent:"center"}}>ALL UPCOMING EVENTS</p>
      <div style={{height: "100vh", width: "100vw", display:"flex", justifyContent:"center"}}>
       <EventsCardList events={events}/>
      </div>
    </React.Fragment>
      
  )
}

export default HomePage;
