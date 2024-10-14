const readline = require('readline-sync');
// Essa é a classe que vai guardar as características do herói como o nome, idade e tipo.
class Heroi {
    // método construtor
    constructor(nome, idade, tipo) {
        this.nome = nome;  
        this.idade = idade;  
        this.tipo = tipo || this.nome;  
    }

    // Como o tipo do herói são caracteres e não números, acredito que com o switch seja mais fácil de executar o desafio, por ser mais prático.
    atacar() {
        let ataque; //var ataque que recebe o seu valor baseada no tipo escolhido pelo usuário.
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';  
                break;
            case 'guerreiro':
                ataque = 'espada';  
                break;
            case 'monge':
                ataque = 'artes marciais';  
                break;
            case 'ninja':
                ataque = 'shuriken';  
                break;
            default:
                ataque = 'os punhos'; // não sabia o que deixar no default, escolhi essa opção para caso de algum erro de digitação 
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`); // saída
    }
}
// função que começa o código
function iniciarAventura() {
    const nome = readline.question('Digite o nome do heroi: ');
    const idade = readline.questionInt('Digite a idade do heroi: ');
    const tipo = readline.question('Digite o tipo do heroi (guerreiro, mago, monge, ninja): ').toLowerCase();

    const heroi = new Heroi(nome, idade, tipo);
    heroi.atacar();
    return heroi.tipo;
}

function main() {
    let continuar = 's';  // Variável para controlar a repetição
    let ultimoTipo = '';  
    // optei por fazer essa parte para testar se todos os tipos demonstravam seus respectivos ataques.
    while (continuar === 's') {
        ultimoTipo = iniciarAventura(); 
        continuar = readline.question('Deseja refazer o algoritmo? (s/n): ').toLowerCase();
        if (continuar === 'n') {
            console.log(`Até a próxima batalha, ${ultimoTipo}!`);  // adicionei o tipo do último herói citado, quebrei a cabeça para essa simples mudança, enfim, detalhes! 
        }
    }
}

main();
