//  Wicej informacji pod adresem https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/String

var paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const searchTerm = 'dog';

var parts = [
    paragraph.slice(4,-2),          // return quick brown fox jumps over the lazy dog. If the dog barked, was it really laz
    paragraph.charAt(1),            // returns "h"
    paragraph[1],                   // returns "h"
    paragraph.substr(1, 2),         // returns "he"
    paragraph.split(","),           // returns [ 'The quick brown fox jumps over the lazy dog. If the dog barked', ' was it really lazy?' ]
    paragraph.split(",").length,    // return 2
    paragraph.indexOf(searchTerm)   // return 40
]

console.log(parts)
console.log(`The word "${searchTerm}" ${paragraph.includes(searchTerm)? 'is' : 'is not'} in the paragraph`);
