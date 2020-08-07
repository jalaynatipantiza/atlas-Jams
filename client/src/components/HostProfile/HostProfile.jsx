import React from 'react';
import useStyles from './styles/styles';
import { makeStyles } from '@material-ui/core/styles';
import HostInfoBox from './hostInfoBox';
import Spaces from './hostSpaces';
import EventsCardList from '../EventsCards/EventCardList';
import { Box, Typography} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';



const HostProfile = (props) => {

  const [hostProfile, setHostProfile] = useState({
    hostInfo: {},
    hostSpaces: [],
    events:[]
  });
  const userID = window.localStorage.id

  useEffect(() => {
    axios.get(`/users/${userID}`)
      .then(res => {
        setHostProfile(prev => {return {...prev, hostInfo: {...res.data}}})
       
        // axios.get(`/user/${userID}/events`)
        // .then(res => {
        //   console.log(res.data);
        //   setHostProfile(prev=> { return {...prev, events: [...res.data]}})
          
        // })
      })
  }, [])

const useStyles = makeStyles({
  mainPic: {
    backgroundImage:  `url("${hostProfile.hostInfo.profile_pic}")`,
    height: "50%",
    backgroundPosition: "center",
    backgroundSize: "cover"
  },
  contactInfo: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "15px",
    height: "25px"
  },
  descriptionBox: {
    height: "150px",
    overflow: "auto"  
  },
  h1: {
    display: "flex",
    justifyContent: "center",
    font: "initial",
    fontSize: "xxx-large"
  },
  events: {
    justifyContent: "center",
    flexFlow: "row wrap",
    
  },
  eventBox:{
    width: "60vw",
    overflow: "auto",
    display: "flex",
    alignItems: "center",
    font: "initial"
  },

  buttonEvent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  addButton: {
    backgroundColor: "chocolate",
    color: "white",
    marginTop: "10px"
  }
});

  const classes = useStyles();
  
  return(
    <div >
      <div style={{display:"flex",margin: "75px 75px 0 75px",  justifyContent: "space-between"}}>
      <div style={{height: "70vh"}}>
        <div className={classes.mainPic}></div>
        <HostInfoBox hostInfo={hostProfile.hostInfo}/>
      </div>
        <div className={classes.buttonEvent}>
        <p style={{font:"initial", fontSize: "xx-large", margin: "2px"}}>Events</p>
          <Box className={classes.eventBox}>
            <Typography className={classes.events}>
              <EventsCardList events={hostProfile.events}  sideScroll={true}/>
            </Typography>

          </Box>
          <div  className={classes.buttonEvent}>
          <Button className={classes.addButton} variant="contained" >
            Add Event!
          </Button>
          </div>
        </div>
      </div>
      
        <div>
          <Spaces spaces={hostProfile.hostSpaces}/>
        </div>

    </div>
  )
};

export default HostProfile;

