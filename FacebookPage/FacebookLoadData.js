let loggedUsername = window.localStorage.getItem("facebookLoggedUsername");
if (loggedUsername !== null) {
  fetch("https://sharo-me.herokuapp.com/api/users/getUser", {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: loggedUsername,
    }),
  })
    .then((response) => response.json())
    .then((userData) => {
      console.log(userData);
      document.querySelector(".user-name").innerHTML =
        userData.firstName + " " + userData.lastName;
      window.localStorage.setItem("userId", userData.id);
      window.localStorage.setItem(
        "author",
        userData.lastName + " " + userData.firstName
      );
    });
} else {
  console.log("Username unaviable!");
}
