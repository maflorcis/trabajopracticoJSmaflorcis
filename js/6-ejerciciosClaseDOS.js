let numero1 = parseInt(prompt('Ingrese el primer numero'));
let numero2 = parseInt(prompt('Ingrese el segundo numero'));
let numero3 = parseInt(prompt('Ingrese el tercer numero'));

if(numero1 > numero2 && numero3){
    document.write('El primer número es el mayor');
    }else{
        if(numero2 > numero1 && numero3){
        document.write('El segundo número es mayor');
        }else{
            document.write('El número1 tres es mayor');
        }
    }