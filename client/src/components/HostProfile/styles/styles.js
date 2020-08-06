import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  mainPic: {
    backgroundImage:  "url('https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')",
    height: "500px",
    width: "350px",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  contactInfo: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  h1: {
    display: "flex",
    justifyContent: "center",
    font: "initial",
    fontSize: "xxx-large"
  }

});

export default useStyles;