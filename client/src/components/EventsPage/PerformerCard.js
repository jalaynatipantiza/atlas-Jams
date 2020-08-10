import React, {useEffect, useState} from 'react';
import useStyles from './styles/styles';
import { Grid, Box, Paper, Typography, ButtonBase, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

export default function PerformerCard({ profile_pic, name, description, id, my_genres, confirmed, host_id }) {
  const classes = useStyles();
  const [displayRequest, setDiplayRequest]= useState(false)
  const user = window.localStorage.id

  useEffect(()=> {
    
    if(user == host_id){
      setDiplayRequest(true)
    }
  }, [])

  return (
    <Link to={`/performer/${id}`} style={{ textDecoration: 'none', color:"black", margin:"10px", fontFamily:"initial" }}>
      {/* <Grid item className={classes.main}> */}
        <Paper className={classes.paper} elevation={4}>
          <Grid item>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={profile_pic} />
                <Typography gutterBottom variant="subtitle1" className={classes.name}>
                  {name} <MusicNoteIcon fontSize={'small'} /> {my_genres.join('/')}
                </Typography>
              </ButtonBase>
            </Grid>
                  {displayRequest && !confirmed  && user && <Button size="small" color="secondary" variant="outlined" style={{alignSelf:"center" , backgroundColor:"rgb(255, 208, 211)"}}>
                          Pending Request
                        </Button> || displayRequest && confirmed  && user && <Button size="small" color="primary" variant="outlined" style={{alignSelf:"center" , backgroundColor:"rgb(208, 229, 255)"}}>
                          Invitation Accepted
                        </Button>}
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography variant="body2" gutterBottom className={classes.description}>
                  {description}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      {/* </Grid> */}
    </Link>
  )
};