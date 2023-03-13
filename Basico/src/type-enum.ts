enum Cores { //Criando um enum, que simple é um objeto enumerado
    Vermelho,
    Amarelo,
    Azul,
}

console.log(Cores);

console.log(Cores[2]); //Chamando a cor Azul
console.log(Cores.Vermelho); //Descobrindo o numero da cor Vermelho

//Juntando novas cores ao enum ja criado

enum Cores {
    Roxo = 233,
    Preto = 'Preto',
    Rosa = 234,
    Lilas,
}

console.log(Cores); //Novo enum de cores

console.log(Cores.Preto); //Descobrindo a cor Preta
console.log(Cores[233]); //Chamando a cor roxo
