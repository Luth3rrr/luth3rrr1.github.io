const DEFAULT_URL = "https://classroom.google.com/u/0/";

const goBtn = document.querySelector('.teacher');
const changeBtn = document.getElementById('changeBtn');

let url = localStorage.getItem('savedUrl');
if (!url) {
  url = prompt('הכנס קישור לאתר לכפתור מורה מגיעה (תוכל לשנות את זה תמיד והאתר ישמור את בקשתך)', DEFAULT_URL);
  if (url) {
    if (isValidUrl(url)) {
      localStorage.setItem('savedUrl', url);
    } else {
      alert('אנא מלא קישור תקין');
    }
  } else {
    url = DEFAULT_URL;
    localStorage.setItem('savedUrl', url);
  }
}

goBtn.addEventListener('click', function() {
  const url = localStorage.getItem('savedUrl');
  if (url) {
    window.open(url, '_blank');
  }
});

changeBtn.addEventListener('click', function() {
  const url = prompt('הכנס קישור לאתר לכפתור מורה מגיעה (תוכל לשנות את זה תמיד והאתר ישמור את בקשתך)', DEFAULT_URL);
  if (url) {
    if (isValidUrl(url)) {
      localStorage.setItem('savedUrl', url);
    } else {
      alert('אנא מלא קישור תקין');
      return;
    }
  }
});

function isValidUrl(url) {
  // Very basic URL validation
  return url.match(/^https?:\/\/.+$/);
}
window.onload = function() {
  const logoutBtn = document.getElementById('logoutBtn');
  logoutBtn.addEventListener('click', function() {
    const confirmLogout = confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      firebase.auth().signOut().then(function() {
        // User is signed out.
      }).catch(function(error) {
        // Handle errors here.
        console.log(error);
      });
    }
  });
};


