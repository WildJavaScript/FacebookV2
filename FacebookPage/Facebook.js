let isUserLogged = window.localStorage.getItem("facebookLoggedIn");
if (isUserLogged === null) {
  console.log("Redirect to Login!");
  window.location = "../LoginForm/Login.html";
}
