// function calcularIMC(peso, altura) {
//     let imc = peso / (altura * altura);
//     return imc;
// }

// function exibirTextoNaTela(tag, texto) {    
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
    
// }

// function exibirMensagemInicial(){
//     exibirTextoNaTela('h1', 'Calculadora IMC'); 
// }

// function calcularEAvailarIMC() {
//     let peso = parseFloat(document.querySelector('#pesoInput').value);
//     let altura = parseFloat(document.querySelector('#alturaInput').value);

//     if (isNaN(peso) || isNaN(altura)) {
//         exibirTextoNaTela('h1', 'Por favor, insira um peso e altura válidos.');
//         return;
//     }

//     let imc = calcularIMC(peso, altura);

//     if (imc < 18.5) {
//         exibirTextoNaTela('h1', 'Você está abaixo do peso!');
//     } else if (imc >= 18.5 && imc < 25) {
//         exibirTextoNaTela('h1', 'Seu peso está saudável.');
//     } else if (imc >= 25 && imc < 30) {
//         exibirTextoNaTela('h1', 'Você está com sobrepeso.');
//     } else {
//         exibirTextoNaTela('h1', 'Você está obeso.');
//     }
// }
// function limparCampo() {
//     peso = document.querySelector('#pesoInput');
//     altura = document.querySelector('#alturaInput');
//     peso.value = '';
//     altura.value = '';
// }

// function reiniciarJogo(){
 
//     limparCampo();
  
//     exibirMensagemInicial();
   
   
// }
function exibirMensagemInicial(){
  exibirTextoNaTela('h1', 'Jogo do número secreto');
}

function calcularDolar() {
    let valorDolar = parseFloat(document.querySelector('#dolarInput').value);
    const cotaDolar = 5.50; // Substitua pelo valor da cotação atual do Dólar
    if (!isNaN(valorDolar)) {
        exibirMensagemInicial(`${valorDolar} Dólares equivalem a ${valorDolar * cotaDolar} Reais.`);
        let valorReais = converterDolarParaReais(valorDolar, cotaDolar);
        document.querySelector('#reaisInput').value = valorReais.toFixed(2);
    }
}


function converterDolarParaReais(dolar, cotaDolar) {
  exibirMensagemInicial(`${dolar} * ${cotaDolar} `) ;
      
  }

  function exibirMensagemInicial(texto) {
    exibirTextoNaTela('h1', texto);
}
  function exibirTextoNaTela(tag, texto) {    
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
  }

  function exibirMensagemInicial(){
         exibirTextoNaTela('h1', 'Cotação Dolar'); 
  }
    
  