document.getElementById('searchBtn').addEventListener('click', (event) => {
  event.preventDefault();
    document.getElementById('weaktitle').innerHTML = '<h5>Weak against(L) Strong against(R)</h5>'
    // document.getElementById('strongtitle').innerHTML = '<h5>Strong against</h5>';

  if (document.getElementById('search').value.length > 1) {
    fetch(
      `https://pokeapi.co/api/v2/pokemon/${
        document.getElementById('search').value
      }/`
    )
      .then((r) => r.json())
      .then((data1) => {
        //IF WE DONT FIX ONIX, THEN WE REMOVE MAP?_2PM DEADLINE
        let types_of_data = data1.types
          .map((eachobj) => eachobj.type.name)
          .join(', ')
          document.getElementById('main-card').innerHTML = `
          <div class="col s12">
          <div class="card main-card-img">
          <div class="card-image waves-effect waves-block waves-light">
          <img class="activator pokemoninfocard" src="${data1.sprites.front_default}">
          </div>
          <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">${data1.name}<i class="material-icons right">more_vert</i></span>
          </div>
          <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">Details<i class="material-icons right">close</i></span>
          <p>
          <div class="name">Name: ${data1.name}</div>
          <div>Type: ${types_of_data}</div>
          <div>ID: ${data1.id}</div>
          </p>
          <p><a href="#">This is evolution link</a></p>
          </div>
          </div>`;
          
          // types_of_data.forEactypes_of_data)=>{
        fetch(`https://pokeapi.co/api/v2/type/${types_of_data}/`)
          .then((r) => r.json())
          .then((data) => {
            let weakAgainstArray = [];
            let nodmgto = data.damage_relations.no_damage_to;
            let halfdmgto = data.damage_relations.half_damage_to;
            let doubledmgfrom = data.damage_relations.double_damage_from;

            let strongAgainstArray = [];
            let nodmgfrom = data.damage_relations.no_damage_from;
            let halfdmgfrom = data.damage_relations.half_damage_from;
            let doubledmgto = data.damage_relations.double_damage_to;

            nodmgto.map((type) => weakAgainstArray.push(type.name));
            halfdmgto.map((type) => weakAgainstArray.push(type.name));
            doubledmgfrom.map((type) => weakAgainstArray.push(type.name));

            nodmgfrom.map((type) => strongAgainstArray.push(type.name));
            halfdmgfrom.map((type) => strongAgainstArray.push(type.name));
            doubledmgto.map((type) => strongAgainstArray.push(type.name));

            let uniqueWeakTypes = [...new Set(weakAgainstArray)];
            let uniqueStrongTypes = [...new Set(strongAgainstArray)];

            function filtereven(eventypes) {
              return eventypes !== types_of_data;
            }

            let filteredWeak = uniqueWeakTypes.filter(filtereven);
            let filteredStrong = uniqueStrongTypes.filter(filtereven);

            for (let i = 1; i <= 151; i++) {
              fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
                .then((r) => r.json())
                .then((info) => {
                  let alltypes = info.types.map((eachobj) => eachobj.type.name);

                  for (let i = 0; i < filteredWeak.length; i++) {
                    if (alltypes.includes(filteredWeak[i])) {
                      let weakCardDiv = document.createElement('div');
                      weakCardDiv.innerHTML = `
                      <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                              <img class="activator" src="${
                                info.sprites.front_default
                              }">
                            </div>
                            <div class="card-content">
                              <span class="card-title activator grey-text text-darken-4">${
                                info.name
                              }<i class="material-icons right">more_vert</i></span>
                            </div>
                            <div class="card-reveal">
                              <span class="card-title grey-text text-darken-4">Details<i class="material-icons right">close</i></span>
                              <p>
                              <div class="name">Name: ${info.name}</div>
                              <div class="id">ID: ${info.id}</div>
                              <div class="type">Type: ${info.types.map(
                                (eachobj) => eachobj.type.name
                              )}</div>
                              </p>
                              <a href="#">This is evolution link</a>
                            </div>
                          </div>`;
                      document.getElementById('weak-card').append(weakCardDiv);
                    } else if (alltypes.includes(filteredStrong[i])) {
                      let strongCardDiv = document.createElement('div');
                      strongCardDiv.innerHTML = `
                      <div class="card">
                        <div class="card-image waves-effect waves-block waves-light">
                          <img class="activator" src="${
                            info.sprites.front_default
                          }">
                        </div>
                        <div class="card-content">
                          <span class="card-title activator grey-text text-darken-4">${
                            info.name
                          }<i class="material-icons right">more_vert</i></span>
                        </div>
                        <div class="card-reveal">
                          <span class="card-title grey-text text-darken-4">Details<i class="material-icons right">close</i></span>
                          <p>
                          <div class="name">Name: ${info.name}</div>
                          <div class="id">ID: ${info.id}</div>
                          <div class="type">Type: ${info.types.map(
                            (eachobj) => eachobj.type.name
                          )}</div>
                          </p><a href="#">This is evolution link</a>
                        </div>
                      </div>`;
                      document
                        .getElementById('strong-card')
                        .append(strongCardDiv);
                    }
                  }
                });
            }
          });
        document.getElementById('search').value = '';
      // });
    })
  }
});

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