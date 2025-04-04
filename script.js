console.log('funcionando')
//atividade 1
/*function somarNumeros(){
    let total = 0;
    let continuar = true;
    
    while (continuar) {  
         
        let numero = prompt("Digite um número para somar (ou 'sair' para finalizar):");  
  
        if (numero.toLowerCase() === 'sair') {  
            continuar = false;  
        } else {  
            
            let valor = parseFloat(numero);  

            
            if (!isNaN(valor)) {  
                total += valor;   
            } else {  
                alert("Por favor, digite um número válido."); 
            }  
        }  
    }  

    
    alert("A soma total é: " + total);  
}  

somarNumeros(); */
//atividade 2
/*let tempo = 10;  


const interval = setInterval(() => {  
     
    console.log(tempo);  

     
    tempo--;  

    
    if (tempo < 0) {  
        clearInterval(interval);  
        console.log("Lançamento!"); 
    }  
}, 1000); */

//atividade 3 
const num = parseFloat(prompt('Qual foi o ganho bruto anual da empresa?'));  
const mes1 = parseFloat(prompt('Digite os gastos do mês janeiro'));  
const mes2 = parseFloat(prompt('Digite os gastos do mês fevereiro'));  
const mes3 = parseFloat(prompt('Digite os gastos do mês março'));  
const mes4 = parseFloat(prompt('Digite os gastos do mês abril'));  
const mes5 = parseFloat(prompt('Digite os gastos do mês maio'));  
const mes6 = parseFloat(prompt('Digite os gastos do mês junho'));  
const mes7 = parseFloat(prompt('Digite os gastos do mês julho'));  
const mes8 = parseFloat(prompt('Digite os gastos do mês agosto'));  
const mes9 = parseFloat(prompt('Digite os gastos do mês setembro'));  
const mes10 = parseFloat(prompt('Digite os gastos do mês outrubro'));  
const mes11 = parseFloat(prompt('Digite os gastos do mês novembro'));  
const mes12 = parseFloat(prompt('Digite os gastos do mês dezembro'));  

const gastoAnual = (mes1 + mes2 + mes3 + mes4 + mes5 + mes6 + mes7 + mes8 + mes9 + mes10 + mes11 + mes12);  

const lucro = (num - gastoAnual)

if (num < gastoAnual) {  
    console.log('Você perdeu dinheiro esse ano');  
} else {  
    console.log('Você ficou no lucro com ' + lucro);  
}