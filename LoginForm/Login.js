let verifyData = () => {
  let mySavedEmail = window.localStorage.getItem("mySavedEmail");
  let mySavedPassword = window.localStorage.getItem("mySavedPassword");
  if (
    document.getElementById("emailInput").value === mySavedEmail &&
    document.getElementById("passwordInput").value === mySavedPassword
  ) {
    document.getElementById("logInButton").setAttribute("type", "submit");
    document.getElementById("form").action = "../TicTacToe/TicTacToe.html";
  } else {
    document.getElementById("logInButton").setAttribute("type", "reset");
    document.getElementById("emailInput").classList.add("is-invalid");
    document.getElementById("passwordInput").classList.add("is-invalid");
    document.getElementById("logInFeedback").innerText =
      "Email or Password not found!";
  }
};
let showPasswordFunction = () => {
  if (document.getElementById("passwordInput").type === "password") {
    document.getElementById("passwordInput").type = "text";
  } else {
    document.getElementById("passwordInput").type = "password";
  }
};
