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
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    const uid = user.uid;
    const accessCodesRef = firebase.database().ref('accessCodes/' + uid);

    // Check if the user has a valid access code
    accessCodesRef.once('value')
      .then(function(snapshot) {
        const accessCodes = snapshot.val();

        if (accessCodes) {
          // User has a valid access code, display welcome message
          const userGreeting = document.getElementById('userGreeting');
          userGreeting.textContent = `Welcome, ${user.displayName}!`;
        } else {
          // User does not have a valid access code, redirect to login page
          if (window.location.pathname !== '/login.html') {
            window.location.href = "/login.html";
          }
        }
      })
      .catch(function(error) {
        // Handle errors here
        console.log(error);
      });
  } else {
    // User is not signed in, redirect to login page
    if (window.location.pathname !== '/login.html') {
      window.location.href = "/login.html";
    }
  }
});
