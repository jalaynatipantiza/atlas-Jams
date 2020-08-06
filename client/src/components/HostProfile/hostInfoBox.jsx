import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import useStyles from './styles/styles';

const HostInfoBox = (props) => {
  const classes = useStyles();

  const {name, email, number, description, location} = props
  const preventDefault = (event) => event.preventDefault();

  return(
    <Card style={{width: "350px"}}>
      <CardActionArea >
        <CardContent >
          <Typography className={classes.h1} gutterBottom variant="h5" component="h1">
            {name}
          </Typography>
          <Typography className={classes.contactInfo} variant="body2" color="textSecondary" component="p">
          {`${email} | ${number} | ${location}`}
          </Typography>

          <Typography paragraph>
          {`${description} "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`}
          </Typography>
        
      </CardContent>
    </CardActionArea>
  </Card>

  )
};

export default HostInfoBox;

