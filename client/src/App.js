import React from 'react';
import Navbar from './components/Navbar/Navbar';
import SignupForm from './components/SignupForm/SignupForm';
import PerformerForm from './components/PerformerForm/PerformerForm';
import HostForm from './components/HostForm/HostForm';
import EventsForm from './components/EventsForm/EventsForm';
import './App.css';
import axios from 'axios'

function App() {
  axios.get("/users")
    .then(res => console.log(res.data))
  return (
    <main>
      <section>
        <Navbar />
      </section>
      <section>
        {/* <SignupForm /> */}
        {/* <PerformerForm /> */}
        {/* <HostForm /> */}
        {/* <EventsForm /> */}
      </section>
    </main>
  );
}

export default App;
