let n1 = parseInt(prompt("Escribe un número"));
if (n1 % 2 === 0 || n1 % 3 === 0 || n1 % 5 === 0 || n1 % 7 === 0) {
if (n1 % 2 === 0) {
document.write("Es divisible por 2. ");
}
if (n1 % 3 === 0) {
document.write("Es divisible por 3. ");
}
if (n1 % 5 === 0) {
document.write("Es divisible por 5. ");
}
if (n1 % 7 === 0) {
document.write("Es divisible por 7. ");
}
} else {
document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}