import React from 'react'
import useStyles from "./styles/styles";
import Profile from './PerformerProfile';
import Recording from './recording';
import { makeStyles } from '@material-ui/core/styles';
import EventsCard from '../EventsCards/EventsCards';
import { Box } from '@material-ui/core';

const ProfilePage = (props) => {

  const useStyles = makeStyles({
    mainPic: {
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
      height: "80vh",
      width: "45vw",
      overflow: "auto",
      display: "flex",
      flexDirection: "column",
      display: "flex",
      justifyContent: "center",
       alignItems: "center",
       font: "initial"
    }

  });
  const classes = useStyles();
  
  return(

    <div>
      <div className={classes.mainPic}></div>
      <div className={classes.eventProfile}>
        <div style={{width:"60%"}}>
          <Profile name={"Massimo"} email={"massimo123@gmail.com"} number={"3608908769"} location={"Calagry"} size={"1"} />
        </div>
        <div className={classes.eventPro}>
          <h1>Upcoming Events</h1>
          <EventsCard description={"the funkiest most jazziest event youll ever go to. once a year saskatoon hosts the best of the best jazz festival. The jazz community in saskatoon is very enthusiastic. But we welcome more then just jazz performers. last year we even had many different genres perform at this fun event."} name={"Jazz fest"} time={"4:00"} date={"2020-10-23"} event_picture={"https://images.unsplash.com/photo-1483842293911-b0f670601cdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2024&q=80"}  />
          <EventsCard description={"the funkiest most jazziest event youll ever go to. once a year saskatoon hosts the best of the best jazz festival. The jazz community in saskatoon is very enthusiastic. But we welcome more then just jazz performers. last year we even had many different genres perform at this fun event."} name={"Jazz fest"} time={"4:00"} date={"2020-10-23"} event_picture={"https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"}  />
          <EventsCard description={"the funkiest most jazziest event youll ever go to. once a year saskatoon hosts the best of the best jazz festival. The jazz community in saskatoon is very enthusiastic. But we welcome more then just jazz performers. last year we even had many different genres perform at this fun event."} name={"Jazz fest"} time={"4:00"} date={"2020-10-23"} event_picture={'https://images.unsplash.com/photo-1596334861142-48f19282fcba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'}  />
          <EventsCard description={"the funkiest most jazziest event youll ever go to. once a year saskatoon hosts the best of the best jazz festival. The jazz community in saskatoon is very enthusiastic. But we welcome more then just jazz performers. last year we even had many different genres perform at this fun event."} name={"Jazz fest"} time={"4:00"} date={"2020-10-23"} event_picture={'https://images.unsplash.com/photo-1470019693664-1d202d2c0907?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'}  />
          <EventsCard description={"the funkiest most jazziest event youll ever go to. once a year saskatoon hosts the best of the best jazz festival. The jazz community in saskatoon is very enthusiastic. But we welcome more then just jazz performers. last year we even had many different genres perform at this fun event."} name={"Jazz fest"} time={"4:00"} date={"2020-10-23"} event_picture={"https://images.unsplash.com/photo-1576060974974-933acee13b58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"}  />
          <EventsCard description={"the funkiest most jazziest event youll ever go to. once a year saskatoon hosts the best of the best jazz festival. The jazz community in saskatoon is very enthusiastic. But we welcome more then just jazz performers. last year we even had many different genres perform at this fun event."} name={"Jazz fest"} time={"4:00"} date={"2020-10-23"} event_picture={'https://images.unsplash.com/photo-1476287803067-f714aa78eaa7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'}  />
        </div>
        
      </div>
      
      <div>
        <Recording url={"https://www.youtube.com/watch?v=Nl9LrqV_HG8&list=RDNl9LrqV_HG8&start_radio=1"}/>
      </div>
    </div>
  )
};

export default ProfilePage;
