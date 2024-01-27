/*
    01 - convert to binary

    @function translateBinary(n)
    função que receba um numero e retorne sua transcrição em binário

*/

function translateBinary(n){

    return n.toString(2);
}

console.log(translateBinary(42))
console.log(translateBinary(2))
console.log(translateBinary(23))


/*
    02 - prime number

    @function isprime(n)
    função que verifica se um numero é primo ou não

*/

function isprime(n){

    let arr = [];

    for ( let i=0; i <= n; i++){
        if(n%i == 0){
            arr.push(i);
        }
    };

    
    return arr.length > 2 ? false : true;
};

console.log(isprime(10))
console.log(isprime(8))
console.log(isprime(27))



/*
    03 - snakecase to pascal

    @function snakeToPascal(word)
    transcreva snakeCase para pascal
    snakecase => "hello_world"
    pascal => "HelloWorld"

*/

function snakeToPascal(word){

   
    let split = word.replaceAll("_", " ").split(' ');

    let resp = split.map((word) => {
        return word.substring(0,1).toUpperCase().concat(word, substring(1));
    });

    return resp.join('')
};

console.log(snakeToPascal("hello_world"))


/*
    04 - find the Unique number

    @function findUnique(list)
    a função deverá receber uma lista de valores e retornar apenas o valor diferente
    se houver


*/

function FindUnique(list){

    let unique = {}

    /*
        para cada elemento é criado um index no objeto unique e incrementado
        a quantidade de vezes que o elemento aparece
    */
    list.forEach((el) => unique[el] = unique[el] ? unique[el] + 1 : 1);

    let resp = {}

    /*
        depois de pronto o objeto, basta percorrer o objeto a procura do elemento
        cujo a incrementação é igual a 1, ou seja que apareceu somente 1 vex
        e atribuir esse elemento a variavel resp
    */
    for(i in unique){
        if(unique[i] === 1){
            resp = i;
        } 
    }

    return resp
}

console.log(FindUnique([1,1,1,1,2,1,1]))
console.log(FindUnique([1,1,1,1,2,1,1]))
console.log(FindUnique([3,2,2,2]))


/*
    05 - digit count

    @function countDigits(n)
    funcao que recebe um numero e retorne a quantidade de caracteres 0-9

*/

function countDigits(n){

    let arr = [];
    arr.push(n);

    let req = arr.toString().split('');

    return req.length
};

console.log(countDigits(932121))
console.log(countDigits(93))


/*
    06 - find the second
    
    @function findSecond(list)
    funçaõ que recebe um array de numeros e retorna o segundo maior valor que aparecer no array
    exm: ([2, 45, 2, 3, 12, 33]) --> 33

*/

function findSecond(list){

    list.sort((a,b) => {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });

    return list[list.length - 2];

}

console.log(findSecond([42, 2, 57, 1000]))
console.log(findSecond([3, 4, 67, 8, 9, 10]))


/*
    07 - palindrono word

    @function Palindrono(str)
    fução que verifica se uma palavra é palindrono ou não, retornando true ou false
    exm: "eye" --> true
    exm : "codict" --> false

*/

function Palindrono(str){
    
    let palindro = str.split(/\s+/).join('');

    let req = palindro.split('');

    let reverse = req.map((item, indice, array) => {
        return array[array.length - indice - 1];
    });


    return JSON.stringify(req) === JSON.stringify(reverse);
}

console.log(Palindrono("race car"))
console.log(Palindrono("eye"))
console.log(Palindrono("codict"))


/*
    08 - format the phone number

    @function PhoneNumberFormat(phone)
    função que recebe um numero e formata-o para numero de telefone
    exm: ("0987654321") --> (098) 765 4321

*/

function PhoneNumberFormat(phone){

    let phoneNumber = /(\d{3})(\d{3})(\d{4})/g;
    let formatNumber = "\($1\) $2 $3";

    return phone.replace(phoneNumber, formatNumber);
}

console.log(PhoneNumberFormat("0987654321"))


/*
    09 - reflection

    @function reflection(arr)
    função que retorna um array espelhado
    exm: ([1,2]) --> [1,2,2,1]

*/

function reflection(arr){

    let array = arr;
    let reverse = arr.map((item, indice, array) => {
        return array[array.length - indice - 1];
    });

    return array.concat(reverse);
}

console.log(reflection([1,2,3]))
console.log(reflection([32, 3, 4]))


/*
    010 - celcius to fahrenheit

    @function CelsiusToFahrenheit(c)
    função que converte celsius para fahrenheit

*/

function CelsiusToFahrenheit(c){

    return  ( c * (9/5)) + 32;
}

console.log(CelsiusToFahrenheit(10))
console.log(CelsiusToFahrenheit(45))