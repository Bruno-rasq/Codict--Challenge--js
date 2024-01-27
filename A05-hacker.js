/*
    01 - anagram detector

    @function anagramDetector(str1, str2)
    a função deverá receber como parametro duas strings @str1 e @str2
    enão verificar se uma é anagrama da outra e retornar um boolean

    test 1 - ("car", "arc") => true
    test 2 - ("race", "car") => false

*/

function anagramDetector(str1, str2) {

    let word1 = str1.split('');
    let word2 = str2.split('');

    let response = word1.every((char) => {
        return word2.includes(char)
    })

    return response
}

console.log(anagramDetector("car", "arc"))
console.log(anagramDetector("race", "car"))


/*
    02 - Unique characters

    @function hasUniqueCharacter(str)
    a função deverá receber uma string e verificar se todos os caracteres são unicos
    retornando um booleano

    test 1 -> "abcdef" => true
    test 2 -> "aAbBcC" => false

*/

function hasUniqueCharacter(str) {

    let NoReps = str.replace(/(.)(?=.*\1)/gi, "");
    let response = str.length == NoReps.length ? true : false;

    return response
}

console.log(hasUniqueCharacter("abcdef"))
console.log(hasUniqueCharacter("aAbBcC"))


/*
    03 - compress string

    @function compressString(str)
    a função deverá receber uma string e se houver carcateres repetidos em sequencia
    deverá comprimi-los ao caracter e um numero que representa a quantidade de vezes que 
    se repete

    test 1 -> "aabbcc" => "a2b2c2"
    test 2 -> "aaabbbccc" => "a3b3c3"

*/

function compressString(str) {

    let compress = ""
    let matriz = str.split("");

    for (let i = 0; i < matriz.length; i++) {
        let count = 1
        let current = matriz[i]

        while (i < matriz.length && matriz[i] == matriz[i + 1]) {
            count++
            i++
        }

        if (count !== 1) {
            compress += current + count;
        } else {
            compress += current
        }

    }

    return compress
}

console.log(compressString("abbcc"))
console.log(compressString("aaabbbccccc"))


/*
    04 - two sum

    @function twoSum(nums, target)
    a função receberá dois parametros @nums que é uma lista de valores e @target que é um alvo
    então deverá verificar se em @nums possue valores menores que @target, então retornar o indice
    deles no array

    test 1 -> ([2, 4, 5], 6) => [0, 1, 2]
    test 2 -> ([3, 3], 6) => [0, 1]

*/

function twoSum(arr, n) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.lenght; j++) {

            if (arr[i] === arr[j]) {
                return [i, j]
            }
        }
    }

    return -1;
}

console.log(twoSum([2, 4, 5], 6))
console.log(twoSum([3, 3], 6))

/*
    05 - romeve duplicates

    @function removeDups(str)
    a funçaõ receberá uma string e deverá retornar uma nova string removendo os caracteres duplicados

    test 1 -> ("abcdef") => "abcdef"
    test 2 -> ("abccdeefkkk") => "abcdefk"

*/

function removeDups(str) {

    return  str.replace(/(.)(?=.*\1)/g, "")
}

console.log(removeDups("abcdef"))
console.log(removeDups("abccdeefkkk"))


/*
    06 - longest common subsequence

    @function logCommonSub(str1, str2)
    a função receberá duas strings e deverá retornar a maior sequencia comun entre elas.
    nesse caso a subsequencia deverá ser continua

    test 1 -> ("abcdef", "abc") => "abc"
    test 2 -> ("abcdef", "acf") =>  false?

*/

function Matriz(str1, str2) {
    return Array.from({ length: str1.length + 1 }, () => {
        Array(str2.length + 1).fill(0)
    })
}

function logCommonSub(str1, str2) {

    let matriz = Matriz(str1, str2);
    let MC = 0; // maior comprimento
    let FMS = 0; // fim maior sequencia

    for (let i = 0; i <= str1.length; i++) {
        for (let j = 0; j <= str2.length; j++) {

            if (str1[i - 1] === str2[j - 1]) {
                matriz[i][j] = matriz[i - 1][j - 1] + 1;

                if (matriz[i][j] > MC) {
                    MC = matriz[i][j]
                    FMS = i - 1
                }
            }
        }
    }

    if (MC === 0) return -1;

    return str1.substring(FMS - Mc + 1, FMS + 1)
}

console.log(logCommonSub("abcdef", "abc"))
console.log(logCommonSub("abcdef", "acf"))

/*
    07 - valid parentheses

    @function validParentheses(str)
    a função receberá uma string contendo apenas parenteses "()", de deverá retornar um booleano
    caso os parenteses forem validos

    test 1 -> "()" => true
    test 2 -> "(()" => false

*/

function validParentheses(str) {

    let openParentheres = str.split('').filter((char) => {
        return char == "(";
    });

    let closeparentheses = str.split('').filter((char) => {
        return char == ")";
    });

    return openParentheres.length == closeparentheses.length

}

console.log(validParentheses("()()"))
console.log(validParentheses("()("))


/*
    08 - next bigger number 

    @function nestBiggerNumber(n)
    a função receberá um numero positivo, e deverá retornar o proximo maior numero possivel de ser
    formado pelos mesmos caracteres, caso não seja possivel retornar um numero maior com os mesmos
    digitos retorne -1

    test 1 -> (213) => 231
    test 2 -> (999) => -1

*/

function nextBiggerNumber(n) {

    let characteres = Array.from(String(n))

    let i = characteres.length - 2;
    while( i >= 0 && characteres[i] >= characteres[i + 1]){
        i--;
    }

    if(i === 1 ) return -1

    let j = characteres.length - 1;
    while( characteres[j] <= characteres[i]){
        j--;
    }

    [characteres[i], characteres[j]] = [characteres[j], characteres[i]]

    let rest = characteres.slice(i + 1).reverse();

    return Number(characteres.slice(0, i + 1).concat(rest).join(''))

}

console.log(nextBiggerNumber(213))
console.log(nextBiggerNumber(999))


/*
    09 - roman numerals

    @function romanNumerals(n)
    a função receberá um valor positivo e devereá retornar uma string com o equivalente em numerais 
    romanos

    test 1 -> (4) => "IV"
    test 2 -> (9) => "IX"

*/

function romanNumerals(n) {

    if (n <= 0) return -1

    const RomanNumberMap = {
        u: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], //Unidade
        d: ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], //Dezena
        c: ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], //Centena
        m: ["M", "MM", "MMM", "MMMM", "MMMMM"] // Milhar
    };


    let str = String(n);
    let arry = Array.from(str).reverse();

    let uni = Number(arry[0]);
    let dez = Number(arry[1]);
    let cen = Number(arry[2]);
    let mil = Number(arry[3]);

    arry[0] = RomanNumberMap.u[uni - 1] ?? "";
    arry[1] = RomanNumberMap.d[dez - 1] ?? "";
    arry[2] = RomanNumberMap.c[cen - 1] ?? "";
    arry[3] = RomanNumberMap.m[mil - 1] ?? "";

    return arry.reverse().join('');

}

console.log(romanNumerals(4))
console.log(romanNumerals(9))


/*
    010 - pig latin

    @function pigLatin(str)
    a função receberá uma string e deverá retornar a uma nova string movendo o caractere inicial para
    o final da string e adicionando "Ay" no final

    test 1 -> ("hello") => "ellohay"
    test 2 -> ("pig") => "igpay"
    test 3 -> ("latin") => "atinlay"

*/

function pigLatin(str) {
    let word = str.split('');
    let inicial = word.splice(0, 1);

    let response = word.join('') + inicial + "ay"
    return response
}

console.log(pigLatin("pig"))
console.log(pigLatin("latin"))