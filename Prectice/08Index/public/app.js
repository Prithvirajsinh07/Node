let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signinBtn.onclick = function () {
  nameField.style.maxHeight = "0";
  title.innerHTML = "SIGN IN";
  signupBtn.classList.add("disabled");
  signinBtn.classList.remove("disabled");
};

signupBtn.onclick = function () {
  nameField.style.maxHeight = "60px";
  title.innerHTML = "SIGN UP";
  signupBtn.classList.remove("disabled");
  signinBtn.classList.add("disabled");
};

//   form submission

let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  //   storing the values in local storage
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
   console.log("hiii");
   
  alert("Your details have been saved in localstorage.");
});

