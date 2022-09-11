const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  greeting.innerHTML = `hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  paintingGreetings(username);
}

function paintingGreetings(username) {
  greeting.innerHTML = `${username}님 반갑습니다(●'◡'●)`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greetings
  paintingGreetings(saveUsername);
}

// function handleLinkClick(event) {
//   event.preventDefault();
//   console.log(event);
//   alert("Clicked!");
// }

//link.addEventListener("click", handleLinkClick);
