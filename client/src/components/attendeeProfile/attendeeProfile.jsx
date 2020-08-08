import React from 'react'
import ReactCalendar from './calendar'
import Container from '@material-ui/core/Container';


export default function AttendeeProfile(props){
  return (
    <React.Fragment>
      <Container style={{marginTop:"7em", display:"flex", justifyContent:"flex-end"}}>
        <ReactCalendar/>
      </Container>
    </React.Fragment>
  )
}