import React, { useState } from 'react';
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
import { light } from '@material-ui/core/styles/createPalette';

const HOMEPAGE = "HOMEPAGE";
const PROFILE = "PROFILE";
const SIGNUP = "SIGNUP";
const PERFORMERFORM = "PERFORMERFORM";
const HOSTFORM = "HOSTFORM";
const LOGIN = "LOGIN";

//nav state
const LIGHT = 'LIGHT'
const DARK = 'DARK'

function App() {

  const [page, setPage] = useState(HOMEPAGE)
  const [navTheme, setNavTheme] = useState(LIGHT)

  const goToHome = () => {  
    setPage(HOMEPAGE)
    setNavTheme(light)
  }
  const goToProfile = () => {
    setPage(PROFILE)
    setNavTheme(light)
  }

  const goToSignUpPage = () => {
    setPage(SIGNUP)
    setNavTheme(DARK)
  }
  const goToPerformerForm = () => {
    setPage(PERFORMERFORM);
    setNavTheme(DARK)
  };

  const goToHostForm = () => {
    setPage(HOSTFORM);
    setNavTheme(DARK)
  };

  const goToLogIn = () => {
    setPage(LOGIN);
    setNavTheme(DARK)
  }
  
  return (
    <main>
      <section>
        <Navbar 
          goToHome={()=> goToHome()} 
          goToProfile={()=> goToProfile()} 
          goToSignUpPage={() => goToSignUpPage()} 
          goToPerformerForm={() => goToPerformerForm()} 
          goToHostForm={() => goToHostForm()} 
          goToLogIn={() => goToLogIn()}
          navTheme={navTheme}
        />
      </section>
      <section>
        {page === HOMEPAGE && <HomePage/>}
        {page === PROFILE && <EventsPage/>}
        {page === SIGNUP && <SignupForm/>}
        {/* <HomePage/> */}
        {/* <SignupForm /> */}
        {page === PERFORMERFORM && <PerformerForm />}
        {page === HOSTFORM && <HostForm />}
        {/* <EventsForm /> */}
        {page === LOGIN && <LoginForm />}
        {/* <EventsPage /> */}
      </section>
    </main>
  );
}


export default App;
