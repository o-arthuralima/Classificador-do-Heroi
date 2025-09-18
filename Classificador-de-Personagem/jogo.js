class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque indefinido";
        }

        const mensagem = `o ${this.tipo} atacou usando ${ataque}`;
        console.log(mensagem);
        return mensagem;
    }
}

const criarPersonagemBtn = document.getElementById("criarPersonagemBtn");
const saidaDiv = document.getElementById("saida");

criarPersonagemBtn.addEventListener("click", () => {

    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const tipo = document.getElementById("tipo").value;

    if (!nome || !idade) {
        alert("Por favor, preencha o nome e a idade do herói.");
        return;
    }

    const heroi = new Heroi(nome, idade, tipo);

    const resultado = heroi.atacar();
    saidaDiv.textContent = resultado;
});