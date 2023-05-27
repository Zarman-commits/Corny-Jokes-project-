// Version 1
const jokeSection = document.getElementById('jokes');
const jokeBtn = document.getElementById('joke-btn');

const generateJokes = function generateJokes1() {
  const xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    'https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist&type=single&idRange=0-319'
  );

  xhr.onreadystatechange = function () {
    if (this.readyState === 4)
      if (this.status === 200) {
        jokeSection.innerHTML = JSON.parse(this.responseText).joke;
      } else {
        jokeSection.innerHTML = 'Congratulation You have been played';
      }
  };

  xhr.send();
};

jokeBtn.addEventListener('click', generateJokes);

//  Event for DOM loads so when page is refreshed you don't have to press the button to get the joke.

document.addEventListener('DOMContentLoaded', generateJokes);
