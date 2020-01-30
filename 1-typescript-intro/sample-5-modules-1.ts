import * as moment  from 'moment'
import * as Chance from 'chance'

var chance = new Chance();
console.log(chance.phone());

let b = new Date("1979-05-21");
console.log(moment(b).format("YYYY-MM-DD"))

// Zadanie: wykorzystaj moduł moment do zmodyfikowania funkcji denerującej pesel tak aby można było podać datę w formacie YYYY-DD-MM
