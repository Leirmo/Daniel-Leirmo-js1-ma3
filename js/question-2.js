const apiKey = "04048dd3f91543cd8c00d9444ef6bfe6";
const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;

const resultsContainer = document.querySelector(".results");

async function getData() {
  const response = await fetch(url);

  const results = await response.json();

  resultsContainer.innerHTML = "";

  for (let i = 0; i < results.results.length; i++) {
    console.log(
      `${results.results[i].name} ${results.results[i].rating} ${results.results[i].tags.length}`
    );

    if (i === 7) {
      break;
    }

    resultsContainer.innerHTML += `<div class="result">${results.results[i].name} - ${results.results[i].rating} - ${results.results[i].tags.length}</div>`;
  }
}

getData();
