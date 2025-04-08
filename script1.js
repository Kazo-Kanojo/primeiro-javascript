let nome = "joao";
const idade = 30;
let mensagem = "ola, " +nome+"!voce tem: "+idade+"anos de vida!!";
console.log(mensagem)

// provando a baixa tipagem do js
let texto = 'isso é uma string';
let texto2 = "isso tambem, é uma string";
let numeroInteiro = 10;
let numeroDecimal = 3.14;
let isAtivo =  true;
let nulo = null;
let indefinido;

console.log(typeof texto)
console.log(typeof numeroInteiro)
console.log(typeof numeroDecimal)
console.log(typeof isAtivo)
console.log(typeof nulo)
console.log(typeof indefinido)
console.log(typeof texto2)

// operadores

let a = 5;
let b = 6;
console.log("soma ",a+b);
console.log("subtração", a-b);
console.log("Multiplicação,", a*b);
console.log("devisão", a/b );
a++
console.log("incremento de A", a);

const tituloElemento = document.getElementById("tituloDinamico"); // pegando o elemto pelo id 
tituloElemento.textContent = "texto alterado pelo js" //alera o texto do h2
tituloElemento.style.color = "gray"; //aletyra a cor do texto para verde 

const botaoElemento = document.getElementById('umBotao'); //seleciona o botãio pelo id
botaoElemento.addEventListener('click',function(){
    alert("botão foi clicado!"); // quando o botão for clicado, uma caixa de alerta ira aparecer
})