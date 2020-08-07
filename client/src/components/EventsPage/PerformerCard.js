import React from 'react';
import useStyles from './styles/styles';
import { Grid, Box, Paper, Typography, ButtonBase, Button } from '@material-ui/core';

export default function PerformerCard({ profile_pic, name, description }) {
  const classes = useStyles();

  return (
    <Grid item className={classes.main}>
      <Typography variant="h4" className={classes.title}>
        Performer(s)
      </Typography>
        <Paper className={classes.paper}>
        <Grid item>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={profile_pic} />
              <Typography gutterBottom variant="subtitle1" className={classes.name}>
                {name} | Genre
              </Typography>
            </ButtonBase>
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