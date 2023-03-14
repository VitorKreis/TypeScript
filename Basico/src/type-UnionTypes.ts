//Union types pode receber multiplos valores, é necessario a verificaçao e retorno a todos
function AddContc(a: number | string, b: number | string) {
    if (typeof a == 'number' && typeof b == 'number') return a + b; //Verificando um dos tipos
    // Verificando o tipo if (typeof a == 'string' && typeof b == 'string') return `${a}${b}`;

    return `${a}${b}`; // Dizendo se nao for numero é uma concatenaçao
}

console.log(AddContc(10, 40));
console.log(AddContc('10', '450'));
console.log(AddContc(10, '50'));
