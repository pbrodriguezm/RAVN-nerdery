////////// inheritance ////////
/// father class ANIMAL, sons Snake


class Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name); // access attributes father
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

//////// Abstrac class /////////////

export abstract class Vehicle {
    constructor() {

    }
    public abstract makeSound(): void;
    public abstract getTopVehicle(num: Number): any;
}


class Moto extends Vehicle {

    constructor(parameters) {
        super();
    }

    public makeSound(): void {
        throw new Error("Method not implemented.");
    }
    public getTopVehicle(num: Number) {
        throw new Error("Method not implemented.");
    }

}