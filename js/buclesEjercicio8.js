/*
8- Crea script para generar pirámide siguiente con los números del 1 al número
que indique el usuario (no mayor de 50)
1
12
123
1234
12345
123456
……
*/

let numrep = prompt("Introduce numero de repeticiones");
let rep

if (Number(numrep) == numrep) {
  if (numrep > 0 && numrep <= 50) {
     let rep, i;

    for (i = 0; i <= numrep; i++) {
      for (rep = 1; rep <= i; rep++) {
        document.write(rep);
      }
      document.write("<br>");
    }
  } else {
    alert("El número introducido no es válido");
  }
}

//PEDIMOS EL NÚMERO POR TECLADO
//SI LO INTRODUCIDO ES UN NÚMERO
//SI ES UN NÚMERO ENTRE 1 Y 50
//BUCLE QUE VA DESDE 0 HASTA numrep
//BUCLE DESDE 1 HASTA i
