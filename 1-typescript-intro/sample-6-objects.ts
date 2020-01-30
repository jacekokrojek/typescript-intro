interface Context {
    name: string
}

class Logger {
    context: Context;
    constructor (currentContext: Context) {
        this.context = currentContext;
    }
    log(message: string) {
        console.log( `${this.context.name}: ${message}`);
    }
}

let currentModule:Context = { name: "sample-4-objects"}
let logger: Logger = new Logger(currentModule);

logger.log("Start logging...");

/* TODO: Dodaj wyświetlanie komunikaty "Logger for ... initialized" w konstruktorze obiektu Logger */

interface ComplexInterface {
    level: number;
    color?: string; // optional propery
    [idx: number]: string;  // array of string values
    [propName: string]: any; // any additional properties of any type
    getField(): number; // function
}

class ComplexClass implements ComplexInterface {
    [idx: number]: string;    [propName: string]: any;
    level: number;
    color?: string;
    getField(): number {
        throw new Error("Method not implemented.");
    }
}

/* TODO: Zdefiniuj interface dla klasy Logger, więcej informacji możesz znaleźć na stronie https://www.typescriptlang.org/docs/handbook/interfaces.html */

// Zadanie: Stwórz klasę generators udostępniającą metodę generującą pesel
