import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles/styles';
import { Link } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function EventsCard({ description, name, date, event_picture, time, am, id, key, capacity, num_of_attendees, accepted, user_id }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  const partialDescription = description.slice(0, 100);
   const [displayRequest, setDiplayRequest]= useState(false)
  const user = window.localStorage.id
  useEffect(()=> {
    
    if(user == user_id){
      setDiplayRequest(true)
    }
  }, [])

  return (
      <Card className={classes.root} style={{margin:"10px"}}>
        <CardActionArea >
          <CardMedia
            className={classes.media}
            image={event_picture}

          >
           {displayRequest && !accepted && <Button onClick={handleClickOpen} size="small" color="secondary" variant="outlined" style={{alignSelf:"center" , backgroundColor:"rgb(255, 208, 211)"}}>
              pending request
            </Button>}
        </CardMedia>
          <CardContent >
            <Typography gutterBottom variant="h5" component="h1">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {`${date} ${time}`}
            { am ? "am" : "pm"}

            </Typography>
            <Typography variant="body2" component="p">
              {partialDescription}...
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardAction} >
        <Link to={`/events/${id}`} style={{ textDecoration: 'none', color: "inherit" }}>
          <Button size="small" color="primary" style={{alignSelf:"center"}}>
            Learn More
          </Button>
        </Link>
        </CardActions>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"You have been  invite to perform!"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                desc info
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="secondary">
                accept
              </Button>
              <Button onClick={()=>{console.log("lol")}} color="secondary" autoFocus>
                decline
              </Button>
            </DialogActions>
          </Dialog>
      </Card>



  );
}