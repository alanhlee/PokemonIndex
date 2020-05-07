function checkForDirectLink() {
  let query = window.location.search.split('?');
  query = query.find(x => x.includes('id='));
  if (typeof query !== 'undefined' && query !== '') {
    let id = query.match(/id=([0-9]+)/)[1];
    getPokemon(id);
  }

}
checkForDirectLink();


