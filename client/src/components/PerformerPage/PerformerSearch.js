import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import useStyles from './styles/styles';
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './styles/styles';
// import "./styles.scss";


const PerformerSearch = ({ performers, setSearchPerformers }) => {

  // console.log('events:', events);

  const classes = useStyles();

  const handleChange = (event) => {
    // console.log(event);
    setSearchPerformers(event);
  };
  const scrollDown = ()=> {
    window.scroll({
      top: 757,
      left: 0,
      behavior: 'smooth'
    });
  }

  return(
    <section>
      <div className={classes.mainPic}>
        <h1 style={{fontSize:"5vw", fontFamily:"initial", color:"white"}}>
        Performers
        </h1>
      <div className={classes.searchbar}>
        {/* <div className={classes.searchIcon}>
        
      </div> */}
        <span className={classes.icon}>
          <SearchIcon className={classes.iconSearch} />
        </span>
        <InputBase
          placeholder="Search By Genre"
          classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
          }}
          style={{fontSize:"3vh", width:"100%"}}
          inputProps={{ 'aria-label': 'search' }}
          onChange={(event) => handleChange(event.target.value)}
        />
        </div>
          <div onClick={scrollDown} style={{position: "absolute",bottom: '0',right:'0', margin:"20px", height:"100px"}} >
          <Icon name='angle double down' className="fas" size="huge" inverted={true} />
          </div>



      </div>
      {/*this will be removed, just for visual purposes right now*/}
    </section>
  )
};

export default PerformerSearch;