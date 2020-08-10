import React, { useEffect, useState } from 'react';
import { Grid, Box, Paper, Typography, ButtonBase, Button, Divider } from '@material-ui/core';
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
import '../../App.css'


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

  // GRABS STATE FROM BACKEND
  useEffect(()=> {
    window.scrollTo(0, 0);
    axios.get(`/event/${event_id}`)
    .then(res => {
      setEventInfo({...res.data});
      setPerformers(res.data.performers);
    });
    
    axios.get(`/attending/${user_id}/${event_id}`)
    .then(res => {
      if (res.data.length > 0) {
        setIsAttending(true);
      } else {
        setIsAttending(false);
      };
    });

    setInterval(function(){
      axios.get(`/event/${event_id}`)
      .then(res => {
        setEventInfo({...res.data});
        setPerformers(res.data.performers);
      });
    },3000)
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
    if(user_id){
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
    }
    else {
      history.push('/signup')
    }
  };
  
 
  window.localStorage.navTheme = 'LIGHT';
  
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const isAPerformer = ()=>{
    const performersId = performers.map(performer => {
      return performer.id
    })

    return performersId.includes(parseInt(user_id))


  }
    
  return (
    <React.Fragment>
      {performers.length > 0 &&
      <Grid 
      container
      className={classes.banner}
      style={{backgroundImage: `url(${eventInfo.event.event_picture})`}}
      >
      </Grid>
      }

      <Grid
        container
        className={classes.header}
      >
        <Grid item xs={6}>
          <Grid item className={classes.headerLeft}>
            {eventInfo && <div style={{fontSize:"large"}}>
            <Link to={`/host/${eventInfo.host.id}`} style={{ textDecoration: 'none', color:"black" }}></Link>
            <TodayIcon /> {eventInfo.event.date} <AccessTimeIcon /> {eventInfo.event.time} {eventInfo.event.am? 'am': 'pm'}<LocationOnIcon />{eventInfo.space.address} 
            </div>
            }
          </Grid>
        </Grid>

        <Grid item xs={6} className={classes.headerRight}>
          {eventInfo &&
          <Grid item style={{display:'flex', alignItems: 'center'}}>
            <p>Spots remaining:</p>
            <p style={{marginLeft:"5px", marginRight:"20px"}}>
              {eventInfo.capacity - eventInfo.num_of_attendees}
            </p>
            
            { userType === "host" &&  user_id == eventInfo.host.id || isAPerformer()? null :isAttending 
            ? <Button variant="contained" color="secondary" onClick={() => unattend()}>Unattend</Button> 
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
        {eventInfo && 
        <Typography variant="h4" className={classes.title}>
          {eventInfo.event.name}
        </Typography> 
        }
        {eventInfo && 
          <Paper className={classes.paper} elevation={4}>
            <Typography variant="body2" gutterBottom className={classes.description}>
              {eventInfo.event.description}
            </Typography>
          </Paper>
        }
        <Divider variant="middle" style={{marginTop: '18px', marginBottom: '18px', width: '100%', marginLeft: 0, marginRight: 0}} />
        <Typography variant="h4" className={classes.title}>
          Host
        </Typography>
        {eventInfo && 
        <Link to={`/host/${eventInfo.host.id}`} style={{ textDecoration: 'none', color:"black" }}>
          {/* <Grid item className={classes.main}> */}
          <Paper className={classes.paper} elevation={4}>
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
                    <Typography variant="body2" gutterBottom className={classes.description}>
                    {eventInfo.host.description}
                    </Typography>
                    }
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
          {/* </Grid> */}
        </Link>   
        }
        <Divider variant="middle" style={{marginTop: '18px', marginBottom: '18px', width: '100%', marginLeft: 0, marginRight: 0}} />
        <Typography variant="h4" className={classes.title}>
          Performer(s)
        </Typography>
        {/* <Grid item className={classes.main}> */}
        {
          performers.length > 0 && performers.map((performer)=><PerformerCard profile_pic={performer.profile_pic} name={performer.name} description={performer.description} id={performer.id} my_genres={performer.my_genres} key={performer.id} confirmed={performer.accepted} host_id={eventInfo.host.id}/>)
        }
        {/* </Grid> */}
      </Grid>
    </React.Fragment>
  );
};