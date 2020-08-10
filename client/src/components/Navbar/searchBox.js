import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import useStyles from './styles/styles';


const SearchBox = ({ events, setSearchEvents }) => {

  // console.log('events:', events);

  const classes = useStyles();

  const handleChange = (event) => {
    setSearchEvents(event);
  };

  
  return(
    <section>
    <div className={classes.mainPic}>
      <h1 style={{fontSize:"5vw", fontFamily:"initial", color:"white"}}>
      Atlas Jams
      </h1>
    <div className={classes.searchbar}>
      {/* <div className={classes.searchIcon}>
      
      </div> */}
      <span className={classes.icon}>
        <SearchIcon className={classes.iconSearch} />
      </span>
      <InputBase
        placeholder="Search your location…"
        classes={{
        root: classes.inputRoot,
        input: classes.inputInput,
        }}
        style={{fontSize:"3vh", width:"100%"}}
        inputProps={{ 'aria-label': 'search' }}
        onChange={(event) => handleChange(event.target.value)}
      />
      </div>
    </div>
    {/*this will be removed, just for visual purposes right now*/}
    </section>
  )
};

export default SearchBox