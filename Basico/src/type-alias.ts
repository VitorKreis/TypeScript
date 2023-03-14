//Tipo alias sao contratos com o sistema de como deve ser feito ou chamando

type Password = number; //Qualquer idade deveria ser tipo idade
type Client = {
    //Todo os clientes devem ser conter estas informaçoes
    email: string;
    password: Password;
    salary: number;
    bank?: Banks;
};

type Fisico = 'Santander' | 'Itau' | 'Caixa';
type Online = 'PicPay' | 'Nubank' | 'C6Bank';

type Banks = Fisico | Online;

const Josue: Client = {
    email: 'josue.1@gmail.com',
    password: 463495,
    salary: 150_000,
};

export function SetBank(Client: Client, banks: Banks): Client {
    return { ...Josue, bank: banks };
}

console.log(SetBank(Josue, 'Nubank'));
