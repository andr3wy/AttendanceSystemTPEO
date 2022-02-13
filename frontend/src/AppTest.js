import { QuerySnapshot } from "@firebase/firestore";
import React, {useState, useEffect} from "react";
import firebase from "./firebase";
//import './App.css';

function App() {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading]= useState(false);

  const ref= firebase.firestore().collection("schools");
  function getSchools(){
    setLoading(true);
    ref.onSnapshot((QuerySnapshot)=> {
      const items= [];
      QuerySnapshot.forEach((doc)=> {
        items.push(doc.data());
      });
      setSchools(items);
      setLoading(false);
    });
  }

  useEffect(()=> {
    getSchools();
  }, []);
  
  if(loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1> Schools</h1>
      {schools.map((school) => (
        <div key= {school.id}>
          <h2>{school.title}</h2>
          <p>{school.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
