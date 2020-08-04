import React from 'react';
import { storiesOf } from "@storybook/react";
import Profile from "../components/PerformerProfile/PerformerProfile"


const profile = {
  name: "Massimo",  
  email: "massimo123@gmail.com", 
  number: 3062437814, 
  profile_pic: "https://images.unsplash.com/photo-1573470167254-315246dd477d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", 
  description:"I'm a classical piano musician.", 
  username: "massimo78", 
  location: "Calgary", 
  is_performer: true, 
  size: 1 
}

storiesOf("profile", module)
.add("profile", () => <Profile name={profile.name}  email={profile.email}  number={profile.number} profile_pic={profile.profile_pic} description={profile.description} username={profile.username} location={profile.location} is_performer={profile.is_performer} size={profile.size}/>)