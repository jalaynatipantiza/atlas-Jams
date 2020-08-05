import React from 'react';
import useStyles from "./styles/styles";
import Recording from './recording';


const RecordingList = (props) => {
  const classes = useStyles();
  const recordings = props.recordings

  const recordinglist = recordings.map((recording)=>{
    return <Recording url={recording.url}/>
  })

  return (
    <div className={classes.singleVid}>
      {recordinglist}
    </div>
  )
};


export default RecordingList;