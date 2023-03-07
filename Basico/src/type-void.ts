/* eslint-disable */
function anyRetorn(name: string, lastname: string) : void { //Funçao que nao tem o retorno explicito
    console.log(name + " " + lastname);
};

anyRetorn("Vitor", "Kreis");

const people = { 
    name: "José",
    lastname : "Aparecido",
    showName() : void {
        console.log(this.name + " " + this.lastname);
    }
}

people.showName();

export {people}; //Exportando para utilizar o type-server
