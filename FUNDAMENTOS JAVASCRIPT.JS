console.log("===== QUESTÃO 1 =====");

const PORTA_SERVIDOR = 3000;


let statusConexao = false;

console.log("Status inicial da conexão:", statusConexao);

statusConexao = true;

console.log("Status após inicialização:", statusConexao);



console.log("\n===== QUESTÃO 2 =====");

let nomeUsuario = "Ana Maria";
let idade = 17;
let ativo = true;
let ultimoAcesso = null;
let tokenRecuperacao;
let idTransacao = 9007199254740991n;


console.log("Tipo de nomeUsuario:", typeof nomeUsuario);
console.log("Tipo de idade:", typeof idade);
console.log("Tipo de ativo:", typeof ativo);
console.log("Tipo de ultimoAcesso:", typeof ultimoAcesso);
console.log("Tipo de tokenRecuperacao:", typeof tokenRecuperacao);
console.log("Tipo de idTransacao:", typeof idTransacao);
valor.


console.log("\n===== QUESTÃO 3 =====");

let precoItemString = "49.90";
let quantidadeString = "3";

let precoItem = parseFloat(precoItemString);
let quantidade = parseInt(quantidadeString);

let resultado = precoItem * quantidade;

console.log(
    `O valor total do pedido é R$ ${resultado.toFixed(2)} e o tipo da variável de resultado é ${typeof resultado}.`
);



console.log("\n===== QUESTÃO 4 =====");

const idUsuario = 101;
const nomeCompleto = "João da Silva";
const email = "joao@email.com";
const isAdmin = true;

let pontosExperiencia = 120;

pontosExperiencia += 15.5

console.log("===== FICHA DO USUÁRIO =====");
console.log(`ID: ${idUsuario}`);
console.log(`Nome completo: ${nomeCompleto}`);
console.log(`E-mail: ${email}`);
console.log(`Administrador: ${isAdmin}`);
console.log(`Pontos de experiência: ${pontosExperiencia}`);
console.log("============================");
