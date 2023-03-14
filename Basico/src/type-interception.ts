type Nome = { nome: string };
type Altura = { altura: number };
type Peso = { peso: number };
type Tipo = { tipo: string };

type People = Nome & Altura & Peso & Tipo; //O Tipo people tem que ter estes tipos nome, altura e etc..

const Claudia: People = {
    nome: 'Claudia',
    altura: 1.63,
    peso: 62.0,
    tipo: 'AB',
};

console.log(Claudia);
