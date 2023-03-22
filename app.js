"use strict";

window.addEventListener("load", initApp);

function initApp() {
  showCharacter(jimmyValmer);
  showCharacter(jimmyValmer);
  showCharacter(jimmyValmer);
  showCharacter(jimmyValmer);
  showCharacter(jimmyValmer);
  showCharacter(jimmyValmer);
}

//TODO:
function getData() {
  console.log("GET DATA");
}

function showCharacter(character) {
  // HTML to be inserted
  const insertHTML = /*html*/ `
  <article>
  <img src="${character.image}"/>
  <h2>Name: ${character.name}</h2>
  <p>Age: ${character.age}</p>
  <p>${character.name} is voiced by ${character.voicedBy}</p>
  </article>
  `;

  // Inserts HTML
  document
    .querySelector("#characters")
    .insertAdjacentHTML("beforeend", insertHTML);

  document
    .querySelector("article:last-child")
    .addEventListener("click", function () {
      showModal(character);
    });
}

function showModal(character) {
  // console.log('SHOW DIALOG');
  document.querySelector("dialog").showModal();
  showModalCharacter(character);
}

function showModalCharacter(character) {
  // HTML to be insterted
  document.querySelector(".dialog-image").src = character.image;
  document.querySelector(".dialog-name").textContent = character.name;
  document.querySelector(".dialog-nickname").textContent = character.nickname;
  document.querySelector(".dialog-schoolgrade").textContent =
    character.schoolGrade;
  document.querySelector(".dialog-occupation").textContent =
    character.occupation;
  document.querySelector(".dialog-voicedby").textContent = character.voicedBy;
  document.querySelector(".dialog-gender").textContent = character.gender;
  document.querySelector(".dialog-haircolor").textContent = character.hairColor;
  document.querySelector(".dialog-age").textContent = character.age;
  document.querySelector(".dialog-religion").textContent = character.religion;
  document.querySelector(".dialog-catchphrase").textContent =
    character.catchPhrase;
  document.querySelector(".dialog-firstappearence").textContent =
    character.firstAppearance;
  document.querySelector(".dialog-appearences").textContent =
    character.appearances;
  document.querySelector(".dialog-episodes").textContent = character.episodes;
}

const jimmyValmer = {
  name: "Jimmy Valmer",
  nickname: "The Bard, Fastpass",
  image:
    "http://southparkstudios.mtvnimages.com/shared/characters/kids/jimmy-valmer.png?height=165",
  occupation: "Student, Comedian, Journalist, Ad Blocker",
  age: 10,
  voicedBy: "Trey Parker",
  gender: "Male",
  religion: "Protestant",
  catchPhrase: "Wow, what a great audience.",
  hairColor: "Brown",
  schoolGrade: 4,
  episodes:
    "S05E02, S06E10, S07E05, S07E11, S08E10, S09E14, S10E07, S11E06, S11E14, S12E03, S13E02, S13E03, S13E14, S14E07, S15E07, S15E08, S16E11, S17E04, S17E05, S18E07, S19E06, S20E02, S20E03, S20E04, S20E05, S20E06, S20E07, S20E08, S20E09, S20E10",
  appearances: 30,
  firstAppearance: "S05E02",
};
