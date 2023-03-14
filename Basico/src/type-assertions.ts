const body = document.querySelector('body'); //Puxando um elemento do HTML
if (body) body.style.background = 'red'; //Usando a verificaçao

const button = document.querySelector('button') as HTMLButtonElement; //Acrediando que vira exatamente este elemento
button.focus();

/* Nunca utilizar */

const text = document.querySelector('p')!; //Obrigando que seja o elemento
text.style.color = 'Pink';

const title = document.querySelector('title') as unknown as string; //Passando o tipo unknown e depois passado ele para string
title.length;
