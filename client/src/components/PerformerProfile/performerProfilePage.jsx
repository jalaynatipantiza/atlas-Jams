import React from 'react'
import Profile from './PerformerProfile';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import RecordingList from './recordingList';
import EventsCardList from '../EventsCards/EventCardList';
import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';

const ProfilePage = (props) => {
  
  const [user, setUser] = useState({
    info: {},
    recordings: [],
    events: [],
  })
  
  const userID = window.localStorage.id
  
  useEffect(()=>{
    axios.get(`/users/${userID}`)
      .then(res=>{
        setUser((prev)=>{ return {...prev, info: {...res.data}}})

        axios.get(`/user/${userID}/recordings/`)
          .then(res =>{
            setUser((prev)=>{ return {...prev, recordings: [...res.data]}})

            axios.get(`/user/${userID}/events`)
              .then(res => {
                 setUser((prev)=>{ return {...prev, events: [...res.data]}})
    
              })
          })
      })
  },[])

  const useStyles = makeStyles({
    mainPic: {
      filter: "blur(3px)",
      backgroundImage:  `url(${user.info.profile_pic})`,
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

  return(

    <div>
      <div>
  <h1 className={classes.bgText}>{user.info.name}</h1>
      <div className={classes.mainPic}></div>
      </div>
   
      <div className={classes.eventProfile}>
        <div style={{width:"60%"}}>
          <Profile user={user.info}/>
        </div>
        <Box className={classes.eventPro}>
          <Typography>
          <h1 style={{display: "flex", justifyContent: "center"}}>Upcoming Events</h1>
          <EventsCardList events={user.events}/>
          </Typography>
        </Box>
        
      </div>
      
      <div className={classes.videoHolder}>
        <RecordingList recordings={user.recordings}/>
      </div>
    </div>
  )
};

export default ProfilePage;
