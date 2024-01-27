/*
    01 - sum

    @function sum(n1, n2)
    a função receberá dois numero positivos como parametro @n1 e @n2 e retornar
    a soma dos numeros

    test 1 - (3, 5) => 8
    test 2 - (2, 3) => 5

*/

function somar(n1, n2){
    return n1 + n2;
};

console.log(somar(3, 5));
console.log(somar(2, 3));


/*
    02 - sum of positive numbers

    @function somaPositivosArray(array)
    criar uma função que pegue os valores de uma array numerico, filtrando valores positivos
    e depois somando-os

    test 1 - ([5, -4, 10, -2, -5]) => 15
    test 2 - ([2, 2, 2, -2, -1]) => 6
*/

function SomaPositivosArray(arry){
    
    let count = 0;

    arry.forEach(number => {
        if(number >= 0){
            count += number
        }
    });

    return count;
};

console.log(SomaPositivosArray([5 ,-4 ,10, -2, -5]));
console.log(SomaPositivosArray([2, 2, 2, -2, -1]));


/*
    03 - is odd or even?

    @function ParOuImpar(n)
    a função receberá um numero como parametro @n e deverá retornar
    se o numero é par ou impar

    test - 1 (8) => par
    test - 2 (3) => impar

*/

function ParOuImpar(num){
    return num % 2 == 0 ? "Par" : "Impar";
};

console.log(ParOuImpar(8));
console.log(ParOuImpar(3));


/*
    04 - triangle area

    @function triangleArea(b, h)
    a função receberá dois parâmetros base @b e altura @h, e com base
    nesse valores calcular a area de um triângulo.

    test - 1 (10, 5) => 25
    test - 2 (5, 5) => 12,5

*/

function TrinagleArea(b, h){
   
    return (b*h)/2;
};

console.log(TrinagleArea(10, 5));
console.log(TrinagleArea(5, 5));

/*
    05 - get opposite

    @function findOpposite(num)
    a função receberá um valor numerico como parâmetro @num
    e deverá retornar o valor com o sinal oposto

    test - 1 (8) => -8
    test - 2 (-8) => 8

*/

function findOpposite(num){

    return num >= 0 ? -num : Math.abs(num);
};
 
console.log(findOpposite(8));
console.log(findOpposite(-8));


 
/*
    06 - age to days

    @function ageToDays(age) 
    a função recebrá um valor positivo como parâmetro @age e deverá converter
    esse valor de anos para dias.

    test - 1 (4) => 1460
    test - 2 (1) => 365

*/

function ageToDays(age){

    return (age * 365);
};

console.log(ageToDays(4));
console.log(ageToDays(1));


/*
    07 - turn to negative

    @function TurnToNegative(num)
    a função receberá um valor positivo ou negativo como parâmetro @num
    e deverá returnar negativo

    test - 1 (10) => -10
    test - 2 (-6) => -6

*/

function TurnToNegative(num){

    return num >=0 ? -num : num;
};

console.log(TurnToNegative(10))
console.log(TurnToNegative(-6))


/*
    08 - remove spaces

    @function spaceRemove(strg)
    a função recebe uma string como parâmetro @strg e deverá retornar a mesma string 
    porém removido todos os espaços em branco

    test -1 ("  testando se funciona") => "testandosefunciona"
    test -2 ("teste dois") => "testedois"

*/

function spaceRemove(strg){
   
    return strg.replace(/\s+/g, '')
};

console.log(spaceRemove("   testendo se funciona"));
console.log(spaceRemove("teste dois"));



/*
    09 - find John

    @function findJohn(arry)
    a função recebe um array com nomes de pessoas como parâmetro @arry
    e deverá um boolean para caso o nome "john" esteja no array ou não

    test -1 (["maria", "clara", "bruno", "john"]) => true
    test -2 (["maria", "clara", "bruno"]) => false

*/

function FindJohn(arry){

    return arry.includes('John')
};

console.log(FindJohn(["maria", "clara", "bruno", "john"]));
console.log(FindJohn(["maria", "clara", "bruno"]));



/*
    010 - soccer counter
    
    @function SumPoints(w, d, l)
    a função recebe três variaveis como parâmetro @w, @d e @l, respectivamente os valores
    de vitorias, empates e derrotas. então retorne a somatoria dos pontos
        // win = 3 pontos
        // draw = 1 ponto
        // loss = 0 pontos

    test -1 (2, 2, 0) => 8
    test -2 (1, 2, 3) => 5

*/

function SumPoints(w, d, l){
    
    return (w * 3) + d
};

console.log(SumPoints(2, 2, 0));
console.log(SumPoints(1, 2, 3));