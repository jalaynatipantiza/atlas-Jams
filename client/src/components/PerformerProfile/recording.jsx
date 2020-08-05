import React from 'react';
import useStyles from "./styles/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const Recording = (props) => {
  const classes = useStyles();
  const {url} = props
  const embed = 'embed/'
  let position = 24;
  let newUrl = [url.slice(0, position), embed, url.slice(position + 8, position + 19)].join('');

  return (
    <Card className={classes.root} style={{margin:"10px"}}>
    <CardActionArea >
      <CardContent >
        <Typography className={classes.videobox}>
        <iframe src={newUrl} ></iframe>
        <iframe src={newUrl} ></iframe>
        <iframe src={newUrl} ></iframe>
        <iframe src={newUrl} ></iframe>
        <iframe src={newUrl} ></iframe>
        <iframe src={newUrl} ></iframe>
        <iframe src={newUrl} ></iframe>
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
};

//const recordinglist = recordings.map((recording)=>{
//   return <Recording url={recording.url}/>
// })
// <Box className={classes.box}>
// {recordinglist}
// </Box>

export default Recording;