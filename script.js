const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;
// Event listener
form.addEventListener("submit", processFormData);

function validateForm() {
  //using constraint api
  isValid = form.checkValidity();
  //   console.log(isValid);
  //style main message for and error
  if (!isValid) {
    message.textContent = `Please fill out all fields`;
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }
  //check if passwords match
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = "green";
    password2El.style.borderColor = "green";
  } else {
    passwordsMatch = false;
    message.textContent = "Passwords do not match!";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    password1El.style.borderColor = "red";
    password2El.style.borderColor = "red";
    return;
  }
  // if form is valid and passwords match
  if (isValid && passwordsMatch) {
    message.textContent = "Successfully registered";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };

  // do somthing with user data
  console.log(user);
}

function processFormData(e) {
  e.preventDefault();
  // validate form
  validateForm();
  //submit data if valid
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}
