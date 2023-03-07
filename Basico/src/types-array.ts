export function MultipliArgs(...args: Array<number>): number {
    //Criado um array e ja declarando seu tipo
    return args.reduce((args, value) => args * value, 1);
}
//Deixando o typescript decidir o return
export function DivisionArgs(...args: number[]) {
    //Declarando o array de outra forma
    return args.reduce((args, value) => args / value, 1);
}

console.log(MultipliArgs(1, 2, 3));
console.log(DivisionArgs(3, 2, 1));
