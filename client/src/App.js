import React from 'react';
import Navbar from './components/Navbar/Navbar';
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
        
      </section>
    </main>
  );
}

export default App;
