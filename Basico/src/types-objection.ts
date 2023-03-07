/* eslint-disable */

const objeto : {
    readonly id: number; //Este dado nao pode ser alterado
    chaveA: string,
    chaveB: string,
    chaveC?: string,
    [key: string] : unknown //Esta seria uma chave desconhecida
} =  {
    id: 1,
    chaveA : "A",
    chaveB : "B"
}

objeto.chaveA = "Novo Valor" //Alterndo o valor
objeto.chaveC = "C" //Chave nao obrigatoria
objeto.chaveD = "Chave Desconhecida" //Declarando chave desconhecida

console.log(objeto)