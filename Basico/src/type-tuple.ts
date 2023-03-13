/* eslint-disable */

//Tipo Tuple
const Student : [number, string] = [10, 'Jose'];//Definindo os tipos aceitos na array
const Class : [string, number, string?] = ["1-A", 570, "Marcia"]//Defindo que o ultimo tipo nao é orbrigatorio
const Client : readonly [string, number] = ["Antonio.1@gmail.com", 123454]// Defininido um tipo imutabevel  
const ToDo : [...string[]] = ["Ir ao mercado", "Estudar", "Lavar Roupa", "Trabalhar", "Ir a academia"]// Defininido uma array que recebe string mas em qualquer posiçao   
console.log(Student);
console.log(Class);
console.log(Client);
console.log(ToDo);


Student[1] = 'Maria';// Mudando os valores da string
console.log(Student);

Class[0] = "2-C";//Mundando os valores de class, mas nao enviando o utlimo valor
Class[1] = 120;
Class[2] = "";
console.log(Class)


// Client[0] = "Josias.2@gmail.com" Este dado nao se pode mudar ja que é imutavel
console.log(Client)


//ReadOnly arrays
const arrayOnly : readonly string[] = ["Ola", "tudo", "bem"]//Definindo que a array é imutavel e que so aceita strings
const arrayRead : ReadonlyArray<number> = [10, 20, 30, 40]//Outra forma de definir a mesma array imutavel 





