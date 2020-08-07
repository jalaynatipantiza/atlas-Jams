import React, { useEffect, useState } from 'react';
import { Grid, Box, Paper, Typography, ButtonBase, Button } from '@material-ui/core';
import TodayIcon from '@material-ui/icons/Today';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import useStyles from './styles/styles';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import HostInfoBox from '../HostProfile/hostInfoBox';
import PerformerCard from './PerformerCard';

export default function EventsPage() {
  const classes = useStyles();

  const { event_id } = useParams();

  // event, performers, space, host
  const [eventInfo, setEventInfo ] = useState(null);

  const [performers, setPerformers] = useState([]);


  useEffect(()=> {
    window.scrollTo(0, 0)
    axios.get(`/event/${event_id}`)
      .then(res => {
        setEventInfo({...res.data});
        setPerformers(res.data.performers)
      })
  }, []);

    window.localStorage.navTheme = 'LIGHT'
    
      
  return (
    <React.Fragment>
      {performers.length > 0 &&
      <Grid 
        container
        className={classes.banner}
        style={{backgroundImage: `url(${performers[0].profile_pic})`}}
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
            <TodayIcon />{eventInfo.event.date}/<AccessTimeIcon />{eventInfo.event.time}/<LocationOnIcon />{eventInfo.space.address} 
            </div>
            }
          </Grid>
        </Grid>
        <Grid item xs={6} className={classes.headerRight}>
          <Grid item>
            <Button variant="contained" color="primary">
              Attend
            </Button>
          </Grid>
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