"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  changeViewModeButton();

  parallaxBackground();

  const jimmy = await getCharacterData(
    "https://raw.githubusercontent.com/Forkeh/South-Park-App/main/data/jimmy.json"
  );
  const cartman = await getCharacterData(
    "https://raw.githubusercontent.com/Bindholt/Data-Projekt/main/data/cartman.json"
  );
  const jack = await getCharacterData(
    "https://raw.githubusercontent.com/YawHB/South_Park_Project/main/data/jack.json"
  );
  showCharacterTable(jimmy);
  showCharacterTable(cartman);
  showCharacterTable(jack);
  showCharacterTable(jimmy);
  showCharacterTable(jimmy);
  showCharacterTable(cartman);
  showCharacterTable(jack);
  showCharacterTable(jimmy);
  showCharacterGrid(cartman);
  showCharacterGrid(jimmy);
  showCharacterGrid(cartman);
  showCharacterGrid(jack);
  showCharacterGrid(cartman);
  showCharacterGrid(jack);
  showCharacterGrid(jimmy);
  showCharacterGrid(jack);
  showCharacterGrid(cartman);
  showCharacterGrid(jimmy);
  showCharacterGrid(cartman);
}

async function getCharacterData(url) {
  // Fetches data - have to use await
  const response = await fetch(url);
  // Parses data into json format - have to use await
  const data = await response.json();
  return data;
}
function showCharacterTable(character) {
  // HTML to be inserted
  const insertHTML = /*html*/ `
  <tr class='char-table-row'>
  <td class='image-column'>
  <img src="${character.image}"/>
  </td>
  <td>
  ${character.name}
  </td>
  <td>
  ${character.age}
  </td>
  <td>
  ${character.gender}
  </td>
  </tr>
  `;

  // Inserts HTML
  document.querySelector("tbody").insertAdjacentHTML("beforeend", insertHTML);

  // Add unique modal click event
  document
    .querySelector("tbody tr:last-child")
    .addEventListener("click", function () {
      showModal(character);
    });
}

function showCharacterGrid(character) {
  // HTML to be inserted
  const insertHTML = /*html*/ `
  <article>
  <img src="${character.image}"/>
  <h2>${character.name}</h2>
  <p>Age: ${character.age}</p>
  <p>${character.name} is voiced by ${character.voicedBy}</p>
  </article>
  `;

  // Inserts HTML
  document
    .querySelector("#characters-grid")
    .insertAdjacentHTML("beforeend", insertHTML);

  // Add unique modal click event
  document
    .querySelector("article:last-child")
    .addEventListener("click", function () {
      showModal(character);
    });
}

function showModal(character) {
  // Shows modal dialog with built in function
  document.querySelector("dialog").showModal();
  // Sends character object to fill in dialog detail
  showModalCharacter(character);
}

function showModalCharacter(character) {
  // Open modal animation
  document.querySelector("#dialog-window").classList.add("open-modal");

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
  document.querySelector(".dialog-firstappearance").textContent =
    character.firstAppearance;
  document.querySelector(".dialog-appearances").textContent =
    character.appearances;
  document.querySelector(".dialog-episodes").textContent = character.episodes;
}

function parallaxBackground() {
  // Selects background when scrolling
  window.addEventListener("scroll", function () {
    const parallaxBg = document.querySelector(".bg-parallax");
    // current Y position is saved to variable
    const scrollPosition = window.scrollY;
    // Background is moved slightly
    parallaxBg.style.transform = "translateY(" + scrollPosition * 0.9 + "px)";
  });
}

function changeViewModeButton() {
  let tableViewMode = false; // false is grid, true is table
  const grid = document.querySelector("#characters-grid");
  const table = document.querySelector("#characters-table");
  const button = document.querySelector("#switch-show-mode-btn");
  const fadeSpeed = 100;

  button.addEventListener("click", function () {
    // Switch to table mode
    if (tableViewMode === false) {
      grid.classList.remove("fade-in");
      grid.classList.add("fade-out");

      setTimeout(() => {
        grid.classList.add("hidden");
        grid.classList.remove("fade-out");
        table.classList.remove("hidden");
        table.classList.add("fade-in");
      }, fadeSpeed);

      button.textContent = "Show Grid";
      tableViewMode = true;

      // Switch to grid mode
    } else {
      table.classList.remove("fade-in");
      table.classList.add("fade-out");

      setTimeout(() => {
        table.classList.add("hidden");
        table.classList.remove("fade-out");
        grid.classList.remove("hidden");
        grid.classList.add("fade-in");
      }, fadeSpeed);

      button.textContent = "Show Table";
      tableViewMode = false;
    }
  });
}
