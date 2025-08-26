const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types // fez um array de tipos
    pokemon.types = types
    pokemon.type = type // pegando o primeiro tipo do array de tipos

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json()) //pegando o detalhe do pokemon e convertendo pra json
            .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 20) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json()) //pegando a lista de pokemons ja convertida em JSON
        .then((jsonBody) => jsonBody.results) //pegando o body convertido e retornando apenas a propriedade results
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) //transformou a lista em uma lista de requisicoes detalhe
        .then((detailRequests) => Promise.all(detailRequests)) //esperando todas as promessas de detalhes serem resolvidas
        .then((pokemonsDetails) => pokemonsDetails) // quando terminar retornando uma promessa com todos os detalhes dos pokemons
}
