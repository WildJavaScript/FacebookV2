let tryLogin = () => {
  let myUSername = document.getElementById("usernameInput").value;
  let myPassword = document.getElementById("passwordInput").value;
  fetch("https://sharo-me.herokuapp.com/api/users/login", {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: myUSername,
      password: myPassword,
    }),
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      if (data === "User Login Ok!") {
        window.localStorage.setItem("facebookLoggedIn", "true");
        window.localStorage.setItem("facebookLoggedUsername", myUSername);
        window.location = "../FacebookPage/Facebook.html";
      } else {
        document.getElementById("usernameInput").value = "";
        document.getElementById("passwordInput").value = "";
      }
    });
};
let showPasswordFunction = () => {
  if (document.getElementById("passwordInput").type === "password") {
    document.getElementById("passwordInput").type = "text";
  } else {
    document.getElementById("passwordInput").type = "password";
  }
};
