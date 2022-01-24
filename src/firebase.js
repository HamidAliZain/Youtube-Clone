import firebase from "firebase/app"
import auth from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDbCcPOzzODn2cCXBwew6UskQjp21W3P6Y",
  authDomain: "clone-227c1.firebaseapp.com",
  projectId: "clone-227c1",
  storageBucket: "clone-227c1.appspot.com",
  messagingSenderId: "381844484076",
  appId: "1:381844484076:web:62dbfa65d8dc5a2bfe1ac9",
  measurementId: "G-CNSKVD8V7D"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()