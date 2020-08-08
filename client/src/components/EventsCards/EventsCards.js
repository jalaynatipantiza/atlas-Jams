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
import axios from 'axios'


export default function EventsCard({ description, name, date, event_picture, time, am, id, key, capacity, num_of_attendees, accepted, user_id }) {
  const [confirmed, setConfirmed] = useState(accepted)
  const [open, setOpen] = React.useState(false);
  const [hostInfo, setHostInfo] = useState({name:'null', number: []});
  const [spaceInfo, setSpaceInfo] = useState({address: 'null'});

  const handleClickOpen = () => {
    setOpen(true);
    axios.get(`/event/${id}`)
      .then(res=>{
        console.log(res.data);
        setHostInfo(res.data.host)
        setSpaceInfo(res.data.space)
      })
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const accept = () => {
    axios.put(`/event/${id}/performers/${user_id}`)
    .then(res => {
      accepted = true
      handleClose()
      setConfirmed(true)
    })
  }
  const decline = () => {
    axios.delete(`/event/${id}/performers/${user_id}`)
    .then(res => {
      handleClose()
    })
  }
  
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
           {displayRequest && !confirmed  && user && <Button onClick={handleClickOpen} size="small" color="secondary" variant="outlined" style={{alignSelf:"center" , backgroundColor:"rgb(255, 208, 211)"}}>
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
                <p>{hostInfo.name} is inviting you play perform at the "{name}" event! </p>
                <p>Location: {spaceInfo.address} </p>
                <p>Time: {time}{ am ? "am" : "pm"} </p>
                <p>Contact: ({hostInfo.number[0]}{hostInfo.number[1]}{hostInfo.number[2]}){hostInfo.number[3]}{hostInfo.number[4]}{hostInfo.number[5]}-{hostInfo.number[6]}{hostInfo.number[7]}{hostInfo.number[8]}{hostInfo.number[9]}</p>

              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={accept} color="secondary">
                Accept
              </Button>
              <Button onClick={decline} color="secondary" autoFocus>
                Decline
              </Button>
            </DialogActions>
          </Dialog>
      </Card>



  );
}