// Variáveis globais
let Dinheiro1 = 0;
let Dinheiro2 = 0;

function dinheiro() {
    const dindin = document.getElementById("dindin");
    const dindindin = document.getElementById("dindindin");
    const quem = document.getElementById("quem").value;
    const quanto = Number(document.getElementById("quanto").value);
    const acao = document.getElementById("acao").value;

    // Verifica quem e a ação
    if (quem === "Player1") {
        if (acao === "P") {
            Dinheiro1 -= quanto;
        } else if (acao === "G") {
            Dinheiro1 += quanto;
        } else if (acao === "A") {
            Dinheiro1 = quanto;
        }
    } else if (quem === "Player2") {
        if (acao === "P") {
            Dinheiro2 -= quanto;
        } else if (acao === "G") {
            Dinheiro2 += quanto;
        } else if (acao === "A") {
            Dinheiro2 = quanto;
        }
    } else if (quem === "Todos") {
        if (acao === "P") {
            Dinheiro2 -= quanto;
            Dinheiro1 -= quanto;
        } else if (acao === "G") {
            Dinheiro2 += quanto;
            Dinheiro1 += quanto;
        } else if (acao === "A") {
            Dinheiro2 = quanto;
            Dinheiro1 = quanto;
        }
    }
    

    // Atualiza na tela
    dindin.textContent = `\$${Dinheiro1.toFixed(2)}`;
    dindindin.textContent = `\$${Dinheiro2.toFixed(2)}`;
}


window.onload = function () {
    const dindin = document.getElementById("dindin");
    const dindindin = document.getElementById("dindindin");

    dindin.textContent = `\$${Dinheiro1.toFixed(2)}`;
    dindindin.textContent = `\$${Dinheiro2.toFixed(2)}`;
};