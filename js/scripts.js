
function getUserName() {
  const userName = document.getElementById("personName").value;
  document.querySelector("#inputName").innerText = userName;
}

function clearUserName() {
  // Changed innerText value from "null" to "____" to preserve the original blank-underline. Can use "null" if you prefer.
  document.querySelector("#inputName").innerText = "____";
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