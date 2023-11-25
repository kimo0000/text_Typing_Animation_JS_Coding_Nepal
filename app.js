const textEl = document.querySelector("span");

const jobs = ["Developper", "Designer", "Programmer", "Youtuber", "Blogger"];

let countLetters = 0,
  countWords = 0;

const typingText = () => {
  textEl.innerText += jobs[countWords][countLetters++];
  // console.log(countLetters + "=>" + jobs[countWords].length);
  if (countLetters > jobs[countWords].length) {
    textEl.innerText = "";
    jobs[countWords++];
    countLetters = 0;
  }

  countWords === jobs.length ? (countWords = 0) : "";
};

setInterval(typingText, 300);
