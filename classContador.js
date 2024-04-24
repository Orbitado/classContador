class Contador {
    responsable;
    contadorIndividual;
    static contadorGlobal = 0;
    
    constructor(responsable) {
        this.responsable = responsable;
        this.contadorIndividual = 0;
        Contador.contadorGlobal++

        console.log("Objeto creado")
    }

    getResponsable = () => `El responsable se llama ${this.responsable}`;
    contar = () => this.contadorIndividual++;
    getCuentaIndividual = () => this.contadorIndividual;
    static getCuentaGlobal = () => Contador.contadorGlobal;
}

let responsable1 = new Contador("Leonardo");
let responsable2 = new Contador("Fernando");

responsable1.contar();
responsable1.contar();
responsable1.contar();

responsable2.contar();

console.log(responsable1.getResponsable())
console.log(responsable1.contar())
console.log(responsable1.getCuentaIndividual())
console.log(`Hay ${Contador.getCuentaGlobal()} contadores`)