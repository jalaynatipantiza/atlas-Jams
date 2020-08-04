import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import useStyles from "./styles/styles";


const Recording = (props) => {
  const classes = useStyles();
  const {name, url, description} = props

  console.log(url);
  const embed = 'embed/'
  var position = 24;
  var newUrl = [url.slice(0, position), embed, url.slice(position + 8, position + 19)].join('');
  console.log(newUrl);

  return(
    <div className={classes.videobox}>
     <iframe src={newUrl} ></iframe>
      <p>{description}</p>
    </div>
  )
};

export default Recording;