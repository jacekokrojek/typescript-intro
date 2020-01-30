// Basic assignments and type conversions
var v: number = Math.random()
let l: number = Number('1234')
const c: string = Math.random().toString()

// Array Spread
let part1: number[] = [1, 2];
let part2: number[] = [3, 4];
let bothPlus: number[] = [0, ...part1, ...part2, 5]; // > [0, 1, 2, 3, 4, 5]

// Destructing
let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
