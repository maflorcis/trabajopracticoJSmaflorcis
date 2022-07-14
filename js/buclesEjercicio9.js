/*
9- Crea un script que escriba los números del 1 al 500, que indique cuáles son
múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por
ejemplo :
1
2
3
4 (Múltiplo de 4)
5-
————————————————————-
6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10
*/

document.write("<hr>");

let i;
let j = 500;
let rep = 0;

for (i = 1; i <= j; i++) {
  document.write(i);

  if (i % 4 == 0) {
    document.write(" (Multiplo de 4)");
  }

  if (i % 9 == 0) {
    document.write(" (Multiplo de 9)");
  }

  document.write("<br>");

  if (i % 5 == 0) {
    document.write("<hr>");
  }
}

//IMPRIMOS UNA LÍNEA HORIZONTAL
//DECLARAMOS LAS VARIABLES
//IMPRIMIMOS EL NÚMERO i
//BUCLE DESDE 1 HASTA j
//SI EL RESTO DE DIVIDIR i/4 ES IGUAL A 0
//SI EL RESTO DE DIVIDIR i/9 ES IGUAL A 0
//IMPRIMIMOS UN SALTO DE LÍNEA
//SI ES MÚLTIPLO DE 5 IMPRIMIMOS UNA LÍNEA HORIZONTAL
