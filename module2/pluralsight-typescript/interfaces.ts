class Animal implements AnimalType {
    constructor() {   
    }

    //Elements of implements interface
    nombre: string;

    setType(): string {
        return 'Cocodrilo'
    }
}

interface AnimalType {
    nombre: string
    setType():string
}
