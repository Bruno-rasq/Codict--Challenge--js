/*
    01 - Ransom note

    @function ransomNote(rNote, magazine)
    a função receberá duas strings e deverá retornar um booleano indicando se é
    possivel escrever "rNote" utitlizando as letras de "magazine" 

    test 1 -> ("a", 'b') => false
    test 2 -> ("note", "onenote") => true

*/

function ransomNote(rNote, magazine){
    return magazine.includes(rNote)
}

console.log(ransomNote("a", 'b'))
console.log(ransomNote("note", "onenote"))


/*
    02 - dominant Number

    @function dominantNumber(arr)
    a função receberá um array de inteiros e deverá retorna o numero que aparaecer 
    com maior frequencia

    test 1 -> ([2, 2, 1, 1, 1, 1, 1, 2]) => 1
    test 2 -> ([2, 10, 10, 10, 7, 10, 2]) => 10

*/

function dominantNumber(arr){

    let n = arr.length;
    let count = {};

    for(let i = 0; i < n; i++){
        let element = arr[i]
        count[element] =  (count[element] || 0) + 1;
    }

    let EMF; // elemento mais frequente
    let FM = 0; // frequencia maxima

    for(const ele in count){
        if(count[ele] > FM){
            FM = count[ele];
            EMF = ele
        }
    }

    return FM > (n/2) ? EMF : -1;
}

console.log(dominantNumber([2, 2, 1, 1, 1, 1, 1, 2]))
console.log(dominantNumber([2, 10, 10, 10, 7, 10, 2]))


/*
    03 - coin Change

    @function coinChange(amount, coins)
    a função receberá como parametro um valor inteiro @amount e um arrays de inteiros @coins
    e deverá retornar o minimo de valors em @coins que somados são igual a @amount. caso não 
    seja possivel retorn -1
   

    test 1 -> (5, [1, 2, 3]) => 2
    test 2 -> (3, [2]) => -1

*/

function coinChange(amount, coins){

    if(coins.includes(amount)) return 1

    const DP = Array(amount + 1).fill(Number.MAX_SAFE_INTEGER)

    DP[0] = 0;

    for(const coin in coins){
        for(let i = 0; i <= amount; i++){
            DP[i] = Math.min(DP[i], DP[i - coin] + 1)
        }
    }

    return DP[amount] === Number.MAX_SAFE_INTEGER ? -1 : DP[amount]
}

console.log(coinChange(5, [1, 2, 3]))
console.log(coinChange(3, [2]))


/*
    04 - next Smaller

    @function nextSmaller(n)
    a função receberá um unico valor inteiro @n e deverá retornar o proximo valor
    menor que é possivel formar utilizando os mesmo caracteres de @n, caso não 
    seja possivel retorn -1
   

    test 1 -> (907) => 790
    test 2 -> (531) => 513

*/

function nextSmaller(n){

    let characteres = Array.from(String(n))

    let i = characteres.length - 2;
    while( i >= 0 && characteres[i] <= characteres[i + 1]){
        i--;
    }

    if(i === 1 ) return -1

    let j = characteres.length - 1;
    while( characteres[j] >= characteres[i]){
        j--;
    }

    [characteres[i], characteres[j]] = [characteres[j], characteres[i]]

    let rest = characteres.slice(i + 1).reverse();

    return Number(characteres.slice(0, i + 1).concat(rest).join(''))
}

console.log(nextSmaller(907))
console.log(nextSmaller(531))


/*
    05 - compare Versions

    @function compareVersions(v1, v2)
    a função receberá duas strings @v1 e @v2 que representam as versões que serão
    verificadas. se @v1  for menor que @v2 retorn -1, se forem iguais retorne 0 e se @v1
    for maior que @v2 retorne 1
   

    test 1 -> ("2.0.0", "2.1.0") => -1
    test 2 -> ("2.0.0", "2.0.0") => 0
    test 3 -> ("2.0.0", "1.0.0") => 1

*/

function compareVersions(v1, v2){

    let v01 = v1.split('').map(c => Number(c))
    let v02 = v2.split('').map(c => Number(c))
    let res;

    if(v01[0] > v02[0]) res = 1
    if(v01[0] < v02[0]) res = -1
    if(v01[0] == v02[0]){

        if(v01[1] > v02[1]) res = 1
        if(v01[1] < v02[1]) res = -1
        if(v01[1] == v02[1]){

            if(v01[2] > v02[2]) res = 1
            if(v01[2] < v02[2]) res = -1
            if(v01[2] == v02[2]) res = 0
        }
    }

    return res
}

console.log(compareVersions("2.0.0", "2.1.0"))
console.log(compareVersions("2.0.0", "2.0.0"))
console.logcompareVersions("2.0.0", "1.0.0")


/*
    06 - sum of Fibonacci

    @function sumFibonacci(n)
    crie uma função que compute um valor n em uma sequencia de Fibonacci, onde
    cada valor na sequencia é a soma dos tres valores anteriores na sequencia

    test 1 -> (1) => 1
    test 2 -> (3) => 5

*/

function sumFibonacci(n){

    let fibo = []

    if(n <= 0) return 0;

    fibo[0] = 0
    fibo[1] = 1

    let sum = fibo[0] + fibo[1]

    for(let i = 2; i <= n; i++){

        fibo[i] = fibo[i - 1] + fibo[i - 2]
        sum += fibo[i]
    }

    return sumOfIntervals
}

console.log(sumFibonacci(1))
console.log(sumFibonacci(5))


/*
    07- sum of intervals

    @function sumOfIntervals(itv)
   a função receberá uma arrays de arrays @itv em que cada array é representado
   por [@inicio, @final] e retornará a soma do tamanho de todos os intervalos

    test 1 -> ([[1,2], [2,3], [3,4]]) => 3
    test 2 -> ([[1,4], [7,10], [3,5]]) => 7

*/

function sumOfIntervals(itv){

    const range = new Set();

    itv.forEach(([start, end]) => {
        for(let i = start; i < end; i++){
            range.add(i)
        }
    });

    return range.size;
}

console.log(sumOfIntervals([[1,2], [2,3], [3,4]]))
console.log(sumOfIntervals([[1,4], [7,10], [3,5]]))


/*
    08- increment string

    @function incrementString(str)
    a função recebera´um numero em formatdo de string @str e devera´simplesmente 
    retornar o numero incrementado em 1

    test 1 -> ("999") => 1000
    test 2 -> ("00123") => 00124

*/

function incrementString(str){

    let num = Number(str) + 1;
    return str.length == String(num).length ? 
            num : String(num).padStart(str.length, '0')
}

console.log(incrementString("999"))
console.log(incrementString("00123"))


/*
    09- Rot13 

    @function rot13(str)
    rot13 é um tipo de criptográfia que utliiza a criptografia de cesar com chave 13
    a função receberá uma string @str e deve retornar o valor criptografado em rot13

    test 1 -> ("codict") => "pbqvpg"
    test 2 -> ("Hello World") => "Uryyb Jbeyq"

*/

function CeaserCipher(str, key){

    let result = '';
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for(let i = 0; i < str.length; i++){
        let char = str[i]

        if(char === " "){
            result += ' '
            continue
        }

        let isUppercase = char === char.toUpperCase();
        char = char.toLowercase()

        let pos = alphabet.indexOf(char)

        if(pos === -1){
            result += str[i]
        } else {
            let ind = (pos - key + 26) % 26;

            result += isUppercase ? alphabet[ind].toUpperCase() : alphabet[ind]
        }
    }

    return result
}

function rot13(str){
    return CeaserCipher(str, 13)
}

console.log(rot13("codict"))
console.log(rot13("Hello World"))


/*
    010-  most frequent word

    @function mostFrequentWord(str)
    a função receberá ums string @str e deverá retornar a palavra/letra que
    aparecer com maior frequencia

    test 1 -> ("cc bb aa dd cc") => "cc"
    test 2 -> ("the quick brown fox jumps over the lazy dog") => "the"

*/

function mostFrequentWord(str){

    const arr = str.toLowercase().split(' ')

    const countmap = arr.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1
        return acc
    }, {});

    return Object.keys(countmap).reduce((a, b) => {
        countmap[a] > countmap[b] ? a : b
    })
}

console.log(mostFrequentWord("cc bb aa dd cc"))
console.log(mostFrequentWord("the quick brown fox jumps over the lazy dog"))