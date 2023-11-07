//Desafio 1
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';
//Desafio 3
b = 5;
function clicandoNoBotaoConsole(){
    a = b;
    console.log(`O botão console foi clicado${a}`)
}
//Desafio 4
function menssagemAlert(){
    alert('Eu amo JS !');
}
//Desafio 5
function executaPrompt(){
    let cidade = prompt ('Digite uma cidade Brasileira');
    alert(`Eu já estive em ${cidade} e lembrei de você !`)
}
//Desafio 6
function somaMaisUm(){
    let num1 = prompt('Digite um numero')
    let num2 = prompt('Digite mais um numero')
    valor1 = parseFloat(num1);
    valor2 = parseFloat(num2);
soma = valor1 + valor2;
alert(`A soma do ${valor1} + ${valor2} é ${soma}`)
}

