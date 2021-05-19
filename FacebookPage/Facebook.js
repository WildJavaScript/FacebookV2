let isUserLogged = window.localStorage.getItem("facebookLoggedIn");
console.log(isUserLogged);
if (isUserLogged === null) {
  console.log("Redirect to Login!");
  window.location = "../LoginForm/Login.html";
}
