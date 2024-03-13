// setting up firebase with our website
    const firebaseApp = firebase.initializeApp(
{
    apiKey: "AIzaSyAviFgEDCBux2tWtjIEX2WZMunqNOF37wM",
  authDomain: "fir-demo-73265.firebaseapp.com",
  databaseURL: "https://fir-demo-73265-default-rtdb.firebaseio.com",
  projectId: "fir-demo-73265",
  storageBucket: "fir-demo-73265.appspot.com",
  messagingSenderId: "910556144231",
  appId: "1:910556144231:web:92285f7822ea00a43c2ac2",
  measurementId: "G-ZMJ5K7MN0V"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed In")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}