import "./EditMembers.css";

//import Tables from "../../components/Tables.js";
//import KitchenSinkTable from "../../components/KitchenSinkTable.js";
import FinalTable from "../../components/FinalTable/FinalTable.js";
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
       <div id="member_container">
        
        <div id= "center_member_container">
         
          {/*<div id="member_header_container">*/}
             {/*<h2 id= "Member_Header"> Members</h2>
           
            <button id="member_header__button"> Add</button>
            <button id="member_header__button"> Sort</button>
            <button id="member_header__button"> Filter</button>
          </div>
          */}
             {/*}
            <div className="membertopbarContainer">
              
              <div className="topbarLeft">
                <span >Name</span>
                <input
                placeholder="Member Name"
                ></input>
              </div>
              
              <div className="topbarSecond">
                <span> Fellowship</span>
                <input
                placeholder="Fellowship Type"
                ></input>
                </div>

                <div className="topbarCenter">
                <span> Attendance</span>
                <input
                placeholder="Attendance"
                ></input>
                </div>


              <div className= "topBarRight">
                <button id= "add_member"> Add Member</button>
              </div>

              
             

             </div>
             */}
              <FinalTable />
      
        </div>
         
        
                    
        </div>
    </Fragment>
  )
}
