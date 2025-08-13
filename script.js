// ---------------------------
// Inicialização de valores
// ---------------------------
let Dinheiro = [
    Number(localStorage.getItem("dinheiro1") || 0),
    Number(localStorage.getItem("dinheiro2") || 0),
    Number(localStorage.getItem("dinheiro3") || 0),
    Number(localStorage.getItem("dinheiro4") || 0)
];

let playerNames = [
    localStorage.getItem("player1name") || "",
    localStorage.getItem("player2name") || "",
    localStorage.getItem("player3name") || "",
    localStorage.getItem("player4name") || ""
];

// ---------------------------
// Captura de elementos
// ---------------------------
const players = [
    document.getElementById("Player1"),
    document.getElementById("Player2"),
    document.getElementById("Player3"),
    document.getElementById("Player4")
];

const playerOptions = [
    document.getElementById("player1option"),
    document.getElementById("player2option"),
    document.getElementById("player3option"),
    document.getElementById("player4option")
];

const dinheiroDisplays = [
    document.getElementById("dindin"),
    document.getElementById("dindindin"),
    document.getElementById("dindindindin"),
    document.getElementById("dindindindindin")
];

// ---------------------------
// Função para atualizar tela
// ---------------------------
function atualizarTela() {
    for (let i = 0; i < 4; i++) {
        // Atualiza input e display
        players[i].value = playerNames[i];
        playerOptions[i].textContent = playerNames[i];
        dinheiroDisplays[i].textContent = `$${Dinheiro[i].toFixed(2)}`;
    }
}

// ---------------------------
// Função para salvar valores
// ---------------------------
function salvarValores() {
    for (let i = 0; i < 4; i++) {
        playerNames[i] = players[i].value;
        localStorage.setItem(`player${i+1}name`, playerNames[i]);
        localStorage.setItem(`dinheiro${i+1}`, Dinheiro[i]);
        playerOptions[i].textContent = playerNames[i];
    }
}

// ---------------------------
// Funções de ganhar, perder e alterar
// ---------------------------
function ganhar() {
    const quem = document.getElementById("quem").value;
    const quanto = Number(document.getElementById("quanto").value);

    if (quem === "Todos") {
        for (let i = 0; i < 4; i++) Dinheiro[i] += quanto;
    } else {
        const index = getPlayerIndex(quem);
        if (index !== -1) Dinheiro[index] += quanto;
    }

    salvarValores();
    atualizarTela();
}

function perder() {
    const quem = document.getElementById("quem").value;
    const quanto = Number(document.getElementById("quanto").value);

    if (quem === "Todos") {
        for (let i = 0; i < 4; i++) Dinheiro[i] -= quanto;
    } else {
        const index = getPlayerIndex(quem);
        if (index !== -1) Dinheiro[index] -= quanto;
    }

    salvarValores();
    atualizarTela();
}

function alterar() {
    const quem = document.getElementById("quem").value;
    const quanto = Number(document.getElementById("quanto").value);

    if (quem === "Todos") {
        for (let i = 0; i < 4; i++) Dinheiro[i] = quanto;
    } else {
        const index = getPlayerIndex(quem);
        if (index !== -1) Dinheiro[index] = quanto;
    }

    salvarValores();
    atualizarTela();
}

// ---------------------------
// Função auxiliar: index do player
// ---------------------------
function getPlayerIndex(nome) {
    for (let i = 0; i < 4; i++) {
        if (`Player${i+1}` === nome) return i;
    }
    return -1;
}

// ---------------------------
// Eventos onchange nos inputs
// ---------------------------
for (let i = 0; i < 4; i++) {
    players[i].onchange = () => {
        playerNames[i] = players[i].value;
        salvarValores();
        atualizarTela();
    };
}

// ---------------------------
// Inicialização ao carregar página
// ---------------------------
window.onload = () => atualizarTela();
