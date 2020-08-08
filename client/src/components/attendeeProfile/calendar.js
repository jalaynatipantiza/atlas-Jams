import  React, { useState} from "react";
import { render } from "react-dom";
import Calendar from 'react-calendar';


export default function ReactCalendar () {

  const [ date, setDate] = useState(new Date())

  const onChange = date => {
    setDate(date);
  }
  return (
    <div style={{width: "40vw", fontFamily: "initial", lineHeight: "2em"}} >
      <Calendar 
      onChange={onChange} 
      value={date}/>
      {date.toISOString().slice(0,10)}
      
    </div>
  )
};

render(<ReactCalendar />, document.querySelector("#root"));