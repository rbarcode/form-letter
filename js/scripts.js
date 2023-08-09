
function getUserName() {
  const userName = document.getElementById("personName").value;
  document.querySelector("#inputName").innerText = userName;
}

function clearUserName() {
  document.querySelector("#inputName").innerText = null;
}

function clearFormSubmissionEventHandler() {
  let form = document.querySelector("form");
  form.onreset = function (e) {
    clearUserName();
  }
}

function setFormSubmissionEventHandler() {
  let form = document.querySelector("form");
  form.onsubmit = function (e) {
    e.preventDefault();
    getUserName();
  }
}

window.onload = function () {
  setFormSubmissionEventHandler();
  clearFormSubmissionEventHandler();
}