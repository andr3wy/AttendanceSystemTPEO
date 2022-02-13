import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBLXqqjw8LZrMwUVv-_uaMvor_BKsqI9fI",
    authDomain: "fullstacktutorial-fd055.firebaseapp.com",
    projectId: "fullstacktutorial-fd055",
    storageBucket: "fullstacktutorial-fd055.appspot.com",
    messagingSenderId: "94562094145",
    appId: "1:94562094145:web:2d6bd23de8e6282d2c0ac0",
    measurementId: "G-2G7C48W43M"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase;