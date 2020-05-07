// document.getElementById('search').addEventListener('click', (event) => {
//   event.preventDefault();

//   if (document.getElementById('nameInput').value.length > 1) {
//     fetch(
//       `https://pokeapi.co/api/v2/pokemon/${document
//         .getElementById('nameInput')
//         .value.toLowerCase()}/`
//     )
//       .then((r) => r.json())
//       .then((pokemon) => {
//         let pokeElem = document.createElement('div');
//         pokeElem.className = 'card medium';
//         pokeElem.innerHTML = `<div class="card-image">
//         <img src="${pokemon.sprites.front_default}"alt="${pokemon.name}">
//           <span class="card-title"></span>
//           <a class="btn-floating halfway-fab waves-effect waves-light red"
//             ><i class="arrow_drop_down">add</i></a
//           >
//         </div>
//         <div class="card-content">
//           <p>Name: ${pokemon.name.toUpperCase()}
//           Type: ${pokemon.types.map((type) => type.type.name).join(', ')}
//           </p>
//         </div>
//       </div>`;

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