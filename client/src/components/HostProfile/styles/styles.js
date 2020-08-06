import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles( (theme) => ({
  mainPic: {
    backgroundImage:  "url('https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')",
    width: "100%",
    height: "40%",
    backgroundPosition: "center",
    backgroundSize: "cover"
  },
  contactInfo: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
    height: "20px"
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
    height: "110vh",
    overflow: "auto",
    flexDirection: "column",
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
}));

export default useStyles;