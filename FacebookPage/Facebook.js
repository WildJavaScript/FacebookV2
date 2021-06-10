let isUserLogged = window.localStorage.getItem("facebookLoggedIn");
if (isUserLogged === null) {
  console.log("Redirect to Login!");
  window.location = "../LoginForm/Login.html";
}
let postSomething = () => {
  window.location = "../Posts/posts.html";
};
let refresh = () => {
  window.location = "./Facebook.html";
};
