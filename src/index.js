let pokemons = [
    { nome: "Vulpix", nivel: 5001 },
    { nome: "Emolga", nivel: 7870 },
    { nome: "Stoutland", nivel: 2085 },
    { nome: "Pikachu", nivel: 10700 },
    { nome: "Salamence", nivel: 3300 },
    { nome: "Pancham", nivel: 2000 },
    { nome: "Slaking", nivel: 5700 },
    { nome: "Tranquill", nivel: 8010 },
    { nome: "Caterpie", nivel: 9740 },
    { nome: "Naganadel", nivel: 804 }
]
function resposta(nome, nivel) {
    console.log("O Herói de nome " + nome + " está no nível de " + nivel);
};

pokemons.forEach(pokemon =>{
    switch (true) {
        // obs. não coloquei <= 1000, porque está explicito no pedido do desafio que seja < menor, então o nivel 1000 fica de fora!
        // Mas deixo essa observação, eu faria contato com o solicitante do código para saber se foi um erro ou estratégia dele.
        case (pokemon.nivel > 0 && pokemon.nivel < 1000):
            nomeNivel = "Ferro"
            resposta(pokemon.nome, nomeNivel);
            break;
        case (pokemon.nivel >= 1001 && pokemon.nivel <= 2000):
            nomeNivel = "Bronze"
            resposta(pokemon.nome, nomeNivel);
            break;
        case (pokemon.nivel >= 2001 && pokemon.nivel <= 5000):
            nomeNivel = "Prata"
            resposta(pokemon.nome, nomeNivel);
            break;
        case (pokemon.nivel >= 5001 && pokemon.nivel <= 7000):
            nomeNivel = "Ouro"
            resposta(pokemon.nome, nomeNivel);
            break;
        case (pokemon.nivel >= 7001 && pokemon.nivel <= 8000):
            nomeNivel = "Platina"
            resposta(pokemon.nome, nomeNivel);
            break;
        case (pokemon.nivel >= 8001 && pokemon.nivel <= 9000):
            nomeNivel = "Ascendente"
            resposta(pokemon.nome, nomeNivel);
            break;
        case (pokemon.nivel >= 9001 && pokemon.nivel <= 10000):
            nomeNivel = "Imortal"
            resposta(pokemon.nome, nomeNivel);
            break;
        case (pokemon.nivel >= 10001):
            nomeNivel = "Radiante"
            resposta(pokemon.nome, nomeNivel);
            break;

    }
});
