import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import useStyles from "./styles/styles";
import Link from '@material-ui/core/Link';

const Profile = (props) => {
  const classes = useStyles();
  const {name, email, number, description, location, size} = props.user


  const preventDefault = (event) => event.preventDefault();
  return(
    <Card className={classes.profileCard}>
      <CardActionArea >
        <CardContent >
          <Typography gutterBottom variant="h5" component="h1">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {<br></br>}
          <Link href="gmail.com" onClick={preventDefault} color="inherit">
          {email}
          </Link>
          {<br></br>}
          {number}
          {<br></br>}
          {` Located in: ${location}`}
          {<br></br>}
          {`Size: ${size}`}
          </Typography>

        <Box className={classes.box}>
          <Typography paragraph>
          {description}
          </Typography>
        </Box>
      </CardContent>
    </CardActionArea>
  </Card>

  )
};

export default Profile;
