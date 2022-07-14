/* 10- Realiza un script que pida número de filas y columnas y escriba una tabla. 
Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. 
Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
*/


let fila =parseInt(prompt("Inserte el número de filas deseado: "))
let columna =parseInt(prompt("Inserte el número de columnas deseado: "))
let numeroCelda = fila*columna;

const createTable = (row, col) => {
    let body = document.body;
    let tbl = document.createElement("table");
  
    for (let i = 0; i < row; i++) {
        let tr = tbl.insertRow();
      for (let j = 0; j < col; j++) {
        let td = tr.insertCell();
        td.appendChild(document.createTextNode(numeroCelda--));
        td.style.border = "1px solid black";
      }
    }
    body.appendChild(tbl);
  };

  createTable(fila, columna);


/*
  Investigué en 
  https://stackoverflow.com/questions/14643617/create-table-using-javascript
*/

/* ALTERNATIVA EN CLASE 10- Realiza un script que pida número de filas y columnas y escriba una tabla. 
Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. 
Si, por 

//Pedir al usuario filas y un numero de columnas

//dibujar una tabla

//cada celda debe tener un número descendente de multiplicar filas por columnas
*/

/*

let filas = parseInt(prompt("ingrese un número de filas"));
let columnas = parseInt(prompt("Ingrese un número de columnas"));
let resultado = filas * columnas; //a las variables las debo crear arriba para que se puedan usar

document.write(`<table> <tbody>`);

//este se encarga de dibujar las filas

for (let indiceFila = 0; indiceFila < filas; indiceFila++){
  document.write(`<tr>`);
for (let indiceColumna = 0; indiceColumna < columnas; indiceColumna++) {
  document.write(`<td>${resultado}</td>`); //document.write('<td>'+resultado+'/td>');
  resultado--;
}

document.write(`</tr>`);
}


document.write(`<table><tbody>`);
*/