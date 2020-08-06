import React, { useState } from 'react';
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


const HOMEPAGE = "HOMEPAGE";
const PROFILE = "PROFILE";
const SIGNUP = "SIGNUP";
const PERFORMERFORM = "PERFORMERFORM";
const HOSTFORM = "HOSTFORM";
const LOGIN = "LOGIN";

//nav state
const LIGHT = 'LIGHT'
const DARK = 'DARK'
const BLACK = 'BLACK'

function App() {

  const [page, setPage] = useState(HOMEPAGE)
  const [navTheme, setNavTheme] = useState(LIGHT)

  const goToHome = () => {  
    setPage(HOMEPAGE);
    setNavTheme(LIGHT);
  }
  const goToProfile = () => {
    setPage(PROFILE)
    setNavTheme(LIGHT);
  }

  const goToSignUpPage = () => {
    setPage(SIGNUP);
    setNavTheme(BLACK);
  }
  const goToPerformerForm = () => {
    setPage(PERFORMERFORM);
    setNavTheme(BLACK);
  };

  const goToHostForm = () => {
    setPage(HOSTFORM);
    setNavTheme(BLACK)
  };

  const goToLogIn = () => {
    setPage(LOGIN);
    setNavTheme(BLACK);
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
        {page === PERFORMERFORM && <PerformerForm />}
        {page === HOSTFORM && <HostForm />}
        {/* <EventsForm /> */}
        {page === LOGIN && <LoginForm />}
        {/* <EventsPage /> */}
         {/* <ProfilePage/> */}
         {/* <HostProfile/> */}
      </section>
    </main>
  );
}


export default App;
