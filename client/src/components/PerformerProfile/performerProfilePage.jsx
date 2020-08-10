import React from 'react'
import Profile from './PerformerProfile';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import RecordingList from './recordingList';
import EventsCardList from '../EventsCards/EventCardList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProfilePage = ({setEvent}) => {
  
  const [user, setUser] = useState({
    info: {},
    recordings: [],
    events: [],
  })
  window.sessionStorage.navTheme = 'BLACK'
  

  const { id } = useParams();
  
  useEffect(()=>{ 
    
    axios.get(`/users/${id}`)
  .then(res=>{
    setUser((prev)=>{ return {...prev, info: {...res.data}}})

    axios.get(`/user/${id}/recordings/`)
      .then(res =>{
        setUser((prev)=>{ return {...prev, recordings: [...res.data]}})

        axios.get(`/user/${id}/events`)
          .then(res => {
            console.log(res.data);
            const reverse = res.data.reverse()
             setUser((prev)=>{ return {...prev, events: [...reverse]}})
              
          })
      })
  })

    setInterval(function(){ 
      axios.get(`/user/${id}/events`)
      .then(res => {
        console.log(res.data);
        const reverse = res.data.reverse()
         setUser((prev)=>{ return {...prev, events: [...reverse]}}) 
      })
    }, 3000);
  },[])

  const useStyles = makeStyles({
    mainPic: {
      backgroundImage:  `url(${user.info.profile_pic})`,
      height: "80%",
      marginTop: "12px",
      backgroundPosition: "center",
      backgroundSize: "cover"
    },
    eventProfile: {
      display: "flex"
    },
    eventPro: {
      margin: "10px",
      height: "80vh",
      width: "38vw",
      overflow: "auto",
      flexDirection: "column",
      display: "flex",
      alignItems: "center",
      font: "initial"
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
        <div style={{display:"flex", margin: "90px 75px 0 75px",  justifyContent: "space-between"}}>
          <div style={{height: "50vh", width: "50vw"}}>
            <div className={classes.mainPic}></div>
            <Profile user={user.info}/>
          </div>
          <div className={classes.eventProfile}>
            <Box className={classes.eventPro}>
            <h1 style={{display: "flex", justifyContent: "center"}}>Upcoming Events</h1>
              <Typography style={{display: "flex", justifyContent: "center"}}>
              <EventsCardList events={user.events} setEvent={setEvent}/>
              </Typography>
            </Box>
          </div>
        </div>
        <div className={classes.videoHolder}>
          <RecordingList recordings={user.recordings}/>
        </div>
    </div>
  )
};

export default ProfilePage;
