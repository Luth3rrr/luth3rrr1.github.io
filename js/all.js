const DEFAULT_URL = "https://classroom.google.com/u/0/";
const goBtn = document.querySelector(".teacher");
const changeBtn = document.getElementById("changeBtn");
let url = localStorage.getItem("savedUrl");

if (!url) {
  url = prompt(
    "הכנס קישור לאתר לכפתור מורה מגיעה) תוכל לשנות את זה תמיד והאתר ישמור את בקשתך(",
    DEFAULT_URL
  );
  if (url) {
    if (isValidUrl(url)) {
      localStorage.setItem("savedUrl", url);
    } else {
      alert("אנא מלא קישור תקין");
      url = DEFAULT_URL;
      localStorage.setItem("savedUrl", url);
      return;
    }
  } else {
    url = DEFAULT_URL;
    localStorage.setItem("savedUrl", url);
  }
}

goBtn.addEventListener("click", function () {
  const url = localStorage.getItem("savedUrl");
  if (url) {
    const newWindow = window.open(
      "https://classroom.google.com/u/0/",
      "_blank",
      "width=" +
        window.innerWidth +
        ",height=" +
        window.innerHeight +
        ",fullscreen=yes,scrollbars=yes"
    );
    if (newWindow) {
      newWindow.focus();
    }
  }
});

changeBtn.addEventListener("click", function () {
  const url = prompt(
    "הכנס קישור לאתר לכפתור מורה מגיעה) תוכל לשנות את זה תמיד והאתר ישמור את בקשתך(",
    DEFAULT_URL
  );
  if (url) {
    if (isValidUrl(url)) {
      localStorage.setItem("savedUrl", url);
    } else {
      alert("אנא מלא קישור תקין");
      return;
    }
  }
});
