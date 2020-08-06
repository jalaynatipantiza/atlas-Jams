import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SearchBox from './components/Navbar/searchBox';
import SignupForm from './components/Forms/SignupForm/SignupForm';
import PerformerForm from './components/Forms/PerformerForm/PerformerForm';
import HostForm from './components/Forms/HostForm/HostForm';
import EventsForm from './components/Forms/EventsForm/EventsForm';
import LoginForm from './components/Forms/LoginForm/LoginForm';
import EventsPage from './components/EventsPage/EventsPage';
import './App.css';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import EventsCardList from './components/EventsCards/EventCardList'
import HomePage from './components/HomePage/HomePage';
import { light } from '@material-ui/core/styles/createPalette';
import ProfilePage from './components/PerformerProfile/performerProfilePage'
import HostProfile from './components/HostProfile/HostProfile';

// const [state, setState] = useState({
//   events: [],
//   performers: [],
//   host: {},
// });

function App() {

  // const [events, setEvents] = useState([]);
  const [event, setEvent] = useState({});

  // https://blogreact.com/share-data-between-routes-in-react/
  // https://reactjs.org/docs/hooks-reference.html#functional-updates
  // https://www.pluralsight.com/guides/how-to-use-react-context-to-share-data-between-components
 
  // useEffect(()=>{
  //   window.scrollTo(0, 0)
  //   axios.get("/all/events")
  //   .then(res => {
  //     console.log('res.data', res.data)
  //     setEvents(res.data)
  //   })
  // }, [])

  // console.log('events:', events);

  console.log('event', event);
  
  return (
    <Router>
      <main>
        <section>
          <Route path={['/', '/events']} render={() => <Navbar navTheme={'LIGHT'} />} />
          <Route path={['/signup', '/signup/performer', '/signup/host', '/login']} render={() => <Navbar navTheme={'BLACK'} />} />
        </section>
        <section>
          <Route exact={true} path='/' render={() => <HomePage setEvent={setEvent} />} />
          <Route path={
            `/events/${event}`} render={() => <EventsPage event={event} />}/>
          <Route exact={true} path='/signup' component={SignupForm} />
          <Route path='/signup/performer' component={PerformerForm} />
          <Route path='/signup/host' component={HostForm} />
          {/* <EventsForm /> */}
          <Route exact={true} path='/login' component={LoginForm} />
          {/* {page === LOGIN && <LoginForm />} */}
          {/* <EventsPage /> */}
          <Route exactl={true} path='/performer/profile' component={ProfilePage}/>
          <Route exactl={true} path='/host/profile' component={HostProfile}/>
        </section>
      </main>
    </Router>
  );
}

export default App;
