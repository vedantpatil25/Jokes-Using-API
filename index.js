const jokes = document.querySelector(".container");
const jokebtn = document.querySelector(".genJoke");
const generateJokes = () => {
  const setHeader = {
    headers: {
      Accept: "application/json",
    },
  };

  fetch("https://icanhazdadjoke.com/", setHeader)
    .then((res) => res.json())
    .then((data) => {
      jokes.innerHTML = data.joke;
    }).catch((error) => jokes.innerHTML = error);
};

jokebtn.addEventListener("click", generateJokes);
  generateJokes();