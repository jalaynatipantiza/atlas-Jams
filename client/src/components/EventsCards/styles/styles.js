import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  card: {
    display: "flex", 
    justifyContent:"center", 
    flexDirection:"row", 
    flexWrap:"wrap"
  },
  root: {
    width: "30vw",
    minWidth: '200px'
  },
  media: {
    height: "15vw",
  },
  cardAction: {
    display: "flex",
     justifyContent: "center"
  }
  
});

export default useStyles;