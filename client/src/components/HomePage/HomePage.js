import React, { useEffect } from 'react';
import SearchBox from '../Navbar/searchBox';
import EventsCardList from '../EventsCards/EventCardList';
import { useState } from 'react';
import Axios from 'axios';

// const events = [
//   {
//   time: "4:00",
//   name: "Jazz fest",
//   description: "the funkiest most jazziest event youll ever go to. once a year saskatoon hosts the best of the best jazz festival. The jazz community in saskatoon is very enthusiastic. But we welcome more then just jazz performers. last year we even had many different genres perform at this fun event.",
//   date: "2020-10-23",
//   event_picture: "https://images.unsplash.com/photo-1483842293911-b0f670601cdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2024&q=80"
// },
// {
//   time: "4:00",
//   name: "Jazz fest",
//   description: "the funkiest most jazziest event youll ever go to. once a year saskatoon hosts the best of the best jazz festival. The jazz community in saskatoon is very enthusiastic. But we welcome more then just jazz performers. last year we even had many different genres perform at this fun event.",
//   date: "2020-10-23",
//   event_picture: "https://images.unsplash.com/photo-1483842293911-b0f670601cdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2024&q=80"
// },
// {
//   time: "4:00",
//   name: "Jazz fest",
//   description: "the funkiest most jazziest event youll ever go to. once a year saskatoon hosts the best of the best jazz festival. The jazz community in saskatoon is very enthusiastic. But we welcome more then just jazz performers. last year we even had many different genres perform at this fun event.",
//   date: "2020-10-23",
//   event_picture: "https://images.unsplash.com/photo-1483842293911-b0f670601cdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2024&q=80"
// },
// {
//   time: "4:00",
//   name: "Jazz fest",
//   description: "the funkiest most jazziest event youll ever go to. once a year saskatoon hosts the best of the best jazz festival. The jazz community in saskatoon is very enthusiastic. But we welcome more then just jazz performers. last year we even had many different genres perform at this fun event.",
//   date: "2020-10-23",
//   event_picture: "https://images.unsplash.com/photo-1483842293911-b0f670601cdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2024&q=80"
// },
// {
//   time: "4:00",
//   name: "Jazz fest",
//   description: "the funkiest most jazziest event youll ever go to. once a year saskatoon hosts the best of the best jazz festival. The jazz community in saskatoon is very enthusiastic. But we welcome more then just jazz performers. last year we even had many different genres perform at this fun event.",
//   date: "2020-10-23",
//   event_picture: "https://images.unsplash.com/photo-1483842293911-b0f670601cdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2024&q=80"
// },
// {
//   time: "4:00",
//   name: "Jazz fest",
//   description: "the funkiest most jazziest event youll ever go to. once a year saskatoon hosts the best of the best jazz festival. The jazz community in saskatoon is very enthusiastic. But we welcome more then just jazz performers. last year we even had many different genres perform at this fun event.",
//   date: "2020-10-23",
//   event_picture: "https://images.unsplash.com/photo-1483842293911-b0f670601cdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2024&q=80"
// }
// ]



function HomePage() {

  const [events, setEvents] = useState([])
  useEffect(()=>{
    Axios.get("/all/events")
    .then(res => {
      console.log(res.data);
      setEvents(res.data)
    })
  }, [])


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
