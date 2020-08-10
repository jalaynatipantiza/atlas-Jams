import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBox from '../Navbar/searchBox';
import EventsCardList from '../EventsCards/EventCardList';

function HomePage({ setEvent }) {

  // console.log('HomePage', events)

  const [events, setEvents] = useState([]);

  const [searchEvents, setSearchEvents] = useState([]);

  // console.log('searchEvents:', searchEvents);

  useEffect(()=>{
    
    if (searchEvents.length > 0) {
      
      axios({
        method: 'get',
        url: '/search',
        params: {
          location: searchEvents,
        },
      })
      .then(res => {
        console.log('res.data:', res.data);
        const arr = res.data.map(event => event.event);
        setEvents(arr.reverse());
      });
      
    } else {
      
      window.scrollTo(0, 0);
      
      axios.get("/all/events")
        .then(res => {
          console.log('res.data', res.data);
          const arr = res.data.map(event => {
            return event.event;
          });
          setEvents(arr.reverse());
        });
    };
  }, [searchEvents]);

  // console.log('events:', events);

  window.localStorage.navTheme = 'LIGHT';

  return (
    <React.Fragment>
      <SearchBox events={events} setSearchEvents={setSearchEvents} />
      <p style={{display:"flex", justifyContent:"center"}}>ALL UPCOMING EVENTS</p>
      <div style={{ width: "100vw", display:"flex", justifyContent:"center"}}>
       <EventsCardList events={events} />
      </div>
    </React.Fragment> 
  );
};

export default HomePage;
