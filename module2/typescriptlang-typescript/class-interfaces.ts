/////// Interfaces 
interface Employee {
    name: string;
    title: string;
}

interface Manager extends Employee {
    department: string;
    numOfEmployees: number;
    scheduleMeeting: (topics: string) => void;
}

// second part
let developer:Employee = {
    name: 'Michael',
    title: 'Senior TypeScript',
   // direction?: 'Example direction' // the ? is alternative 
}

let newEmployee: Employee = developer;

//////////// classs

class Person {
    private _age: number; // private symbol _

    public get age(): number {
        return this._age;
    }

    public set age(age: number) {
        this._age = age;
    }

    deposit(val: number) {
        return val + this.age;
    }
    
    
}