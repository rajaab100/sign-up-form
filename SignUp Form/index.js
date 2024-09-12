const form = document.getElementById("form");
const username = document.getElementById("txtusername");
const email = document.getElementById("txtemail");
const password = document.getElementById("txtpassword");
const repeatpassword = document.getElementById("txtrepeatpassword");
const checkbox = document.getElementById("checkbox");
const errorElement = document.getElementById("error");
let elements = document.querySelectorAll(".styleC");
let popup = document.getElementById('popupdiv');

function openPopup(event) {
  event.preventDefault();
  validateForm();
}

function validateForm() {
  let isValid = true;
  
  errorElement.innerHTML = "";

  // Reset border-bottom for all elements
  elements.forEach((el) => {
    el.style.borderBottom = "";
  });

  // Check for empty values
  if (
    username.value === "" &&
    email.value === "" &&
    password.value === "" &&
    repeatpassword.value === ""
  ) {
    elements.forEach((el) => {
      el.style.borderBottom = "1px solid red";
    });
    errorElement.innerHTML =
      "Please fill in all required fields before submitting the form.";
    username.focus();
    isValid = false;
  } else {
    if (username.value === "") {
      errorElement.innerHTML = "Please Enter Username.";
      username.style.borderBottom = "1px solid red";
      isValid = false;
      username.focus();
    } else if (email.value === "" || email.value === null) {
      errorElement.innerHTML = "Please Enter Email.";
      email.style.borderBottom = "1px solid red";
      isValid = false;
      email.focus();
    } else if (password.value === "" || password.value === null) {
      errorElement.innerHTML = "Please Enter Password.";
      password.style.borderBottom = "1px solid red";
      isValid = false;
      password.focus();
    } else if (repeatpassword.value === "" || repeatpassword.value === null) {
      errorElement.innerHTML = "Please Enter Repeat Password.";
      repeatpassword.style.borderBottom = "1px solid red";
      isValid = false;
      repeatpassword.focus();
    } else if (!checkbox.checked) {
      errorElement.innerHTML = "Please Check the checkBox.";
      checkbox.style.borderBottom = "1px solid red";
      isValid = false;
      checkbox.focus();
    } else if (password.value != repeatpassword.value) {
      errorElement.innerHTML =
        "Passwords do not match. Please ensure both passwords are identical.";
      isValid = false;
      password.style.borderBottom = "1px solid red";
      password.focus();
    }
    

    
  }
  if(isValid){
    
    popup.classList.add("popup-open");
    form.reset();
  }
  
  function closePopup(){
    popup.classList.remove("popup-open");
  }
  document.getElementById("closeok").addEventListener("click", closePopup);
  function errorRemove(event) {
    event.target.style.borderBottom = "";
    errorElement.innerHTML = "";
  }
  elements.forEach((el) => {
    el.addEventListener("input", errorRemove);
  });
}
