/* eslint-disable */

//Tipos basicos
let name: string = "Vitor"; //Tipo string "", '', ``
let number: number = 10;// Tipo number 10, -1.2, 1.0, 0xf000, 0o77d7
let boolean: boolean = true;// Tipo boolean true e false
let symbol: symbol = Symbol("Qualqer-symbol")// symbol
//let bigInt: bigint = 10n; Big-Int

//Array
let ArrayNumber: Array<number> = [1, 2, 3]; //Array sao declaradas seus tipos dentro deste bloco <number>
let ArrayString: Array<string> = ['a', 'b']; //Array sao declaradas seus tipos dentro deste bloco <string>

let ArrayNumber2 : number[] = [10, 20, 30]; //Outra forma de declarar o tipo
let ArrayString2 : string[] = ['ola', 'tudo', 'bem']; //Outra forma de declarar o tipo

//Objetos

let people: {name: string, idade: number, adulto: boolean} = { //Os tipos do objetos todos tem que ser declarados e passados
    name: "Jose",
    idade:19,
    adulto: true
};

let animal : {raça?: string, idade?: number, cor?: string} = { //O sinal de ? orienta que o dado nao e necessario para se criar o objeto
    raça: "Dobberman",
    cor: "Pardo com listras pretas"
};

//Funçoes
function calc(x : number, y: number ) : number{//Tipos de funçoes sao declardas dentro dos parntheses e o valor a retornar : depois dos dois pontos
    return x + y;
};

var sub = (x: number, y: number) => number = x - y;// Outra forma de se declarar o valor de retorno da funçao =>