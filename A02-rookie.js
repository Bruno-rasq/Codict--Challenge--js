/*
    01 - Get Initials

    @function GetInitials(name)
    a função recebe uma string com o nome de uma pessoa @name
    e devolve as iniciais do nome

    test -1 ("john doe") => "J.D"
    test -2 ("bill gates") => "B.R"

*/

function GetInitials(name){

    let arr = name.split(' ')
    let initials = arr.map(name => name[0])

    return initials.join('.').toLowerCase()

};

console.log(GetInitials("bill gates"));
console.log(GetInitials("john doe"));



/*
    02 - find The Smallest

    @function findTheSmallest(arr)
    encontre o menor valor de uma array

    test - 1 ([2, 4, 3, 5, 22, 10]) => 2
    test - 2 ([2, 4, 3, 77, 5, 1]) => 1

*/

function FindTheSmallest(arr){

    return Math.min(...arr);
};

console.log(FindTheSmallest([2, 4, 3, 5, 22, 10]));
console.log(FindTheSmallest([2, 4, 3, 77, 5, 1]));



/*
    03 - remove first and last

    @function removeChar(str)
    a função recebe uma string como parametro @str e remove o caracter iniciale final

    test - 1 ("javascript") => "avascrip"
    test - 2 ("turtles") => "urtle"

*/

function removeChars(str){

    return str.slice(1, str.length - 1);
};

console.log(removeChars("javascript"));
console.log(removeChars("turtles"));



/*
    04 - revese All Words

    @function reveseAllWords(strg)
    a função recebe uma strings @strg e então inverte a ordem das palavras
    sem deformar as mesmas

    test - 1 ("bom dia") => "dia bom" 
    test - 2 ("dream big and dare to fail") => "fail to dare and big dream" 

*/

function reverseAllWord(strg){

    return strg.split(' ').reverse().join(' ');
};


console.log(reverseAllWord("bom dia"))
console.log(reverseAllWord("dream big and dare to fail"))


/*
    05 - translate DNA

    @function translateDNA(dna)
    a funçaõ deverá transcrever DNA para RNA
    // nota:na estrutura rna a terminação quimica (t) é substituida por (U);

    test - 1 ("CGATAT") => "CGAUAU" 
    test - 2 ("GCAT") => "CGAU" 

*/

function translateDNA(dna){

    let arr = dna.split('');
    let rna = arr.map((caracter) => {
        return caracter.replace("T", "U");
    });

    return rna.join("");
};

console.log(translateDNA("CGATAT"))
console.log(translateDNA("GCAT"))



/*
    06 - count Vowels

    @function countVowels(str)
    a função recebe uma string e retorna a quantidade de vogais presnetes na mesma

    test - 1 (" frase teste") => 4 
    test - 2 ("aeiou") => 5

*/

function CountVogal(str){

   
    let arr = str.toLowerCase().split('');

    let response = arr.filter((char) => {
        if( char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
            return char
        };
    });

    return response.length

};

console.log(CountVogal(" frase teste"))
console.log(CountVogal("aeiou"))


/*
    07 - get Average 

    @function getAverage(arr)
    a função recebe um array numerico e retorna a média dos valores

    test - 1 ([1,2,3,4,5]) => 3
    test - 2 ([2,2,2,2]) => 2

*/

function getAverage(arr){

    let response = 0;
    for (n of arr) {
        response += n;
    };

    return response/arr.length;
};

console.log(getAverage([1, 2, 3, 4, 5]))
console.log(getAverage([2,2,2,2]))


/*
    08 - shortest Word

    @function shortestWord(str)
    a função receberá uma string e deverá retornar o tamanho da menor palavra que a string
    conter

    test - 1 ("string teste para verificar o tamanho das palavras em umm array") => 1
    test - 2 (" alguma coisa") => 5

*/

function shortestWord(str){

    let arr = str.split(' ');
    let words = arr.map((word) => {
        return word.length;
    });

    return Math.min(...words);
};

console.log(shortestWord("string teste para verificar o tamanho das palavras em umm array"))
console.log(shortestWord(" alguma coisa"))


/*
    09 - return Two

    @function returnTwo(arr)
    a função recebe uma lista de valores e retorna uma nova lista com o menor e maior valor da
    lista anterior

    test - 1 ([2,4,6,20]) => [2,20]
    test - 2 ([3,5,1,88,33]) => [3,88]

*/

function returnTwo(arr){

    let smallest = Math.min(...arr);
    let biggest = Math.max(...arr);

    return [smallest, biggest];
};

console.log(returnTwo([2,4,6,20]))
console.log(returnTwo([3,5,1,88,33]))



/*
    010 - P Language

    @function PLanguage()
    função que recebe uma string e transcreve para a lingua do "p"
    nota: a lingua do "P" consiste em adicionar um "P" no inicio de cada palavra

    test - 1 ("simples é difirente de fácil") => "psimples pé pdifirente pde pfácil"
    test - 2 () => 

*/

function PLanguage(strg){

    let split = strg.split(' ');
    let response = split.map((s) => {
        let p = "P";
        return p + s;
    });

    return response.join(" ")
};

console.log(PLanguage("Simples é diferente de fácil"));