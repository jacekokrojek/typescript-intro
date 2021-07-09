let someArray = [1, "string", false];

for (let i = 0; i < someArray.length; i++) {
    console.log(someArray[i]);
}

for (let entry of someArray) {
    console.log(entry); // 1, "string", false
}

// for..of vs. for..in statements
let list = [4, 5, 6];
// if you are interested in properties
for (let i in list) {
    console.log(i); // "0", "1", "2",
}

// if you are interested in values
for (let i of list) {
    console.log(i); // "4", "5", "6"
}

someArray.forEach (function (el, idx){
    console.log(`idx: ${idx}, el: ${el}`);
});

// Zadanie: Napisz program generujący numer PESEL, YYMMDDXXXXC, 
// wersja prosta: możesz założyć, że XXXX jest zawsze taki sam
// wersja trudniejsza: wygeneruj losowe wartości dla XXXX, możesz wykorzystać kod poniżej aby odpowiednio sformatować losową wartość
// var pad = "0000";
// var n = '5';
// var result = (pad+n).slice(-pad.length);
//generator pesel 
