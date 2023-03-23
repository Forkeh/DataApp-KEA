"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  const jimmy = await getCharacterData(
    "https://raw.githubusercontent.com/Forkeh/South-Park-App/main/data/jimmy.json"
  );
  const heather = await getCharacterData(
    "https://raw.githubusercontent.com/Benjamin-Harris1/Data-app/main/data/heather.json"
  );
  const jack = await getCharacterData(
    "https://raw.githubusercontent.com/YawHB/South_Park_Project/main/data/jack.json"
  );
  showCharacter(jimmy);
  showCharacter(heather);
  showCharacter(jack);
  
}

async function getCharacterData(url) {
const response = await fetch(url);
const data = await response.json();
return data
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
