import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  mainPic: {
    backgroundImage:  "url('https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')",
    height: "50%",
    backgroundPosition: "center",
    backgroundSize: "cover"
  },
  contactInfo: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "15px",
    height: "25px"
  },
  descriptionBox: {
    height: "150px",
    overflow: "auto"  
  },
  h1: {
    display: "flex",
    justifyContent: "center",
    font: "initial",
    fontSize: "xxx-large"
  },
  events: {
    display: "flex",
    justifyContent: "center",
    flexFlow: "row wrap",
    
  },
  eventBox:{
    width: "79vw",
    overflow: "auto",
    display: "flex",
    alignItems: "center",
    font: "initial"
  },

  buttonEvent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  addButton: {
    backgroundColor: "chocolate",
    color: "white",
    marginTop: "10px"
  }
});

export default useStyles;