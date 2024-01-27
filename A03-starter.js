/*
    01 - swap Vowels

    @function swapVowels(word)
    a função receberá uma string, e deverá trocar as vogais por numeros
    a=1, e=2, i=3, o=4, u=5

    test -1 ("hello world!") => 'h2ll4 w4rld!'
    test -2 ("codict") => "c4d3ct"

*/

function swapVowels(word){
    
    let arr = word.toLowerCase().split('');
    let response = arr.map((char) => {
        switch (char){
            case 'a':
                char = 1;
                break;
            
            case 'e':
                char = 2;
                break;

            case 'i':
                char = 3;
                break;

            case 'o':
                char = 4;
                break;
                
            case 'u':
                char = 5;
                break;

            default:
        };

        return char;
    });

    return response.join('')
}

console.log(swapVowels("hello world!"));
console.log(swapVowels("codict"));



/*
    02 - Sort List by length

    @function SortList(list)
    a função recebe uma lista de strings e deverá ordena-la por tamanho das palavras

    test -1 (["eye", "mouse", "a"]) => ["a", "eye", "mouse"]
    test -2 (["eye", "ba", "a"]) => ["a", "ba", "eye"]

*/

function SortList(list){

    let response = list.sort((a,b) => {
        if(a.length > b.length) return 1;
        if(a.length < b.length) return -1;

        return 0;
    });

    return response
}

console.log(SortList(["eye", "mouse", "a"]));
console.log(SortList(["eye", "ba", "a"]));



/*
    03 - square It All

    @function squareItAll(n)
    função que recebe um numero e devolve uma string formada pelo quadrado de cada digito

    test -1 (67) => 3649
    test -2 (123) => 149

*/

function squareItAll(n){

    let split = (''+n).split('');
    let response = split.map((n) => {
        return n ** 2;
    });

    return response.join('')
}

console.log(squareItAll(67))
console.log(squareItAll(123))



/*
    04 - remove the Vowels

    @function removeVowels(str)
    função que remova todas as vogais de ums string

    test -1 ("vowels") => "vwls"
    test -2 ("developmement") => "dvlpmnt"

*/

function removeVowels(str){

    let lower = str.toLowerCase();
    return lower.replace(/(a|e|i|o|u)/gi, '');
}

console.log(removeVowels("vowels"))
console.log(removeVowels("development"))



/*
    05 - remove the dups

    @function removedups(list)
    função que recebe um array e remove todos os valores duplicados

    test -1 ([11, 23, 4, 4, 3, 3, 5]) => [11, 23, 4, 3, 5]
    test -2 ([23, 23, 4, 4, 5]) => [23, 4, 5]

*/

function removedups(list){

    let resp = list.filter((valor, indice, self) => {
        return self.indexOf(valor) === indice;
    });

    return resp
}

console.log(removedups([11, 23, 4, 4, 3, 3, 5]))
console.log(removedups([23, 23, 4, 4, 5]))


/*
    06 -  all equals

    @function allEquals(list)
    a funcao receberá uma lista numerica como parametro e deverá
    devolver um boolean caso todos os valores da lista forem iguais.

    test 1 - ([1,2,1,1,1,1]) => false
    test 2 - ([2,2,2]) => true
*/

function allEquals(list){

    return list.every((value) => value == list[0]);
}

console.log(allEquals([1,2,1,1,1]))
console.log(allEquals([2,2,2]))



/*
    07 - return first char

    @function firstChar(list)
    função que recebe um array de strings e retorna um novo array apenas com o primeiro
    caracter de cada string

    test -1 (["eye", "mouse", "key"]) => ["e", "m", "k"]
    test -2 () =>

*/

function firstChar(list){
    let resp = list.map((word) => {
        return word.slice(0,1);
    });

    return resp
};

console.log(firstChar(["eye", "mouse", "key"]))



/*
    08 - sum of the first nth

    @function SumRange(list, n)
    função que recebe dois parametros, uma lista de numeros e um numero
    e devreá retornar a soma dos itens da list de acordo com o numero

    test -1 ([1,2,3] 2) --> 3
    test -2 ([2,2,2] 3) --> 6

*/

function SumRange(list, n){
    let response = 0;
    for(let i = 0; i < n; i++){
        response += list[i]
    };

    return response
};

console.log(SumRange([3,10,5], 3))
console.log(SumRange([14,2, 2,5], 2))


/*
    09 - divisors list 

    @function divisors(n)
    função que recebe um valor numerico e retorna um array com os divisores 

    test -1 (10) => [1, 2, 5, 10]
    test -2 () => [1, 2, 3, 4, 6, 12]

*/

function divisors(n){

    let resp = [];

    for(let i =0; i <= cont; i++){
        if(n%i == 0){
            resp.push(i);
        }
    };

    return resp
}

console.log(divisors(10))
console.log(divisors(12))


/*
    010 - Hide the E-mail

    @function HideEmail(email)
    função que recebe um email como parametro e devolve uma mascara do email

    test -1 ("johndoe@gmail.com") => "J******@********m"
    test -2 ("maria@gmail.com.br") => "m****@***********r"

*/
function HideEmail(email){

    let arr = email.split('')

    let ini = arr.shift()
    let las = arr.pop()
    let mid = arr.map(c => c === '@' ? '@' : '*').join('')

    return ini + mid + las
}

console.log(HideEmail2("marie@gmail.com"))
console.log(HideEmail2("johndoe@gmail.com"))