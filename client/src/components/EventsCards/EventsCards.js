import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: "30vw",
    minWidth: '200px'
  },
  media: {
    height: "15vw",
  },
});


export default function EventsCard(props) {
  console.log(props);
  const {description, name, date, event_picture, time, am} = props

  const classes = useStyles();
  const partialDescription = description.slice(0, 100);

  return (
    <Card className={classes.root} style={{margin:"10px"}}>
      <CardActionArea >
        <CardMedia
          className={classes.media}
          image={event_picture}

        />
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
      <CardActions style={{display: "flex", justifyContent: "center"}} >
        <Button size="small" color="primary" style={{alignSelf:"center"}}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}