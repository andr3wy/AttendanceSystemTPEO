

const express = require("express");
const cors = require("cors");
const admin = require("./firebase/cred.js");
const dotenv = require("dotenv").config();


const app = express();
const port = process.env.PORT;

const database = admin.firestore();



// Middleware
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

app.post("/checkin", async(request, response) => {
  let name = request.body.name;
  let type = request.body.type;

  //time is done using Date.now()  - type this exactly in javascript frontend, returns exact time from 1970 in milliseconds
  let time = request.body.checkin;

  let temp = await database.collection('roster').where('name', '==', name).get();
  let allMeetings = await database.collection('meetings').where('type', '==', type).get();
  let correctMeeting = undefined;
  //use 
  let validTime = false;
  allMeetings.forEach((doc) => {
    let meetingdata = doc.data();
    
    if(meetingdata.start.toMillis() <= time && meetingdata.end.toMillis() >= time && type === meetingdata.type) {
      
      validTime = true;
      correctMeeting = doc;
    }

  })

  if(!validTime) {
    return response.json({msg: "invalid time"});
  } else if(temp.empty) {
    return response.json({msg: "name is not valid"});
  } else {
    temp.forEach((doc) => {
      let docData = doc.data();
      if(type === "pm") {
        docData.pm = docData.pm + 1;
      }
      if(type === "gm") {
        docData.gm = docData.gm + 1;
      }
      if(type === "em") {
        docData.em = docData.em + 1;
      }
      if(type === "dm") {
        docData.dm = docData.dm + 1;
      }

      let meetingdata = correctMeeting.data();

      //TODO: add boolean to determine if already checked in
      
      if(!meetingdata.people.includes(docData.name)) {
        meetingdata.people.push(docData.name);
      }


      correctMeeting.ref.set(meetingdata);
      doc.ref.set(docData);

      
    });

    return response.json({msg: "name is valid"});
  }
});







