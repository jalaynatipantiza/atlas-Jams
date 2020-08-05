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

const HOMEPAGE = "HOMEPAGE";
const PROFILE = "PROFILE";
const SIGNUP = "SIGNUP";

function App() {

  const [page, setPage] = useState(HOMEPAGE)

  const goToHome = () => {
    setPage(HOMEPAGE)
  }
  const goToProfile = () => {
    setPage(PROFILE)
  }

  const goToSignUpPage = () => {
    setPage(SIGNUP)
  }
  
  return (
    <main>
      <section>
        <Navbar goToHome={()=> goToHome()} goToProfile={()=> goToProfile()} goToSignUpPage={() => goToSignUpPage()}/>
      </section>
      <section>
        {page === HOMEPAGE && <HomePage/>}
        {page === PROFILE && <EventsPage/>}
        {page === SIGNUP && <SignupForm/>}
        {/* <HomePage/> */}
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
