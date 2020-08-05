import React from 'react';
import useStyles from "./styles/styles";


const Recording = (props) => {
  const classes = useStyles();
  const {url} = props
  const embed = 'embed/'
  let position = 24;
  let newUrl = [url.slice(0, position), embed, url.slice(position + 8, position + 19)].join('');

  return (
      <div>
      <iframe src={newUrl} ></iframe>
      </div>
  )
};


export default Recording;