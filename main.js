const pokedex = document.getElementById('pokedex');

console.log(pokedex);

const fetchPokemon = () => {

  for (let i = 1; i <= 151; i++) {

    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;

    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);


        const pokemon = {
          name: data.name,
          id: data.id,
          image: data.sprites['front_default'],
          type: data.types.map(type => type.type.name).join(', ')
        };

        mostrar(pokemon);

      });



  }
};


function buscar() {

  let pokeABuscar = document.getElementById('searchID');

  let urlBusqueda = `https://pokeapi.co/api/v2/pokemon/${pokeABuscar}`;

  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {

      let pokemonBuscar = {
        name: data.name,
        id: data.id,
        image: data.sprites['front_default'],
        type: data.types.map(type => type.type.name).join(', ')
      };

      mostrarID(pokemonBuscar);

    });

}




function mostrar(pokemon) {

  const pokeHTML =
    `
    <div class="p-5" style=" width:200px;display: flex;
    justify-content: center;">
<div class="max-w-sm rounded overflow-hidden shadow-lg">
<img class="w-full" src="${pokemon.image}" alt="Sunset in the mountains">
<div class="px-6 py-4">
<div class="font-bold text-xl mb-2">${pokemon.name}</div>

</div>
<div class="px-6 pt-4 pb-2">
<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-6 mb-6">${pokemon.type}</span>
</div>
</div>
</div>
    `;


  pokedex.innerHTML += pokeHTML;

};


function mostrarID(pokemonID) {

  const pokeHTMLbuscar =
    `
              <div class="flex p-5">

            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img class="w-full" src="${pokemonID.image}">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">${pokemonID.name}</div>
                <p class="text-gray-700 text-base">
          lorem      </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${pokemonID.type}</span>

              </div>

              </div>

              `;


  pokedexBuscar.innerHTML = pokeHTMLbuscar;

}

fetchPokemon();
