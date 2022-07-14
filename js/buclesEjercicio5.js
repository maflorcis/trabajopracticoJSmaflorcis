/* 5- Realizar una página con un script que calcule el valor de la letra de un número
de DNI (Documento nacional de identidad).
El algoritmo para calcular la letra del dni es el siguiente :
El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes: (T, R,
W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
Si lo introducido no es un número deberá indicarse con un alert y volver a
preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
*/


while (confirm("Click Aceptar para ingresar su DNI") == true) {
    let numero = parseInt(prompt("Ingrese su número de DNI: "));
    if (isNaN(numero) === false && numero >= 0 && numero <= 99999999) {
      if (numero % 23 == 0) alert("Le corresponde la letra T");
      if (numero % 23 == 1) alert("Le corresponde la letra R");
      if (numero % 23 == 2) alert("Le corresponde la letra W");
      if (numero % 23 == 3) alert("Le corresponde la letra A");
      if (numero % 23 == 4) alert("Le corresponde la letra G");
      if (numero % 23 == 5) alert("Le corresponde la letra M");
      if (numero % 23 == 6) alert("Le corresponde la letra Y");
      if (numero % 23 == 7) alert("Le corresponde la letra F");
      if (numero % 23 == 8) alert("Le corresponde la letra P");
      if (numero % 23 == 9) alert("Le corresponde la letra D");
      if (numero % 23 == 10) alert("Le corresponde la letra X");
      if (numero % 23 == 11) alert("Le corresponde la letra B");
      if (numero % 23 == 12) alert("Le corresponde la letra N");
      if (numero % 23 == 13) alert("Le corresponde la letra J");
      if (numero % 23 == 14) alert("Le corresponde la letra Z");
      if (numero % 23 == 15) alert("Le corresponde la letra S");
      if (numero % 23 == 16) alert("Le corresponde la letra Q");
      if (numero % 23 == 17) alert("Le corresponde la letra V");
      if (numero % 23 == 18) alert("Le corresponde la letra H");
      if (numero % 23 == 19) alert("Le corresponde la letra L");
      if (numero % 23 == 20) alert("Le corresponde la letra C");
      if (numero % 23 == 21) alert("Le corresponde la letra K");
      if (numero % 23 == 22) alert("Le corresponde la letra E");
    } else {
      alert("El texto ingresado no es un número de DNI válido");
    }
  }
  
  

  /*
  isNaN : usé esta función porque su mecánica es que intenta convertir el parámetro pasado a un número. Si el parámetro no se puede convertir, devuelve true; en caso contrario, devuelve false.
  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/isNaN
  La función isNaN() comprueba si una cadena dada es un número o no en JavaScript. La función isNaN() determina si el valor dado es un número o un número ilegal (Not-a-Number). La función genera como Verdadero para un valor NaN y devuelve Falso para un valor numérico válido.
  (DelfStack)
  Por lo tanto, tomo una cifra que proviene de un prompt (con parseInt) y la paso por la función isNaN :
  a) Si el resultado es false: entonces quiere decir que es una cifra numérica,  y se acumula en la variable numero.
  b) Por el contrario, si es true: entonces quiere decir que no es una cifra numérica, no se puede convertir a número, lo que deriva en que se ejecute el alert. 
  */

//EXPLICADO POR LA PROFE

//Ingresar un DNI debe ser entre 0 y 99999999

//Calcular el resto de la división entera entre el número y el número 23

/*el resultado de 0 a 22, corresponde a un a de las siguientes letras: (T, R,
W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)*/

//si el dni cargado no es un número mostrar con un alert

//repetir todo el proceso hasta que el usuario presione cancelar



/* ALTERNATIVA EN CLASE
do{

let numero = parseInt(prompt('Ingrese un numero de DNI, entre (0 y 99999999'));
console.log(numero);
if( numero>0 && numero <= 99999999 ){

let resultado = numero % 23;

console.log(resultado);

switch(resultado){
  case 0:
      document.write('La letra que corresponde a su DNI es la T, DNI ingresadp '+numero);
      console.log('T');
      break;
      case 01:
      document.write('La letra que corresponde a su DNI es la r, DNI ingresadp '+numero);
      break;
      case 2:
      document.write('La letra que corresponde a su DNI es la w, DNI ingresadp '+numero);
      break;
      case 3:
      document.write('La letra que corresponde a su DNI es la a, DNI ingresadp '+numero);
      break;
      case 4:
      document.write('La letra que corresponde a su DNI es la g, DNI ingresadp '+numero);
      break;
      case 5:
      document.write('La letra que corresponde a su DNI es la m, DNI ingresadp '+numero);
      break;
      case 6:
      document.write('La letra que corresponde a su DNI es la y, DNI ingresadp '+numero);
      break;
      case 7:
      document.write('La letra que corresponde a su DNI es la f, DNI ingresadp '+numero);
      break;
      case 8:
      document.write('La letra que corresponde a su DNI es la d, DNI ingresadp '+numero);
      break;
      case 9:
      document.write('La letra que corresponde a su DNI es la x, DNI ingresadp '+numero);
      break;
      case 10:
      document.write('La letra que corresponde a su DNI es la b, DNI ingresadp '+numero);
      break;
      case 11:
      document.write('La letra que corresponde a su DNI es la n, DNI ingresadp '+numero);
      break;
      case 12:
      document.write('La letra que corresponde a su DNI es la j, DNI ingresadp '+numero);
      break;
      case 13:
        document.write('La letra que corresponde a su DNI es la s, DNI ingresadp '+numero);
        break;
        case 14:
      document.write('La letra que corresponde a su DNI es la v, DNI ingresadp '+numero);
      break;
      case 15:
      document.write('La letra que corresponde a su DNI es la n, DNI ingresadp '+numero);
      break;
      case 16:
      document.write('La letra que corresponde a su DNI es la q, DNI ingresadp '+numero);
      break;
      case 17:
      document.write('La letra que corresponde a su DNI es la b, DNI ingresadp '+numero);
      alert('La letra corresponde a su DNI es la V, DNI ingresado' + numero)
      break;
      case 18:
      document.write('La letra que corresponde a su DNI es la l, DNI ingresadp '+numero);
      break;
      case 19:
      document.write('La letra que corresponde a su DNI es la h, DNI ingresadp '+numero);
      break;
      case 20:
      document.write('La letra que corresponde a su DNI es la n, DNI ingresadp '+numero);
      break;
      case 21:
      document.write('La letra que corresponde a su DNI es la c, DNI ingresadp '+numero);
      break;
      case 22:
      document.write('La letra que corresponde a su DNI es la k, DNI ingresadp '+numero);
      break;
      case 23:
      document.write('La letra que corresponde a su DNI es la e, DNI ingresadp '+numero);
      break;

      default:
        alert('Ingresaste una opción errónea')

}
}else{

  alert('Ingresó un número erróneo')

}
}while((confirm('Desea ingresar un DNI?')))

*/