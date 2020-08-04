import React from 'react';
import { Grid, Box, Paper, Typography, ButtonBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  main: {
    padding: 20,
    margin: 20,
    height: 300
  }
  ,
  header: {
    padding: 20,
    margin: 20,
    height: 100
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 126,
    height: 126,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },

}));

export default function EventsPage() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item className={classes.header}>Header Container</Grid>
      <Grid item className={classes.main}>
        <Paper className={classes.paper}>
        Host Section
          <Grid item>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src="https://images.unsplash.com/photo-1549834125-82d3c48159a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Host Name
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia massa erat, quis placerat erat cursus non. Nulla a pulvinar mi. Vestibulum mollis semper blandit. Nulla volutpat luctus lectus in placerat. Quisque pulvinar id lacus eget dictum. Integer ultrices volutpat orci at placerat. Maecenas porta non felis vitae pharetra. Suspendisse.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item className={classes.main}>
        <Paper className={classes.paper}>
        Performer Section
          <Grid item>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src="https://images.unsplash.com/photo-1549834125-82d3c48159a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Performer Name
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia massa erat, quis placerat erat cursus non. Nulla a pulvinar mi. Vestibulum mollis semper blandit. Nulla volutpat luctus lectus in placerat. Quisque pulvinar id lacus eget dictum. Integer ultrices volutpat orci at placerat. Maecenas porta non felis vitae pharetra. Suspendisse.
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      
    </Grid>
  );
}