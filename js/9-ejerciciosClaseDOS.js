function countVowel(str) { 

    const count = str.match(/[aeiou]/gi).length;

    return count;
}

const string = prompt('Enter a string: ');

const result = countVowel(string);

document.write(result);

//ESTO LO ENTENDÍ PERO SÉ QUE NO LO VIMOS EN CLASES. 