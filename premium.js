// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2q6f49pzNwuRpuuHwbouLXP_sRksH3wg",
  authDomain: "mugi-test-1718d.firebaseapp.com",
  projectId: "mugi-test-1718d",
  storageBucket: "mugi-test-1718d.appspot.com",
  messagingSenderId: "533920014849",
  appId: "1:533920014849:web:9dbcaa465603232379d600",
  measurementId: "G-TXEMY7V1BJ",
  databaseURL:
    "https://mugi-test-1718d-default-rtdb.europe-west1.firebasedatabase.app/",
};
firebase.initializeApp(firebaseConfig);
const loginBtn = document.getElementById('loginBtn');
const database = firebase.database();
const accessCodesRef = database.ref('accessCodes');

loginBtn.addEventListener('click', function() {
   const provider = new firebase.auth.GoogleAuthProvider();
   firebase.auth().signInWithPopup(provider)
      .then(function(result) {
         const user = result.user;
         const uid = user.uid;
         const displayName = user.displayName;

         // Check if the user has a valid access code
         accessCodesRef.child(uid).once('value')
            .then(function(snapshot) {
               const accessCodes = snapshot.val();

               if (accessCodes) {
                  window.location.href = "index.html"; // redirect to main page
               } else {
                  // User does not have a valid access code, display error message
                  alert('Invalid access code');
                  firebase.auth().signOut(); // Sign the user out
               }
            })
            .catch(function(error) {
               // Handle errors here
               console.log(error);
            });

      })
      .catch(function(error) {
         // Handle errors here
         console.log(error);
      });
});
