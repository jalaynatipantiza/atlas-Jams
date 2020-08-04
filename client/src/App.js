import React from 'react';
import Navbar from './components/Navbar/Navbar';
import SearchBox from './components/Navbar/searchBox';
import SignupForm from './components/SignupForm/SignupForm';
import PerformerForm from './components/PerformerForm/PerformerForm';
import HostForm from './components/HostForm/HostForm';
import EventsForm from './components/EventsForm/EventsForm';
import LoginForm from './components/LoginForm/LoginForm';
import EventsPage from './components/EventsPage/EventsPage';
import './App.css';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import EventsCardList from './components/EventsCards/EventCardList'
import HomePage from './components/HomePage/HomePage';



function App() {
  return (
    <main>
      <section>
        <Navbar />
      </section>
      <section>
        <HomePage/>
        {/* <SignupForm /> */}
        {/* <PerformerForm /> */}
        {/* <HostForm /> */}
        {/* <EventsForm /> */}
        {/* <LoginForm /> */}
        {/* <EventsPage /> */}
      </section>
    </main>
  );
}

export default App;
