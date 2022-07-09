/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con
“cancelar” deberá indicarse la suma total de los números introducidos.*/

var suma = 0; //DECLARAMOS LA VARIABLE SUMA Y BUCLE DO WHILE PARA INTRODUCIR VARIOS

do {
  var numero = prompt("Introduce un número");

  if (Number(numero) == numero) {
    numero = Number(numero);

    suma = suma + numero;
  } else {
    if (numero != undefined) {
      alert(numero + " No es un numero");
    }
  }
} while (numero != undefined);

document.write(suma);

//PEDIMOS EL NÚMERO POR TECLADO
//COMPROBAMOS QUE LO INTRODUCIDO ES UN NÚMERO
//CONVERTIMOS EL NÚMERO EN INTEGER (POR SI ACASO)
//SUMAMOS LO QUE HAY EN LA VARIABLE SUMA CON ESE NÚMERO
//SI LO INTRODUCIDO NO ES UN NÚMERO
//SI SE PULSÓ ACEPTAR SIN PONER UN NÚMERO VÁLIDO
//VOLVEMOS ARRIBA MIENTRAS NO SE PULSE CANCELAR
//SI SE PULSÓ CANCELAR SALE DEL BUCLE E IMPRIME EL RESULTADO
