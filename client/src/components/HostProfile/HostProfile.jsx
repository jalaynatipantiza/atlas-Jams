import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useStyles from './styles/styles';
import HostInfoBox from './hostInfoBox';
import Spaces from './hostSpaces';
import EventsCardList from '../EventsCards/EventCardList';



const spaces = [
  {  
    url: "https://images.unsplash.com/photo-1563341591-ad0a750911cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {  
    url: "https://images.unsplash.com/photo-1566197147239-58a2590553b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {  
    url: "https://images.unsplash.com/photo-1563341591-ad0a750911cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {  
    url: "https://images.unsplash.com/photo-1566197147239-58a2590553b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  } 
];

const info = 
  {
  name: "Milana Rivera",  
  email: "milana@gmail.com", 
  number: 3064703612, 
  description:"Backyard garden space", 
  location: "saskatoon"
  }
const events = [
    {
      id:1,
      date: "2020-10-02",
      time: "12:00",
      am: false,
      name: "Jazz Fest",
      price: 15.00,
      description: "Join us at our annual jazz festival and show case your jazzy tunes",
      duration: "180",
      attendants: 15,
      event_picture: "https://images.unsplash.com/photo-1483842293911-b0f670601cdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2024&q=80"
    },
    {
      id:3,
      date: "2020-10-02",
      time: "12:00",
      am: false,
      name: "Jazz Fest",
      price: 15.00,
      description: "Join us at our annual jazz festival and show case your jazzy tunes",
      duration: "180",
      attendants: 15,
      event_picture: "https://images.unsplash.com/photo-1483842293911-b0f670601cdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2024&q=80"
    },
    {
      id:2,
      date: "2020-10-02",
      time: "12:00",
      am: false,
      name: "Jazz Fest",
      price: 15.00,
      description: "Join us at our annual jazz festival and show case your jazzy tunes",
      duration: "180",
      attendants: 15,
      event_picture: "https://images.unsplash.com/photo-1483842293911-b0f670601cdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2024&q=80"
    }

  ]
const HostProfile = (props) => {

  const classes = useStyles();

  return(
    <div>
      <div>
        <div className={classes.mainPic}></div>
      </div>
      <div>
      <EventsCardList events={events}/>
      </div>
        <div>
        <HostInfoBox name={info.name} email={info.email} number={info.number} description={info.description} location={info.location}/>
        </div>
        <div>
          <Spaces spaces={spaces}/>
        </div>

    </div>
  )
};

export default HostProfile;

