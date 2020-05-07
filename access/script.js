function checkForDirectLink() {
  let query = window.location.search.split('?');
  query = query.find(x => x.includes('id='));
  if (typeof query !== 'undefined' && query !== '') {
    let id = query.match(/id=([0-9]+)/)[1];
    getPokemon(id);
  }

}
checkForDirectLink();

<<<<<<< HEAD
//         <li class="main-card-list-item-ability">
//             abilities: ${pokemon.abilities[0].ability.name},
//             ${pokemon.abilities[1].ability.name}
//         </li>
//         <li class="main-card-list-item-stats0">
//             ${pokemon.stats[0].stat.name}: ${pokemon.stats[0].base_stat}
//         </li>
//         <li class="main-card-list-item-stats1">
//             ${pokemon.stats[1].stat.name}: ${pokemon.stats[1].base_stat}
//         </li>
//         <li class="main-card-list-item-stats2">
//             ${pokemon.stats[2].stat.name}: ${pokemon.stats[2].base_stat}
//         </li>
//         <li class="main-card-list-item-stats3">
//             ${pokemon.stats[3].stat.name}: ${pokemon.stats[3].base_stat}
//         </li>
//         <li class="main-card-list-item-stats4">
//             ${pokemon.stats[4].stat.name}: ${pokemon.stats[4].base_stat}
//         </li>
//         <li class="main-card-list-item-stats6">
//             ${pokemon.stats[5].stat.name}: ${pokemon.stats[5].base_stat}
//         </li>

//         document.getElementById('nameInput').value = '';
//         document.getElementById('body-main-pokemon').innerHTML = '';
//         document.getElementById('body-main-pokemon').append(pokeElem);
//       })
//       .catch((e) => {
//         console.log(e);
//         //removed the alert due to the requirement.
//         document.getElementById('nameInput').value = '';
//         document.getElementById('body-main-pokemon').innerHTML = '';
//       });
//   }
// });


// line 57 card 
document.getElementById('tcgLink').addEventListener('click', (e) => {
  e.preventDefault()

  fetch(`https://api.pokemontcg.io/v1/cards?name=${document.getElementById('search').value}`)
    .then(r => r.json())
    .then(pokemonData => {
      let cardIndex = 0
      // console.log(pokemonData)
      // console.log(pokemonData.cards[0])
      document.getElementById('tcgLink').innerHTML =
        `
    <img src='${pokemonData.cards[Math.floor(Math.random() * pokemonData.cards.length)].imageUrl}'>
    `
    })
})


document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

// Calumbelot05/04/2020
// git checkout(branchname)
// git pull origin master
// git add
// git commit
// git push origin(branchname)
=======
document.getElementById('searchPokemon').addEventListener('click', (event) => {
  event.preventDefault();
  let inputValue = document.getElementById('nameInput').value;
  if (inputValue.length > 1) {
    let hits = allPokemon.filter(item => item.name.toLowerCase().includes(inputValue));
    if (hits.length === 1) {
      displayPokemon(hits[0])
    }
    // getPokemon(inputValue.toLowerCase());

  }
});
function getPokemon(query) {
  fetch(
    `https://pokeapi.co/api/v2/pokemon/${query}/`
  )
    .then((r) => r.json())
    .then((pokemon) => {
      displayPokemon(pokemon);
    })
    .catch((e) => {
      console.log(e);
      //removed the alert due to the requirement.
      document.getElementById('nameInput').value = '';
      document.getElementById('body-main-pokemon').innerHTML = '';
    });
}

function displayPokemon(pokemon) {
  let pokeElem = document.createElement('div');
  pokeElem.className = 'card';
  pokeElem.innerHTML = `
  <img 
    src="${pokemon.sprites.front_default}" 
    class="main-card-img" 
    alt="${pokemon.name}">
  <div class="main-card-body">
    <h2 class="main-card-title">
      ${pokemon.name.toUpperCase()}
    </h2>
    <div class="main-card-list">
        <li class="main-card-list-item-type">
            type: ${pokemon.types.map((type) => type.type.name).join(', ')}
        </li>
        <li class="main-card-list-item-ability">
            abilities: ${pokemon.abilities[0].ability.name},
            ${pokemon.abilities[1].ability.name}
        </li>
        <li class="main-card-list-item-stats0">
            ${pokemon.stats[0].stat.name}: ${pokemon.stats[0].base_stat}
        </li>
        <li class="main-card-list-item-stats1">
            ${pokemon.stats[1].stat.name}: ${pokemon.stats[1].base_stat}
        </li>
        <li class="main-card-list-item-stats2">
            ${pokemon.stats[2].stat.name}: ${pokemon.stats[2].base_stat}
        </li>
        <li class="main-card-list-item-stats3">
            ${pokemon.stats[3].stat.name}: ${pokemon.stats[3].base_stat}
        </li>
        <li class="main-card-list-item-stats4">
            ${pokemon.stats[4].stat.name}: ${pokemon.stats[4].base_stat}
        </li>
        <li class="main-card-list-item-stats6">
            ${pokemon.stats[5].stat.name}: ${pokemon.stats[5].base_stat}
        </li>
    </div>
  </div>
`;
  document.getElementById('nameInput').value = '';
  document.getElementById('body-main-pokemon').innerHTML = '';
  document.getElementById('body-main-pokemon').append(pokeElem);
}
const allPokemon = [];

function getAllPokemon() {
  for (let i = 1; i <= 151; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    fetch(url).then(r => r.json()).then(res => {
      allPokemon.push(res);
    });
  }
}
getAllPokemon();
>>>>>>> 050d936e02b005b65cacd53e70156edaa838e19c
