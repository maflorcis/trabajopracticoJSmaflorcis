/*17- Realiza un script que muestre la posición de la primera vocal de un texto
introducido por teclado.*/

    
        let texto = "";                   //variable para encontrar vocales en el texto escrito por el usuario
        let frase = prompt("Ingresá un texto",""); //Para que el usuario ingrese su frase
        frase = frase.toLocaleLowerCase();         //Pasamos todo a minúsculas
        
        for(var vocal = 0; vocal < frase.length; vocal++)   
        {
        
        texto = frase.charAt(vocal);
        
        if(texto == 'a' || texto == 'e' || texto == 'i'|| texto == 'o' || texto == 'u')  
        
        break;}

        //Hacemos el loop para que busque el caracter desde el cero al largo de la frase e incremente en uno
        //texto se cambia a cada caracter
        //el condicional es que cada caracter sea igual a una vocal y si lo encuentra se detiene
        

        if( vocal < frase.length )  
        document.write("La posición de la primera vocal es "+(vocal+1)+"<br>");else  
        document.write("No se encontraron vocales");   

        //si la vocal es menor al largo de la frase, se escribe el mensaje que dice la posición de la vocal
