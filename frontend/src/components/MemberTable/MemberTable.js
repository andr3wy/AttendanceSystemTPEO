import React, { useState, useEffect, Fragment } from 'react';
import './MemberTable.css';
import { forwardRef } from 'react';
//import Avatar from 'react-avatar';
import Grid from '@material-ui/core/Grid'
//import { useHistory } from "react-router-dom";

import MaterialTable from "material-table";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import axios from 'axios'
import Alert from '@material-ui/lab/Alert';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const api = axios.create({
  baseURL: `https://reqres.in/api`
})



export default function MemberTable() {

  //const history=useHistory();

  var columns = [
    {title: "id", field: "id", hidden: true},
    {title: "Name", field: "full"},
    {title: "Fellowship", field: "fellowship"},
    {title: "Attendance", field: "attendance"}
  ]
  const [data, setData] = useState([]); //all table (firebase database) data

  //for error handling
  const [iserror, setIserror] = useState(false)
  const [errorMessages, setErrorMessages] = useState([])

  useEffect(() => { 
    api.get("/users")
        .then(res => {               
            setData(res.data.data)
         })
         .catch(error=>{
             console.log("Error")
         })
  }, [])

  
  {/*
  async function loadMembers() {
    const request = await fetch("http://localhost:2000/getAll" );
    const response = await request.json();
    const status = await request.status;

    // Success, load all the todos
    if (status == 200) {
      const data=response.data;
      console.log(data);
      let names= [];
      let fellowships= [];
      let attendance= [];
      for (let i= 0; i<data.length; i++)
      {
        temp= data[i];
        console.log(temp);
        if (!temp.status){
          todos.push(temp);
        }
        else{
          done.push(temp);
        }
      }
      setDone(done);
      setToDo(todos);
    }
  }
*/}

  //new,old date just row to be updated
  async function handleRowUpdate(newData, oldData, resolve) {
    //validation
    let errorList = []
    if(newData.name === ""){
      errorList.push("Please enter member name")
    }
    if(newData.fellowship === ""){
      errorList.push("Please enter fellow type")
    }
    //if(newData.email === "" || validateEmail(newData.email) === false){
      if(newData.attendance === "" ){
      errorList.push("Please enter attendance type")
    }
    
    //if there are no errors with row update: all fields complete and valid
    if(errorList.length < 1){
      api.patch("/users/"+newData.id, newData)/*
      const request = await fetch("http://localhost:3000/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description: newData }),
      });
      // Get Status and Response
      const response = await request.json();
      const status = await request.status;*/
      .then(res => {

      //if (status == 200) {
        const dataUpdate = [...data]; //data=all current data in database
        //get the index of the row using its unique id 
        const index = oldData.tableData.id;
        dataUpdate[index] = newData;
        setData([...dataUpdate]);
        resolve()
        setIserror(false)
        setErrorMessages([])
      //}//)
      //.catch(error => {
      /*else
        setErrorMessages(["Update failed! Server error"])
        setIserror(true)
        resolve()
        
      })
    }else{
      setErrorMessages(errorList)
      setIserror(true)
      resolve()
      */

    })
  }
  }

  const handleRowAdd = (newData, resolve) => {
    //validation
    let errorList = []
    if(newData.name === ""){
      errorList.push("Please enter member name")
    }
    if(newData.fellowship === ""){
      errorList.push("Please enter fellow type")
    }
    //if(newData.email === "" || validateEmail(newData.email) === false){
      if(newData.attendance === "" ){
      errorList.push("Please enter attendance type")
    }

    if(errorList.length < 1){ //no error
      api.post("/users", newData)
      .then(res => {
        let dataToAdd = [...data]; //data=all current data in database
        dataToAdd.push(newData);
        setData(dataToAdd);
        resolve()
        setErrorMessages([])
        setIserror(false)
      })
      .catch(error => {
        setErrorMessages(["Cannot add data. Server error!"])
        setIserror(true)
        resolve()
      })
    }else{
      setErrorMessages(errorList)
      setIserror(true)
      resolve()
    }

    
  }

  const handleRowDelete = (oldData, resolve) => {
    
    api.delete("/users/"+oldData.id)
      .then(res => {
        const dataDelete = [...data];
        const index = oldData.tableData.id;
        dataDelete.splice(index, 1);
        setData([...dataDelete]);
        resolve()
      })
      .catch(error => {
        setErrorMessages(["Delete failed! Server error"])
        setIserror(true)
        resolve()
      })
  }


  return (
    <div className="table_container">
      
      <Grid container spacing={1}>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
          <div>
            {iserror && 
              <Alert severity="error">
                  {errorMessages.map((msg, i) => {
                      return <div key={i}>{msg}</div>
                  })}
              </Alert>
            }       
          </div>
            <MaterialTable
              id= "materialTable"
              style={{ width: '80vw',  left: '-30%', top: '-20%'}}
              title="Members"
              columns={columns}
              data={data}
              icons={tableIcons}
              editable={{
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve) => {
                      handleRowUpdate(newData, oldData, resolve);
                      
                  }),
                onRowAdd: (newData) =>
                  new Promise((resolve) => {
                    handleRowAdd(newData, resolve)
                  }),
                onRowDelete: (oldData) =>
                  new Promise((resolve) => {
                    handleRowDelete(oldData, resolve)
                  }),
              }}
            />
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
    </div>
  );
}

