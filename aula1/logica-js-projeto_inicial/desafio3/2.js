let nome = prompt('What is your name ?');
console.log(`Hello ${nome}`);
alert(`Hello ${nome} Welcome to programm World !`);

let lingua = prompt('Qual linguagem de programação vc prefere ?');
console.log(`A linguagem escolhida foi ${lingua}`);
alert(`${nome} Parabens você escolheu ${lingua}`);

let valor1 = parseFloat(prompt('Digite um valor ?'));
let valor2 = parseFloat(prompt('Digite um valor ?'));

let num1 = valor1; 
let num2 = valor2;

// let soma = num1 - num2;
let result = num1 - num2;

console.log (`A subtração de ${num1} - ${num2} é ${result}`);
alert (`A some de ${valor1} - ${valor2} é = ${result}`)

if(!isNaN(result) > 0){
    alert('positivo');
}else if(result == 0){
    alert('igual a zero');
}else{
   alert('negativo');
}