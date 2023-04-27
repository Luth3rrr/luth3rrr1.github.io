  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB2q6f49pzNwuRpuuHwbouLXP_sRksH3wg",
    authDomain: "mugi-test-1718d.firebaseapp.com",
    databaseURL: "https://mugi-test-1718d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mugi-test-1718d",
    storageBucket: "mugi-test-1718d.appspot.com",
    messagingSenderId: "533920014849",
    appId: "1:533920014849:web:a5b9eb7dacc566dc79d600",
    measurementId: "G-EKNPGEND7B"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
firebase.initializeApp(config);

// Get current user ID
var userId = firebase.auth().currentUser.uid;

// Get a reference to the Firebase Realtime Database accessCode node
var accessCodeRef = firebase.database().ref('accessCode/' + userId);

// Check if the user has access to premium features
accessCodeRef.once('value').then(function(snapshot) {
  if (snapshot.exists() && snapshot.val() === true) {
    // User has access to premium features, continue to the site
  } else {
    // User does not have access to premium features, redirect to login.html
    alert('Sorry, you do not have premium access.');
    window.location.replace('login.html');
  }
});
