import "./NewEvent.css";
import { useEffect, useState, Fragment } from "react";
//import { useNavigate } from "react-router-dom";
import FinalTable from "../../components/FinalTable/FinalTable.js";
import { useHistory } from "react-router-dom";
import "../TestTable.js";

export default function NewEvent(props) {
  console.log('in new event');
  const history = useHistory();
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
      <div id="new_event_container">
        <div id= "center_events_container">
            <h2 id= "New_Event_Header"> Events Manager</h2>

            <button id = "function_button" onClick={() => 
                      //navigate('/AdminCheckIn')
                      history.push('/TestTable')
                      }>Dashboard</button> 
            
            {/*<div className="eventTopbarContainer">
              <div className="eventTopbarLeft">
                <span className="name">Name</span>
                <input
                placeholder="New Event Name"
                ></input>


              </div>
              <div className="eventTopbarCenter">
                <span> Type</span>
                <input
                placeholder="New Event Type"
                ></input>
                </div>
              <div className= "eventTopbarRight">
                <span> #Members </span>
                {/*<button id= "add_event"> Add</button>
                <input
                placeholder="# Members"
                ></input>
              </div>
          </div>
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
  </div>*/}

            <FinalTable/>
        </div>
        </div>
    </Fragment>
    //h
  )
}
