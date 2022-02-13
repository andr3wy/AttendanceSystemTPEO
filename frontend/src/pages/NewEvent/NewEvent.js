import "./NewEvent.css";
import { useEffect, useState, Fragment } from "react";
//import { useNavigate } from "react-router-dom";


export default function NewEvent(props) {
  console.log('in new event');
  //const navigate = useNavigate();
  //done, todo states
  //console.log("in home function");
  const [allEvents, setallEvents] = useState([]);
  const [inputEvent, setinputEvent]= useState('');

    function addNewEvent(){
        if (inputEvent & !(allEvents.includes(inputEvent))){
            setallEvents(allEvents.concat(inputEvent));
            setinputEvent("");}
    }

    function deleteEvent(){
        if (inputEvent & (allEvents.includes(inputEvent))){
            var index= allEvents.indexOf(inputEvent);
            setallEvents(allEvents.splice(index,1));
        }
    }

  return (
    <Fragment>
      <div id= "container">
        <h1> Hello </h1>
        <div id="input_div">
                <input
                    placeholder="Add an Event"
                    id= "event_add_bar"
                    value={inputEvent}
                    onChange={(event) => addNewEvent(event.target.value)}
                ></input>
                <input
                    placeholder="Delete an Event"
                    id= "event_del_bar"
                    value={inputEvent}
                    onChange={(event) => deleteEvent(event.target.value)}
                ></input>
        </div>
      </div>
    </Fragment>
    //h
  )
}
