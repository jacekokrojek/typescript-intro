/* TypeScript types */

// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
let firstName: string = 'Bob';
let lastName: string = "Bobbington";
let sentence: string = `Hello, my name is ${firstName } ${lastName }.

I'll be ${ decimal + 1 } years old next month.`;

// Array
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Enum
enum Color {Red, Green, Blue}
let color: Color = Color.Green;

// Any
let notSure: any = 4;
notSure = "maybe a string instead";

// Null or Undefined
let someVar: string = null;
let someOtherVar = undefined;
