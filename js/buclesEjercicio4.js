/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con
“cancelar” deberá indicarse la suma total de los números introducidos.*/


var suma = 0; //DECLARAMOS LA VARIABLE SUMA

//BUCLE DO WHILE PARA INTRODUCIR VARIOS


do {
    var numero = prompt("Introduce un numero"); //PEDIMOS EL NÚMERO POR TECLADO
    
    if (Number(numero) == numero) { //COMPROBAMOS QUE LO INTRODUCIDO ES UN NÚMERO
        
        numero = Number(numero); //CONVERTIMOS EL NÚMERO EN INTEGER (POR SI ACASO)
      
        suma = suma + numero;   //SUMAMOS LO QUE HAY EN LA VARIABLE SUMA CON ESE NÚMERO
    }
    //SI LO INTRODUCIDO NO ES UN NÚMERO
    else {
    
        if (numero != undefined) { //SI SE PULSÓ ACEPTAR SIN PONER UN NÚMERO VÁLIDO
            alert(numero + " No es un numero");
        }
    }
//VOLVEMOS ARRIBA MIENTRAS NO SE PULSE CANCELAR
} while (numero != undefined);

document.write(suma); //SI SE PULSÓ CANCELAR SALE DEL BUCLE E IMPRIME EL RESULTADO