import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import useStyles from './styles/styles';
import '../../App.css'


const HostInfoBox = (props) => {
  const classes = useStyles();

  const {name, email, number, description, location} = props.hostInfo
  const preventDefault = (event) => event.preventDefault();

  return(
    <Card style={{width: "350px"}}>
      <CardActionArea >
        <CardContent >
          <Typography className={classes.h1} gutterBottom variant="h5" component="h1">
            {name}
          </Typography>
          <Typography className={classes.contactInfo} variant="body2" color="textSecondary" component="p">
          {`${email} | ${location}`}
          </Typography>

          <Typography className={classes.descriptionBox} paragraph>
           <p>{description}</p>
          </Typography>
        
      </CardContent>
    </CardActionArea>
  </Card>

  )
};

export default HostInfoBox;

