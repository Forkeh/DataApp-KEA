"use strict";

let data;

window.addEventListener("load", initApp);

async function initApp() {
  changeViewModeButton();
  changeFilterModeButton();
  parallaxBackground();

  data = await getCharacterData(
    "https://cederdorff.github.io/dat-js/05-data/southpark.json"
  );

  populateGridAndTable(data);
}

//
function populateGridAndTable(array) {
  for (const character of array) {
    showCharacterGrid(character);
    showCharacterTable(character);
  }
  // Alternative method
  // characterList.forEach(showCharacterGrid);
  // characterList.forEach(showCharacterTable);
}

function sortAge(obj1, obj2) {
  return obj2.age - obj1.age;
}

function sortAppearances(obj1, obj2) {
  return obj2.appearances - obj1.appearances;
}

async function getCharacterData(dataSource) {
  // Fetches data - have to use await
  const response = await fetch(dataSource);
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
  <td>
  ${character.appearances}
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



function changeFilterModeButton() {
  const grid = document.querySelector("#characters-grid");
  const tableBody = document.querySelector("#table-body");
  const button = document.querySelector("#switch-filter-mode-btn");

  button.addEventListener("click", function () {
    // Get text content from button
    let buttonText = button.textContent;
    // Empty grid and table HTML
    grid.innerHTML = "";
    tableBody.innerHTML = "";
    // If it includes Age, sort characters by age value
    if (buttonText.includes("Age")) {
      button.textContent = "Filter by Appearences";
      data = data.sort(sortAge);
      populateGridAndTable(data);

      // If it includes Appearences, sort characters by appearences value
    } else if (buttonText.includes("Appearences")) {
      button.textContent = "Filter by Age";
      data = data.sort(sortAppearances);
      populateGridAndTable(data);
    }
  });
}

function changeViewModeButton() {
  let tableViewMode = false; // false is grid, true is table
  const grid = document.querySelector("#characters-grid");
  const table = document.querySelector("#characters-table");
  const button = document.querySelector("#switch-show-mode-btn");
  const fadeSpeed = 200;

  button.addEventListener("click", function () {
    // Switch to table mode
    if (tableViewMode === false) {
      grid.classList.remove("fade-in");
      grid.classList.add("fade-out");

      setTimeout(() => {
        // grid.offsetWidth;
        table.offsetWidth;
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
        // table.offsetWidth;
        grid.offsetWidth;
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