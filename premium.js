
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

firebase.initializeApp(firebaseConfig);

// Wait for the user to sign in
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var userId = user.uid;
    var accessCodeRef = firebase.database().ref('accessCode/' + userId);

    accessCodeRef.once('value').then(function(snapshot) {
      if (snapshot.exists() && snapshot.val() === true) {
        // User has access to premium features, continue to the site
      } else {
        // User does not have access to premium features, redirect to login.html
        alert('Sorry, you do not have premium access.');
        window.location.replace('login.html');
      }
    });
  } else {
    // User is not signed in, do something else
  }
});
