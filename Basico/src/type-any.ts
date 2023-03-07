/*eslint-disable*/
function ShowMessage(msg: any) {  //Tipo any seria qualquer coisa
    return msg;
}

//Deve ser utilizado em ultimos casos.
console.log(ShowMessage([1, 'ola', 10]));
console.log(ShowMessage('Hello World'));
console.log({
    saudacao: 'ola',
});
