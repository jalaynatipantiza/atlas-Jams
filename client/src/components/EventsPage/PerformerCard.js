import React from 'react';
import useStyles from './styles/styles';
import { Grid, Box, Paper, Typography, ButtonBase, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

export default function PerformerCard({ profile_pic, name, description, id, my_genres }) {
  const classes = useStyles();

  // {my_genres.map((genre, index) => <span key={index}>/{genre}</span> )}

  return (
    <Grid item className={classes.main}>
      <Paper className={classes.paper}>
        <Grid item>
          <Grid item>
            <Link to={`/performer/${id}`} style={{ textDecoration: 'none', color:"black" }}>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={profile_pic} />
              <Typography gutterBottom variant="subtitle1" className={classes.name}>
                {name} <MusicNoteIcon fontSize={'small'} /> {my_genres.join('/')}
              </Typography>
            </ButtonBase>
            </Link>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="body2" gutterBottom>
                {description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
};