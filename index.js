console.log("Hello, World!");

const message = document.querySelector("#message");

function addMovie(event) {
  event.preventDefault();
  const inputField = document.querySelector("input");
  const movie = document.createElement("li");
  const movieTitle = document.createElement("span");

  movieTitle.textContent = inputField.value;

  movieTitle.addEventListener("click", crossOffMovie);

  movie.appendChild(movieTitle);
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", deleteMovie);
  movie.appendChild(deleteBtn);

  const uList = document.querySelector("ul");
  uList.appendChild(movie);
  inputField.value = "";
  
}

function deleteMovie(event) {
  event.target.parentNode.remove();
  message.textContent = "Movie Deleted!";
  

}

function crossOffMovie(event) {
  event.target.classList.toggle("checked");
  if(event.target.classList.contains("checked")) {
    message.textContent = "Movie watched";
  }
  else {
    message.textContent = "Movie added back";
  }

}

const formE = document.querySelector("form");
formE.addEventListener("submit", addMovie);
