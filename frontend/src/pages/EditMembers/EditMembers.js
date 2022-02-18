import "./EditMembers.css";
import { useEffect, useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
//import {useRoute} from '@react-navigation/native';
//import newEvent from '/newEvent/newEvent.js';
import { useHistory } from "react-router-dom";

export default function EditMembers(props) {
  const history = useHistory();

  const [members, setMembers] = useState([]);

  return (
    <Fragment>
      <div id="admin_container">
        <div id= "main_right_container">
            <h2 id= "Member_Header"> Members</h2>
            <div className="topbarContainer">
              <div className="topbarLeft">
                <span className="name">Name</span>
              </div>
              <div className="topbarCenter">
                <span> Fellowship      Attendance</span>
                </div>
              <div className= "topBarRight">
                <button id= "add_member"> Add Member</button>
              </div>

      </div>
      
        </div>
        <div id= "sidebar">
            <span id = "sidebar_header"> TPEO Admin</span>
            <div id= "side_bar_buttons">
                    <button id = "function_button" onClick={() => 
                      //navigate('/AdminCheckIn')
                      history.push('/AdminCheckIn')
                      }>Dashboard</button> 
                    <button id = "function_button" onClick={() => 
                      //navigate('/AdminCheckIn')
                      history.push('/AdminCheckIn')
                      }>Events</button>
                    <button id = "function_button" onClick={() => 
                      //navigate('/AdminCheckIn')
                      history.push('/AdminCheckIn')
                      }>Members</button>
            </div>
        </div>
        </div>
    </Fragment>
  )
}
