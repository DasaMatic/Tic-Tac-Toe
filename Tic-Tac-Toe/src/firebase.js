import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
   
        apiKey: "AIzaSyCuJLP3ZQBSHc5JXBQI3l_zlHPeX1h7xF8",
        authDomain: "reactdomaci-77311.firebaseapp.com",
        projectId: "reactdomaci-77311",
        storageBucket: "reactdomaci-77311.appspot.com",
        messagingSenderId: "650934172562",
        appId: "1:650934172562:web:4bb2051fe92d5f7b5edf4b"
  

})

var db = firebaseApp.firestore();

export{db};
