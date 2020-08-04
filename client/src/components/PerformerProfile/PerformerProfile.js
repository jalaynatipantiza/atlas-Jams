import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import useStyles from "./styles/styles";


const Profile = (props) => {
  const classes = useStyles();
  const {name, email, number, profile_pic, description, username, location, is_performer, size} = props

  return(
    <Card>
      <CardActionArea >
        <CardMedia
           className={classes.media}
           image={profile_pic}
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="h1">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {username}
          {<br></br>}
          {`Contact me: ${email} or ${number} `}
          {<br></br>}
          {` Located in: ${location}`}
          {<br></br>}
          {`Size: ${size}`}
          </Typography>

        <Box className={classes.box}>
          <Typography paragraph>
          {`${description} "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.sunt in culpa qui officia deserunt mollit anim id est laborum.sunt in culpa qui officia deserunt mollit anim id est laborum."`}
          </Typography>
        </Box>

      </CardContent>
    </CardActionArea>
  </Card>
  )
};

export default Profile;
