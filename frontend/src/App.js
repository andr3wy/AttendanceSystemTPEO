//import "./style.css";
import React from "react";
//import { Routes, Route } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import AdminCheckIn from "./pages/AdminCheckIn/AdminCheckIn.js";
import NewEvent from "./pages/NewEvent/NewEvent.js";
import EditMembers from "./pages/EditMembers/EditMembers.js";
import IndividAttendance from "./pages/IndividAttendance/IndividAttendance.js";
import "@fontsource/almarai";//

export default function App() {
  localStorage.removeItem("@token");
  //console.log('hi');
  return (
    //<div className="global-container">
      //<div className="content-container">
      <Switch>
          {/* The Switch decides which component to show based on the current URL.*/}
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path='/AdminCheckIn'>
            <AdminCheckIn />
          </Route>
          <Route exact path='/NewEvent'>
            <NewEvent/>
          </Route>
          <Route exact path='/EditMembers'>
            <EditMembers/>
          </Route>
          <Route exact path='/IndividAttendance'>
            <IndividAttendance/>
          </Route>
        </Switch>

      //</div>
    //</div>
  );
}
