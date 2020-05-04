document.getElementById('searchPokemon').addEventListener('click', (event) => {
  event.preventDefault();

  if (document.getElementById('nameInput').value.length > 1) {
    fetch(
      `https://pokeapi.co/api/v2/pokemon/${document
        .getElementById('nameInput')
        .value.toLowerCase()}/`
    )
      .then((r) => r.json())
      .then((pokemon) => {
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
      })
      .catch((e) => {
        console.log(e);
        //removed the alert due to the requirement.
        document.getElementById('nameInput').value = '';
        document.getElementById('body-main-pokemon').innerHTML = '';
      });
  }
});
