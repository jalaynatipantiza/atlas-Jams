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
import { useHistory } from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function EventsPage() {
  const history = useHistory()
  const { event_id } = useParams();

  // event, performers, space, host
  const [eventInfo, setEventInfo ] = useState(null);
  
  const [performers, setPerformers] = useState([]);



  window.localStorage.navTheme = 'LIGHT'


  const deleteEvent = () => {
    axios.delete(`/event/${event_id}`)
    .then(()=> {
      history.push(`/`)
    })
  }
  useEffect(()=> {
    window.scrollTo(0, 0)
    axios.get(`/event/${event_id}`)
      .then(res => {
        setEventInfo({...res.data});
        setPerformers(res.data.performers)
      })
  }, []);
  
  const backgroundImage = eventInfo ? eventInfo.event.event_picture : "https://static.dribbble.com/users/5661/screenshots/2491233/loading-gif-800x600.gif"
  
  const useStyles = makeStyles(theme => ({
    banner: {
        backgroundImage: `url("${backgroundImage}")`,
        minHeight: "350px",
        backgroundSize: 'cover',
        backgroundPosition: "center",
        
      },
      main: {
        padding: 20,
        height: 300,
      }
      ,
      header: {
        padding: 20,
        marginTop: 90,
        height: 100,
        display: 'flex',
      },
      root: {
        flexGrow: 1,
      },
      image: {
        height: 126,
        marginBottom: 20,
      },
      img: {
        margin: 'auto',
        display: 'flex',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: 7,
      },
      paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        width: 900,
      },
      headerRight: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: 40,
      },
      headerLeft: {
        display: 'flex',
        paddingLeft: 40,
      },
      name: {
        paddingLeft: 20,
        paddingBottom: 15,
      },
      title: {
        margin: 20,
        justify: 'center',
      },
    
    }));

    const userType = window.localStorage.user_type
    const user_id = window.localStorage.id
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
              <Button variant="contained" color="primary">
                Attend 
              </Button>
                
              { userType === "host" && ( user_id == eventInfo.host.id &&
                <Button  onClick={handleClickOpen} onClick={handleClickOpen} color="secondary" variant="outlined" >
                  Delete Event
                </Button> 
              )}
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
        <Grid item className={classes.main}>
          <Paper className={classes.paper}>
            <Grid item>
              <Grid item>
                  {eventInfo && 
                <Link to={`/host/${eventInfo.host.id}`} style={{ textDecoration: 'none', color:"black" }}>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src={`${eventInfo.host.profile_pic}`} />
                  <Typography gutterBottom variant="subtitle1" className={classes.name}>
                      {eventInfo.host.name}
                    </Typography>
                </ButtonBase>
                </Link>
                  }
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
        <Typography variant="h4" className={classes.title}>
          Performer(s)
        </Typography>
        <Grid item className={classes.main}>
        {
          performers.length > 0 && performers.map((performer)=><PerformerCard profile_pic={performer.profile_pic} name={performer.name} description={performer.description} id={performer.id} my_genres={performer.my_genres} key={performer.id}/>)
        }
        </Grid>
      </Grid>
    </React.Fragment>
  );
}