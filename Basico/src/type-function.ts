//Tipando uma funçao

type CallbackFn = (item: string) => string; //Define o tipo do callback, levando em conta oque se recebe e oque se manda

export function mapStrings(array: string[], callbackFn: CallbackFn): string[] {
    const StringArray: string[] = [];

    for (let i = 0; i < array.length; i++) {
        StringArray.push(callbackFn(array[i]));
    }

    return StringArray;
}

const Buylist = ['Alface', 'Tomate', 'Cebola'];
const Upperlist = mapStrings(Buylist, (item) => item.toUpperCase()); //Fica mais facil de saber oque retornar;

console.log(Buylist);
console.log(Upperlist);
