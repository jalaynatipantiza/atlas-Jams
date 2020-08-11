import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBox from '../Navbar/searchBox';
import PerformerSearch from './PerformerSearch';
import PerformerCard from '../EventsPage/PerformerCard';
import EventsCardList from '../EventsCards/EventCardList';
import '../../App.css';
import { Grid } from '@material-ui/core';
import useStyles from './styles/styles';


function PerformerPage() {


  const [searchPerformers, setSearchPerformers] = useState([]);

  const [performers, setPerformers] = useState([]);

  console.log(performers);

  useEffect(()=>{
    window.scrollTo(0, 0);

    if (searchPerformers.length > 0) {

      axios({
        method: 'get',
        url: '/all/performers/search',
        params: {
          genre: searchPerformers,
        },
      })
      .then(res => {
        console.log('res.data:', res.data);
        setPerformers(res.data);
      });

    } else {

      axios({
        method: 'get',
        url: '/all/performers',
      })
      .then(res => {
        console.log('res.data', res.data);
        setPerformers(res.data);
      });
    };

  }, [searchPerformers]);

  window.sessionStorage.navTheme = 'LIGHT';

  const classes = useStyles();

  return (
    <React.Fragment>
      <PerformerSearch performers={performers} setSearchPerformers={setSearchPerformers} />
      <p style={{display:"flex", justifyContent:"center", marginTop:"3%"}}>PERFORMERS</p>
      <div style={{ width: "100vw", display:"flex", justifyContent:"center"}}>
        <Grid 
          container
          spacing={2}
          className={classes.container}
        >
        {
          performers.length > 0 && performers.map((performer)=><PerformerCard profile_pic={performer.performer.profile_pic} name={performer.performer.name} description={performer.performer.description} id={performer.performer.id} my_genres={performer.genre} key={performer.performer.id} confirmed={performer.accepted} />)
        }
        </Grid>
      </div>
    </React.Fragment> 
  );
};

export default PerformerPage;
