let edad = parseInt(prompt("Escribe tu edad"));

	if (edad >= 18) {
		//IMPRIME EN PANTALLA EL MENSAJE
		document.write("Puedes conducir");
	}
//SINO
else {
	//MUESTRA UN MENSAJE
	document.write("Introduce un numero válido");
}

do {
	//PIDE UNA NOTA POR TECLADO Y LA GUARDA EN LA VARIABLE nota
	let nota = prompt("Introduce tu nota");
	//SI SE INTRODUJO UN NÚMERO
	if (Number(nota) == nota) {
		//SI LA NOTA ES ENTRE 0 Y 10 COMPRUEBA EL RANGO Y DA UN MENSAJE
		if (nota > 0 && nota <= 10) {
			if (nota < 3) {
				alert("Muy deficiente");
			}
			else if (nota < 5) {
				alert("Insuficiente");
			}
			else if (nota < 6) {
				alert("Suficiente");
			}
			else if (nota < 7) {
				alert("Bien");
			}
			else if (nota < 9) {
				alert("Notable"); 5
			}
			else if (nota >= 9) {
				alert("Sobresaliente");
			}
		}
		//SI LA NOTA NO ES ENTRE 0 Y 10
		else {
			alert("Nota erronea");
		}
	}
	//SI LA NOTA INTRODUCIDA NO ES UN NÚMERO
	else {
		//SI SE HA PULSADO ACEPTAR SIN INTRODUCIR NADA
		if (nota != undefined) {	//No es Undefined cuando se pulsa aceptar.
			alert("Introduce un numero valido");
		}
    }
} while (nota != undefined);