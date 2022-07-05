let numeroRandom = parseInt(prompt('Ingrese el numero para ver si es divisible por 2, 3, 5 o 7'));

          
     if(numeroRandom%2==0){
        document.write('El numero es divisible por dos');
    }else{
          if(numeroRandom%3==0){
            document.write('El numero es divisible por tres');
     }else{
          if(numeroRandom%5==0){
            document.write('El numero es divisible por cinco');  
        } else{
            if(numeroRandom%7==0){
                document.write('El numero es divisible por siete');
            } else{
                document.write('el número no es divisible por 2, 3, 5 o 7')
        }
    }
}
}


