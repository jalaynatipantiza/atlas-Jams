import React from 'react';
import { storiesOf } from "@storybook/react";
import Profile from "../components/PerformerProfile/PerformerProfile"
import Recording from "../components/PerformerProfile/recording"


const profile = {
  name: "Massimo",  
  email: "massimo123@gmail.com", 
  number: 3062437814, 
  profile_pic: "https://images.unsplash.com/photo-1573470167254-315246dd477d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", 
  description:"I'm a classical piano musician.", 
  location: "Calgary", 
  is_performer: true, 
  size: 1,
  recordings: [
    {
      name: "Float",
      url: "https://www.youtube.com/watch?v=Nl9LrqV_HG8&list=RDNl9LrqV_HG8&start_radio=1",
      description: "Chill instrumental"
    },
    {
      name: "Float",
      url: "https://www.youtube.com/watch?v=Nl9LrqV_HG8&list=RDNl9LrqV_HG8&start_radio=1",
      description: "Chill instrumental"
    }
  ]
}

const recording = {
  name: "Float",
  url: "https://www.youtube.com/watch?v=Nl9LrqV_HG8&list=RDNl9LrqV_HG8&start_radio=1",
  description: "Chill instrumental"
}

storiesOf("profile", module)
.add("profile", () => <Profile recordings={profile.recordings} name={profile.name}  email={profile.email}  number={profile.number} profile_pic={profile.profile_pic} description={profile.description} location={profile.location} is_performer={profile.is_performer} size={profile.size}/>)
.add("recording", () => <Recording name={recording.name} url={recording.url} description={recording.description}/>)