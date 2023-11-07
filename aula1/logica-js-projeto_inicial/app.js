alert('Boas vindo ao jogo secreto');
let numeroMaximo = 5000;
let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
console.log(numeroSecreto);
let chute;
let tentativas =  1;


//equanto o chute não for igual ao numero secreto
while (chute != numeroSecreto){
        chute = prompt(`Digite um numero de 1 a ${numeroMaximo}`);
       

            // se chute for igual ao numero secreto
        if (chute == numeroSecreto ) {
            break;
                        
        }  else{
            if (chute > numeroSecreto) {
                alert(`${chute} É maior do que o numero secreto`);
        } else {
                alert(`${chute} É menor do que o numero secreto`);
        }           
        tentativas++;    
         
            }            
        }
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        alert(`Isso ai ! Você descobriu o número secreto 
        ${numeroSecreto}
        com ${tentativas} ${palavraTentativa}.`);
        // if (tentativas <= 1){
        //     alert(`Isso ai ! Você descobriu o número secreto 
        //     ${numeroSecreto}
        //     com ${tentativas} tentativa.`);

        // }else 
        //     alert(`Isso ai ! Você descobriu o número secreto 
        //     ${numeroSecreto}
        //     com ${tentativas} tentativas.`);
            

   
       