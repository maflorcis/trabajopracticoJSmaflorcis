/*
14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo
– entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué
tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

*/


let cadena = prompt("Introduce un texto:");
let numchar = cadena.length;    
let caracter;
let i;

for (i = 0; i < numchar; i++) {
caracter = cadena.charAt(i);    
if (i == numchar - 1) {
    document.write(caracter);
}
else {
    document.write(caracter + "-");
}
}

//Devuelve la longitud del string.
    //recupera el caracter i del string.