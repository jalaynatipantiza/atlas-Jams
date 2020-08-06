import React from 'react'
import Profile from './PerformerProfile';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import RecordingList from './recordingList';
import EventsCardList from '../EventsCards/EventCardList';

const ProfilePage = (props) => {

  const useStyles = makeStyles({
    mainPic: {
      filter: "blur(3px)",
      backgroundImage:  "url('https://images.unsplash.com/photo-1573470167254-315246dd477d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')",
      height: "50vh",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    eventProfile: {
      display: "flex"
    },
    eventPro: {
      margin: "10px",
      height: "80vh",
      width: "45vw",
      overflow: "auto",
      flexDirection: "column",
      display: "flex",
      alignItems: "center",
      font: "initial"
    },
    bgText: {
      backgroundColor: "rgb(0,0,0)",
      backgroundColor: "rgba(0,0,0, 0.4)", 
      color: "white",
      fontWeight: "bold",
      border: "3px solid #f1f1f1",
      position:" absolute",
      top: " 20%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: "2",
      width: "30%",
      padding:" 20px",
      textAlign: "center",
    },
    videoHolder: {
    margin: "10px",
    overflow: "auto",
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    font: "initial"
    }
  });
  const classes = useStyles();

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
  
  const recordings = [
    {
      url: "https://www.youtube.com/watch?v=Nl9LrqV_HG8&list=RDNl9LrqV_HG8&start_radio=1"
    },
    {
      url: "https://www.youtube.com/watch?v=Nl9LrqV_HG8&list=RDNl9LrqV_HG8&start_radio=1"
    }, 
    {
      url: "https://www.youtube.com/watch?v=Nl9LrqV_HG8&list=RDNl9LrqV_HG8&start_radio=1"
    },
    {
      url: "https://www.youtube.com/watch?v=Nl9LrqV_HG8&list=RDNl9LrqV_HG8&start_radio=1"
    },
    {
      url: "https://www.youtube.com/watch?v=Nl9LrqV_HG8&list=RDNl9LrqV_HG8&start_radio=1"
    },
    {
      url: "https://www.youtube.com/watch?v=Nl9LrqV_HG8&list=RDNl9LrqV_HG8&start_radio=1"
    }

  ]
  
  return(

    <div>
      <div>
      <h1 className={classes.bgText}>Massimo</h1>
      <div className={classes.mainPic}></div>
      </div>
   
      <div className={classes.eventProfile}>
        <div style={{width:"60%"}}>
          <Profile email={"massimo123@gmail.com"} number={"3608908769"} location={"Calagry"} size={"1"} />
        </div>
        <Box className={classes.eventPro}>
          <Typography>
          <h1 style={{display: "flex", justifyContent: "center"}}>Upcoming Events</h1>
          <EventsCardList events={events}/>
          </Typography>
        </Box>
        
      </div>
      
      <div className={classes.videoHolder}>
        <RecordingList recordings={recordings}/>
      </div>
    </div>
  )
};

export default ProfilePage;
