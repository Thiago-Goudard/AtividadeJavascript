console.log('funcionando')
//atividade 1
function somarNumeros(){
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

somarNumeros();  