
const form = document.getElementById('form');
const heroi = document.getElementById('vitoria');
const xp = document.getElementById('derrota');
const resultadoDiv = document.getElementById('resultado');


form.addEventListener('submit', (event)=> {
    event.preventDefault();
    checkinputdados();

})

function checkinputdados(){
    const derrotaValue = derrota.value;
    const vitoriaValue = vitoria.value;

    const saldovitorias = (vitoriaValue - derrotaValue)

    let mensagem = "";

    if (saldovitorias <= 10) {
        mensagem = `O Herói tem saldo de ${saldovitorias} vitória(s) e está no Ranking Ferro.`
    }
    else if (saldovitorias >= 11 && saldovitorias <= 20) {
        mensagem = `O Herói tem saldo de ${saldovitorias} vitória(s) e está no Ranking Bronze.`
    }
    else if (saldovitorias >= 21 && saldovitorias <= 50 ) {
        mensagem = `O Herói tem saldo de ${saldovitorias} vitória(s) e está no Ranking Prata.`
    }
    else if (saldovitorias >= 51 && saldovitorias <= 80  ) {
        mensagem = `O Herói tem saldo de ${saldovitorias} vitória(s) e está no Ranking Ouro.`
    }
    else if (saldovitorias >= 81 && saldovitorias <= 90  ) {
        mensagem = `O Herói tem saldo de ${saldovitorias} vitória(s) e está no Ranking Diamente.`
    }
    else if (saldovitorias >= 91 && saldovitorias <= 100  ) {
        mensagem = `O Herói tem saldo de ${saldovitorias} vitória(s) e está no Ranking Lendário.`
    }
    else if (saldovitorias >= 101) {
        mensagem = `O Herói tem saldo de ${saldovitorias} vitória(s) e está no Ranking Imortal.`
    };


    resultadoDiv.innerHTML = mensagem;
}
