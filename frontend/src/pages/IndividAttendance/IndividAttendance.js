//import "./AdminCheckIn.css";
import "./IndividAttendance.css";
import { useEffect, useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
//import {useRoute} from '@react-navigation/native';
//import newEvent from '/newEvent/newEvent.js';
import { useHistory } from "react-router-dom";

export default function IndividAttendance(props) {
  //const navigate= useNavigate();
  const history = useHistory();
  /*const route = useRoute();
  console.log(route.name);*/


  return (
    <Fragment>
      <div id="page_container">
        <div id= "containerrrrrrr">
            <h2 id= "Admin_Header"> Member Information</h2>
            <div id= "attendance_info">
                <h3 id= "attendance_header"> Attendance</h3>
            </div>
        </div>
        </div>
    </Fragment>
  )
}
