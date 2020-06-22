//Checa se determinados players, jogam determinado jogo.

const jogadores = [
    {nome: "Juscelino", jogos: ["Heartstone", "Diablo", "Tibia"]},
    {nome: "Samira", jogos: ["Pokemon", "Tibia", "Hallo"]},
    {nome: "Barbara", jogos: ["Mario", "Tibia", "Diablo"]},
    {nome: "Thiago", jogos: ["Final Fantasy", "Heartstone", "Mario"]}
];

function checaJogo (jogador){
    for ( let jogo of jogador.jogos) {
        const encontreiHearthstone = jogo === 'Heartstone'
        if (encontreiHearthstone) return true;
    }
    return false;
}

for (let i = 0; i < jogadores.length; i++) {
    let encontreiHearthstone = checaJogo(jogadores[i]);
  
    if (encontreiHearthstone) {
      console.log(`O Jogador ${jogadores[i].nome} sabe jogar Heartstone`);
    }
  }