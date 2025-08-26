const pokemonList = document.getElementById('pokemonList') //indo no html atual do browser, pegando a lista de pokemons e atribuindo isso a uma variavel
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 11
const limit = 5
let offset = 0;


function loadPokemonItems(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map((pokemon) => `
    <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
    </li>
    `).join('')
    pokemonList.innerHTML +=  newHtml//pega minha lista de pokemons, mapeia ela e converte pra uma lista de li em html e junta todos os li sem separador nenhum ''
    })
}

loadPokemonItems(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit;

    const qtdRecordNextPage = offset + limit;

    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItems(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItems(offset, limit);
    }
})
