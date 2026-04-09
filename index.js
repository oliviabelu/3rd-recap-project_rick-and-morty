import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]',
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
const searchQuery = "";

// Fetch API

async function fetchCharacters(indexPage) {
  // let maxPages = false;
  // while (!maxPages) {

  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${indexPage}`,
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch Data! Status Code: ${response.status}`);
    }
    const data = await response.json();

    maxPage = data.info.pages;

    // console.log(data.info.pages, page);
    // if (data.info.pages === page) {
    //   maxPages = true;
    // }
    // return data;
    // page++;
    cardContainer.innerHTML = "";
    data.results.forEach((character) => {
      cardContainer.append(createCharacterCard(character));
    });
  } catch (error) {
    return { error: error };
  }
  // }
}
fetchCharacters(page);
console.log(maxPage);

nextButton.addEventListener("click", () => {
  if (page === maxPage) {
    alert("Hey, this is the End! :( Hold your breath and count to ten.");
    console.log(page, maxPage);
    return;
  }
  page++;
  fetchCharacters(page);
});

prevButton.addEventListener("click", () => {
  if (page === 1) {
    alert("You reached the start of the universe. :D");
    return;
  }
  page--;
  fetchCharacters(page);
});

// async function handleFetchCharacters() {
//   const result = await fetchCharacters();
//   if (result.error) {
//     console.log("An error occurred:", result.error);
//   }
//   return result;
//   // } else {
//   //   // console.log("Fetched data:", result.results);
//   // }
// }

// createCharacterCard();
