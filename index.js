
let heroName = "name";
let heroWins = 30;
let heroLoses = 16;

let rank = saldoVitoria(heroWins, heroLoses);


function saldoVitoria(vitorias, derrotas){
    let saldo = vitorias - derrotas;
    let rank;

    switch(true){
        case (saldo <= 10):
            rank = "ferro";
            break;
        case (saldo <= 20):
            rank = "Bronze";
            break;
        case (saldo <= 50):
            rank = "Prata";
            break;
        case (saldo <= 80):
            rank = "Ouro";
            break;
        case (saldo <= 90):
            rank = "Diamante";
            break;
        case (saldo <= 100):
            rank = "Lendário";
            break;
        case (saldo > 100):
            rank = "Imortal";
            break;
        default:
            rank = "level not found"
            break;
    }

    return [saldo, rank]

}


    console.log("O Herói tem de saldo de " +rank[0]+ " está no nível de " + rank[1])