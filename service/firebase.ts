import firebase from "firebase/app";
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAgh4K-S4dvBZI1Zp0JUSgKLLbKVIA2vi8",
    authDomain: "agendanext-5a886.firebaseapp.com",
    projectId: "agendanext-5a886",
    storageBucket: "agendanext-5a886.appspot.com",
    messagingSenderId: "909103306708",
    appId: "1:909103306708:web:41dc2a400ed29b3f6ba841"
  };

  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig)
  } else{
      firebase.app()
  }

  const database = firebase.database()
  
  export{database, firebase}