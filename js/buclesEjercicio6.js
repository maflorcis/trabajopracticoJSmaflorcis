/*6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
1
22
333
4444
55555
666666
…….
*/

//DECLARAMOS LAS VARIABLES
let i;
let rep;

for (i = 1; i <= 30; i++) {
  for (rep = 0; rep < i; rep++) {
    document.write(i);
  }

  document.write("<br>");
}

//BUCLE FOR PARA RECORRER DE 1 A 30
//BUCLE INTERIOR PARA HACER LAS REPETICIONES
//IMPRIMIMOS EL NÚMERO i, i VECES
//IMPRIMIMOS UN SALTO DE LÍNEA
