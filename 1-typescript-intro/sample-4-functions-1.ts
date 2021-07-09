const add = function (...args):number{
    let suma = 0;
    for(let i=0;i<args.length;i++){
        suma+=args[i];
    }
    return suma;
}
console.log(add(1,2,3,23))
console.log(add(Math.random(), Math.random()))
export { add }

/* Zmodufikuj funkcję add aby mogła przyjmować dowolną liczbę argumentów */
