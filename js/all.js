const DEFAULT_URL = "https://my.classoos.com/il/books/textbooks";

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
