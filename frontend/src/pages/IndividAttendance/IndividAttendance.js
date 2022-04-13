//import "./AdminCheckIn.css";
import "./IndividAttendance.css";
import { useEffect, useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
//import {useRoute} from '@react-navigation/native';
//import newEvent from '/newEvent/newEvent.js';
import { useHistory } from "react-router-dom";

// import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function IndividAttendance(props) {
  //const navigate= useNavigate();
  const history = useHistory();
  /*const route = useRoute();
  console.log(route.name);*/
    const [meetings, setMeetings] = useState({});
    async function handleData(data) {
        console.log(data);
        const request = await fetch("http://localhost:4000/statsuser", {
            method: "POST",
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        const result = await request.json();
        const status = await request.status;

        let temp = {};
        let product = 0;
        let general = 0;
        let engineering = 0;
        let design = 0;
        Object.values(result).forEach((object) => {
            if(object === "Product") {
                product += 1;
            }
            if(object === "General") {
                general += 1;
            }
            if(object === "Engineering") {
                engineering += 1;
            }
            if(object === "Design") {
                design += 1;
            }
            console.log("temmmmpp");
        })
        temp.Product = product;
        temp.General = general;
        temp.Engineering = engineering;
        temp.Design = design;


        setMeetings(temp)
        console.log(temp);



    }
    const location = useLocation()
    console.log(location.state.id);
    useEffect(() => {
        handleData({id:location.state.id});
    })



  return (

    <Fragment>
      <div id="page_container">
        <div id= "containerrrrrrr">
            <h2 id= "Admin_Header"> Member Information</h2>
            <div id= "attendance_info">
                <h3 id= "attendance_header"> Attendance</h3>
                <div>
                    Product: {meetings.Product}
                </div>
                <div>
                    Product: {meetings.Product}
                </div>
                <div>
                    Product: {meetings.Product}
                </div>
                <div>
                    Product: {meetings.Product}
                </div>
            </div>
        </div>
        </div>
    </Fragment>
  )
}
