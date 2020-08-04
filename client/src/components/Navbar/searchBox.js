import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  hero: {
    backgroundImage:  "url('https://images.unsplash.com/photo-1562763563-49cabb8f45ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')",
    height: "100vh",
    width: "100vw",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  div: {
    height: "100vh",
    width: "100vw"
  },

});
const SearchBox = (props) => {
  const classes = useStyles();
  return(
    <section>
    <div className={classes.hero}></div>
    {/*this will be removed, just for visual purposes right now*/}
    <div className={classes.div}></div>
    </section>
  )
};

export default SearchBox