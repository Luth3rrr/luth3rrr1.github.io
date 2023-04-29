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

const database = firebase.database();
const accessCodesRef = database.ref('accessCodes');

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in, check if they have a valid access code
    const uid = user.uid;

    accessCodesRef.child(uid).once('value')
      .then(function(snapshot) {
        const accessCodes = snapshot.val();

        if (accessCodes) {
          window.location.href = "index.html"; // redirect to main page
        } else {
          // User does not have a valid access code, redirect to login.html
          window.location.href = "login.html";
        }
      })
      .catch(function(error) {
        // Handle errors here
        console.log(error);
      });
  } else {
    // User is not signed in, redirect to login.html
    window.location.href = "login.html";
  }
});
