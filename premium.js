

// Check if the user is already signed in
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    const uid = user.uid;
    const accessCodesRef = firebase.database().ref('accessCodes/' + uid);

    // Check if the user has a valid access code
    accessCodesRef.once('value')
      .then(function(snapshot) {
        const accessCodes = snapshot.val();

        if (accessCodes) {
          // User has a valid access code, do nothing
        } else {
          // User does not have a valid access code, redirect to login page
          window.location.href = "login.html";
        }
      })
      .catch(function(error) {
        // Handle errors here
        console.log(error);
      });
  } else {
    // User is not signed in, redirect to login page
    window.location.href = "login.html";
  }
});

// Login button click event
const loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', function() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      // User signed in successfully
    })
    .catch(function(error) {
      // Handle errors here
      console.log(error);
    });
});
