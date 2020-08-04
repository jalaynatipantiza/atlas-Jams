import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

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
  search: {
    position: 'relative',
    borderRadius: "20px",
    backgroundColor: "white",
    paddingLeft: "1em",
    width: '45vw',
    height: "5vh"
  },
  // inputRoot: {
  //   color: 'inherit'
    
  // },
  // inputInput: {
  //   width: '50vw',
  // },

});
const SearchBox = (props) => {
  const classes = useStyles();
  return(
    <section>
    <div className={classes.hero}>
    <div className={classes.search}>
      <div className={classes.searchIcon}>
      
      </div>
      <InputBase
        placeholder="Search your location…"
        classes={{
        root: classes.inputRoot,
        input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
      </div>
    </div>
    {/*this will be removed, just for visual purposes right now*/}
    <div className={classes.div}></div>
    </section>
  )
};

export default SearchBox