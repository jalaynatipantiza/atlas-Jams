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
import EventsCardList from './components/EventsCards/EventCardList';
import HomePage from './components/HomePage/HomePage';
import { light } from '@material-ui/core/styles/createPalette';
import ProfilePage from './components/PerformerProfile/performerProfilePage';
import HostProfile from './components/HostProfile/HostProfile';
import EventForm from './components/Forms/EventsForm/EventsForm';
import AttendeeProfile from './components/attendeeProfile/attendeeProfile';
import { Helmet } from 'react-helmet';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import theme from './themes/themes';
import PerformerPage from './components/PerformerPage/PerformerPage';



// https://blogreact.com/share-data-between-routes-in-react/
// https://reactjs.org/docs/hooks-reference.html#functional-updates
// https://www.pluralsight.com/guides/how-to-use-react-context-to-share-data-between-components

function App() {

  
  return (
    <Router>
      <ThemeProvider theme={theme}>
      { window.sessionStorage.user_type? <Helmet>
        <title>Atlas Jams || {window.sessionStorage.user_type}</title>
    </Helmet>: null}
      <main>
        <section>
          <Route path={['/']} render={() => <Navbar navTheme={'LIGHT'} />} />
          <Route path={['/signup', '/signup/performer', '/signup/host', '/login', '/performer/:id', '/host/:id', '/create/event', "/attendee/:id", '/events' ]} render={() => <Navbar navTheme={'BLACK'} />} />
        </section>
        <section>
          <Route exact={true} path='/' render={() => <HomePage />} />
          <Route path={
            `/events/:event_id`} render={() => <EventsPage />}/>
          <Route exact={true} path='/signup' component={SignupForm} />
          <Route path='/signup/performer' component={PerformerForm} />
          <Route path='/signup/host' component={HostForm} />
          {/* <EventsForm /> */}
          <Route exact={true} path='/login' component={LoginForm} />
          <Route exactl={true} path='/create/event' render={() => <EventForm />}/>
          <Route exactl={true} path='/performer/:id' render={() => <ProfilePage />}/>
          <Route exactl={true} path='/host/:id' render={() => <HostProfile />}/>
          <Route exactl={true} path='/attendee/:id' render={() => <AttendeeProfile />}/>
          <Route exact={true} path='/all/performers' component={PerformerPage} />
        </section>
      </main>
      <div>

      </div>
      <div style={{marginTop:"100px"}}>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
