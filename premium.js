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
