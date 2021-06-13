fetch("https://sharo-me.herokuapp.com/api/post/getAll")
  .then((res) => res.json())
  .then((data) => {
    let posts = data;
    console.log(data);
    for (let i = data.length - 1; i >= 0; --i) {
      let time = data[i].timeStamp;
      if (time.length <= 10) {
        time = time + "000";
      }
      time = Number(time);
      let date = new Date(time);
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      if (day < 10) {
        day = "0" + day;
      }
      if (month < 10) {
        month = "0" + month;
      }

      postContainer = document.createElement("div");
      postContainer.classList.add("post-container");

      userImgPostWrapper = document.createElement("div");
      userImgPostWrapper.classList.add("user-img-post-wrapper");

      profilePicImg = document.createElement("img");
      profilePicImg.src = "./img/profile-pic.jpeg";
      profilePicImg.classList.add("user-img-post");

      userImgPostWrapper.appendChild(profilePicImg);

      postWrapper = document.createElement("div");
      postWrapper.classList.add("post-wrapper");

      postDetails = document.createElement("div");
      postDetails.classList.add("post-details");

      postDetailsAuthor = document.createElement("p");
      postDetailsAuthor.classList.add("post-details-author");
      postDetailsAuthor.innerText = data[i].author;

      postDetailsDateLocation = document.createElement("p");
      postDetailsDateLocation.classList.add("post-details-date-location");
      postDetailsDateLocation.innerText =
        day + "/" + month + "/" + year + " - Romania";

      postDetails.appendChild(postDetailsAuthor);
      postDetails.appendChild(postDetailsDateLocation);

      postImgWrapper = document.createElement("div");
      postImgWrapper.classList.add("post-img-wrapper");

      postImg = document.createElement("img");
      postImg.classList.add("post-img");
      postImg.src = data[i].pictureLink;

      postImgWrapper.appendChild(postImg);

      postContent = document.createElement("div");
      postContent.classList.add("post-content");

      postText = document.createElement("p");
      postText.classList.add("post-text");
      postText.innerText = data[i].postText;

      postContent.appendChild(postText);

      likeCommentWrapper = document.createElement("div");
      likeCommentWrapper.classList.add("like-comment-wrapper");

      likeWrapper = document.createElement("div");
      likeWrapper.classList.add("like-wrapper");

      likeImg = document.createElement("img");
      likeImg.classList.add("like-img");
      likeImg.src = "./img/like.png";

      like = document.createElement("p");
      like.classList.add("like");
      like.innerText = "Like";

      likeWrapper.appendChild(likeImg);
      likeWrapper.appendChild(like);

      likeCommentSeparator = document.createElement("p");
      likeCommentSeparator.classList.add("like-comment-separator");
      likeCommentSeparator.innerText = "|";

      commentWrapper = document.createElement("div");
      commentWrapper.classList.add("comment-wrapper");

      commentImg = document.createElement("img");
      commentImg.classList.add("comment-img");
      commentImg.src = "./img/comment.png";

      comment = document.createElement("p");
      comment.classList.add("comment");
      comment.innerText = "Comment";

      commentWrapper.appendChild(commentImg);
      commentWrapper.appendChild(comment);

      likeCommentWrapper.appendChild(likeWrapper);
      likeCommentWrapper.appendChild(likeCommentSeparator);
      likeCommentWrapper.appendChild(commentWrapper);

      postWrapper.appendChild(postDetails);
      postWrapper.appendChild(postImgWrapper);
      postWrapper.appendChild(postContent);
      postWrapper.appendChild(likeCommentWrapper);

      postContainer.appendChild(userImgPostWrapper);
      postContainer.appendChild(postWrapper);

      document.querySelector("#posts-wrapper").appendChild(postContainer);
    }

    search = () => {
      let author = document.getElementById("searchBar").value;
      if (author !== "") {
        document.getElementById("posts-wrapper").innerHTML = "";
        for (let i = posts.length - 1; i >= 0; --i) {
          if (author === posts[i].author) {
            let time = posts[i].timeStamp;
            if (time.length <= 10) {
              time = time + "000";
            }
            time = Number(time);
            let date = new Date(time);
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            if (day < 10) {
              day = "0" + day;
            }
            if (month < 10) {
              month = "0" + month;
            }
            postContainer = document.createElement("div");
            postContainer.classList.add("post-container");

            userImgPostWrapper = document.createElement("div");
            userImgPostWrapper.classList.add("user-img-post-wrapper");

            profilePicImg = document.createElement("img");
            profilePicImg.src = "./img/profile-pic.jpeg";
            profilePicImg.classList.add("user-img-post");

            userImgPostWrapper.appendChild(profilePicImg);

            postWrapper = document.createElement("div");
            postWrapper.classList.add("post-wrapper");

            postDetails = document.createElement("div");
            postDetails.classList.add("post-details");

            postDetailsAuthor = document.createElement("p");
            postDetailsAuthor.classList.add("post-details-author");
            postDetailsAuthor.innerText = posts[i].author;

            postDetailsDateLocation = document.createElement("p");
            postDetailsDateLocation.classList.add("post-details-date-location");
            postDetailsDateLocation.innerText =
              day + "/" + month + "/" + year + " - Romania";

            postDetails.appendChild(postDetailsAuthor);
            postDetails.appendChild(postDetailsDateLocation);

            postImgWrapper = document.createElement("div");
            postImgWrapper.classList.add("post-img-wrapper");

            postImg = document.createElement("img");
            postImg.classList.add("post-img");
            postImg.src = posts[i].pictureLink;

            postImgWrapper.appendChild(postImg);

            postContent = document.createElement("div");
            postContent.classList.add("post-content");

            postText = document.createElement("p");
            postText.classList.add("post-text");
            postText.innerText = posts[i].postText;

            postContent.appendChild(postText);

            likeCommentWrapper = document.createElement("div");
            likeCommentWrapper.classList.add("like-comment-wrapper");

            likeWrapper = document.createElement("div");
            likeWrapper.classList.add("like-wrapper");

            likeImg = document.createElement("img");
            likeImg.classList.add("like-img");
            likeImg.src = "./img/like.png";

            like = document.createElement("p");
            like.classList.add("like");
            like.innerText = "Like";

            likeWrapper.appendChild(likeImg);
            likeWrapper.appendChild(like);

            likeCommentSeparator = document.createElement("p");
            likeCommentSeparator.classList.add("like-comment-separator");
            likeCommentSeparator.innerText = "|";

            commentWrapper = document.createElement("div");
            commentWrapper.classList.add("comment-wrapper");

            commentImg = document.createElement("img");
            commentImg.classList.add("comment-img");
            commentImg.src = "./img/comment.png";

            comment = document.createElement("p");
            comment.classList.add("comment");
            comment.innerText = "Comment";

            commentWrapper.appendChild(commentImg);
            commentWrapper.appendChild(comment);

            likeCommentWrapper.appendChild(likeWrapper);
            likeCommentWrapper.appendChild(likeCommentSeparator);
            likeCommentWrapper.appendChild(commentWrapper);

            postWrapper.appendChild(postDetails);
            postWrapper.appendChild(postImgWrapper);
            postWrapper.appendChild(postContent);
            postWrapper.appendChild(likeCommentWrapper);

            postContainer.appendChild(userImgPostWrapper);
            postContainer.appendChild(postWrapper);

            document.querySelector("#posts-wrapper").appendChild(postContainer);
          }
        }
      }
    };
  });
