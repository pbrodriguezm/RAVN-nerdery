interface Item {
    readonly id: number
}

class Orange implements Item {
    id: number;
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

class Pears implements Item {
    id: number;
    city: string;
    constructor(id: number, city: string) {
        this.id = id;
        this.city = city;
    }
}

class Store {
    items: Item[] = []
    constructor() {
    }

    addItem(item: Item) {
        this.items.push(item);
    }

    print() {
        console.log(this.items);
    }
}

let test = new Store()
test.addItem(new Orange(1,'Orange small'));
//posible error for types
test.addItem(new Pears(2,'Pears small'));
test.print();