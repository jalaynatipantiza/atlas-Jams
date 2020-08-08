import React, { useEffect, useState } from 'react';
import { Grid, Box, Paper, Typography, ButtonBase, Button } from '@material-ui/core';
import TodayIcon from '@material-ui/icons/Today';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import HostInfoBox from '../HostProfile/hostInfoBox';
import PerformerCard from './PerformerCard';
import { makeStyles } from '@material-ui/core/styles';
import useStyles from './styles/styles';
import { useHistory } from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function EventsPage() {

  // VARIABLES
  const userType = window.localStorage.user_type;

  const user_id = window.localStorage.id;

  const history = useHistory();

  const { event_id } = useParams();

  // STATE HOOKS
  const [eventInfo, setEventInfo ] = useState(null);

  const [performers, setPerformers] = useState([]);

  const [isAttending, setIsAttending] = useState(false);

  // console.log("right here", eventInfo);

  // GRABS STATE FROM BACKEND
  useEffect(()=> {
    window.scrollTo(0, 0);
    axios.get(`/event/${event_id}`)
    .then(res => {
      console.log('this is event info',res.data);
      setEventInfo({...res.data});
      setPerformers(res.data.performers);

      axios.get(`/attending/${user_id}/${event_id}`)
      .then(res => {
        console.log('attending:', res.data);

        if (res.data.length > 0) {
          setIsAttending(true);
        } else {

          console.log('attending:', res.data);
          setIsAttending(false);
        };
      });
    });
  }, []);
  

  const deleteEvent = () => {
    axios.delete(`/event/${event_id}`)
    .then(()=> {
      history.push(`/`);
    });
  };
  
  const unattend = () => {
    axios({
      method: 'delete',
      url: '/attending',
      data: {
        event_attendee: {
          user_id: user_id,
          event_id: eventInfo.event.id
        }
      }
    })
    .then(()=>{
      setEventInfo(prev => {
        return {...prev, num_of_attendees: prev.num_of_attendees - 1};
      });
      setIsAttending(false);
    });
  };

  const attend = () => {
    axios({
      method: 'post',
      url: '/attending',
      data: {
        event_attendee: {
          user_id: user_id,
          event_id: eventInfo.event.id
        }
      },
    })
      .then((res) => {
        setEventInfo(prev => {
          return {...prev, num_of_attendees: prev.num_of_attendees + 1};
        });
        setIsAttending(true);
      });
  };
  
  // const backgroundImage = eventInfo ? eventInfo.event.event_picture : "https://static.dribbble.com/users/5661/screenshots/2491233/loading-gif-800x600.gif"
 
  window.localStorage.navTheme = 'LIGHT';
  
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    
  return (
    <React.Fragment>
      {performers.length > 0 &&
      <Grid 
      container
      className={classes.banner}
      style={{backgroundImage: `url(${eventInfo.performers[0].profile_pic})`}}
      >
      </Grid>
      }
      <Grid
        container
        className={classes.header}
      >
        <Grid item xs={6}>
          <Grid item className={classes.headerLeft}>
            {eventInfo && <div>
            <Link to={`/host/${eventInfo.host.id}`} style={{ textDecoration: 'none', color:"black" }}></Link>
            <TodayIcon />{eventInfo.event.date}/<AccessTimeIcon />{eventInfo.event.time} {eventInfo.event.am? 'am': 'pm'}/<LocationOnIcon />{eventInfo.space.address} 
            </div>
            }
          </Grid>
        </Grid>
        <Grid item xs={6} className={classes.headerRight}>
          {eventInfo &&
          <Grid item >
            Spots remaining: {eventInfo.capacity - eventInfo.num_of_attendees}
            {isAttending 
            ? <Button variant="contained" color="primary" onClick={() => unattend()}>Unattend</Button> 
            : <Button variant="contained" color="primary" onClick={() => attend()}>Attend </Button>
            }
            { userType === "host" && ( user_id == eventInfo.host.id &&
              <Button  onClick={handleClickOpen} onClick={handleClickOpen} color="secondary" variant="outlined" >
                Delete Event
              </Button>)
             }
          </Grid>
          }
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete this event?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Deleting this event means deleting entire event.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="secondary">
                Cancel
              </Button>
              <Button onClick={deleteEvent} color="secondary" autoFocus>
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>

      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography variant="h4" className={classes.title}>
          Host
        </Typography>
    {eventInfo && <Link to={`/host/${eventInfo.host.id}`} style={{ textDecoration: 'none', color:"black" }}>
        <Grid item className={classes.main}>
          <Paper className={classes.paper}>
            <Grid item>
              <Grid item> 
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={`${eventInfo.host.profile_pic}`} />
                  <Typography gutterBottom variant="subtitle1" className={classes.name}>
                      {eventInfo.host.name}
                    </Typography>
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    {eventInfo &&
                    <Typography variant="body2" gutterBottom>
                    {eventInfo.host.description}
                    </Typography>
                    }
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Link>   
    }
        <Typography variant="h4" className={classes.title}>
          Performer(s)
        </Typography>
        <Grid item className={classes.main}>
        {
          performers.length > 0 && performers.map((performer)=><PerformerCard profile_pic={performer.profile_pic} name={performer.name} description={performer.description} id={performer.id} my_genres={performer.my_genres} key={performer.id} confirmed={performer.accepted} host_id={eventInfo.host.id}/>)
        }
        </Grid>
      </Grid>
    </React.Fragment>
  );
};