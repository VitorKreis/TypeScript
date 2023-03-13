/* eslint-disable prettier/prettier */
let x; //Definindo um valor undefined

if(typeof x === "undefined") x = 20; //Checando seu tipo se ele for undefind ele se torna um numero
console.log(x * 20);//Utilizando o numero

//Defininido a funçao e seus paramentros e deixando a idade indefinida
export function CreatePerson(firstName: string, lastName : string, age? : number) : {
    //Definindo o tipo que deve retornar na funçao
    firstName: string,
    lastName: string,
    age?: number,
} { //Fazendo o retorno do objeto da funçao
    return {
        firstName, 
        lastName,
        age
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function SquareOf(x : any) {
    if(typeof x === "number") {
        return null
    }
    return null
}

if(SquareOf("20") === null) { 
    console.log("Este dado foi passado de forma errado por favor verifique!")
}

SquareOf(10);







