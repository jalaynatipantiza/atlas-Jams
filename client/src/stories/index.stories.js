import React, { Fragment } from 'react'

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import EventsCard from "../components/EventsCards/EventsCards"
import EventsCardList from '../components/EventsCards/EventCardList';

const event = {
  time: "4:00",
  name: "Jazz fest",
  description: "the funkiest most jazziest event youll ever go to. once a year saskatoon hosts the best of the best jazz festival. The jazz community in saskatoon is very enthusiastic. But we welcome more then just jazz performers. last year we even had many different genres perform at this fun event.",
  date: "2020-10-23",
  url: "https://images.unsplash.com/photo-1483842293911-b0f670601cdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2024&q=80"
}


const events = [
    {
    time: "4:00",
    name: "Jazz fest",
    description: "the funkiest most jazziest event youll ever go to. once a year saskatoon hosts the best of the best jazz festival. The jazz community in saskatoon is very enthusiastic. But we welcome more then just jazz performers. last year we even had many different genres perform at this fun event.",
    date: "2020-10-23",
    url: "https://images.unsplash.com/photo-1483842293911-b0f670601cdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2024&q=80"
  },
  {
    time: "4:00",
    name: "Jazz fest",
    description: "the funkiest most jazziest event youll ever go to. once a year saskatoon hosts the best of the best jazz festival. The jazz community in saskatoon is very enthusiastic. But we welcome more then just jazz performers. last year we even had many different genres perform at this fun event.",
    date: "2020-10-23",
    url: "https://images.unsplash.com/photo-1483842293911-b0f670601cdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2024&q=80"
  },
  {
    time: "4:00",
    name: "Jazz fest",
    description: "the funkiest most jazziest event youll ever go to. once a year saskatoon hosts the best of the best jazz festival. The jazz community in saskatoon is very enthusiastic. But we welcome more then just jazz performers. last year we even had many different genres perform at this fun event.",
    date: "2020-10-23",
    url: "https://images.unsplash.com/photo-1483842293911-b0f670601cdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2024&q=80"
  },
  {
    time: "4:00",
    name: "Jazz fest",
    description: "the funkiest most jazziest event youll ever go to. once a year saskatoon hosts the best of the best jazz festival. The jazz community in saskatoon is very enthusiastic. But we welcome more then just jazz performers. last year we even had many different genres perform at this fun event.",
    date: "2020-10-23",
    url: "https://images.unsplash.com/photo-1483842293911-b0f670601cdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2024&q=80"
  }
  // date: "2020-10-02",
  // time: "12:00",
  // am: false,
  // name: "Jazz Fest",
  // price: 15.00,
  // description: "Join us at our annual jazz festival and show case your jazzy tunes",
  // duration: "180",
  // attendants: 15
]

storiesOf("Cards", module)
.addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Event", () => <EventsCard description={event.description} name={event.name} time={event.time} date={event.date} url={event.url} />)
  .add("multiple events!", () => <EventsCardList events={events}/>)


 