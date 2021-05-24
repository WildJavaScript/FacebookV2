let sendPost = () => {
  let userId = window.localStorage.getItem("userId");
  let author = window.localStorage.getItem("author");
  let date = new Date();
  let time = date.getTime();
  fetch("https://sharo-me.herokuapp.com/api/post/create", {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
      postText: document.querySelector("#textArea").value,
      pictureLink: document.querySelector("#linkInput").value,
      author: author,
      timeStamp: time,
    }),
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      if (data === "Post Added!") {
        window.location = "../FacebookPage/Facebook.html";
      } else if (data === "User Doesn't Exist") {
        window.localStorage.removeItem("userId");
        window.location = "../LoginForm/Login.html";
      } else if (data === "Creating Post Failed") {
        document.querySelector("#textArea").value = "";
        document.querySelector("#linkInput").value = "";
      }
    });
};
