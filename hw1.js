//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output
should be:

"Matched dog_name" if name is in the string, if no matches are present console.log
"No Matches"
*/

let str = "Hello Max, my name is Dog, and I have purple eyes!"
let names = ["Max","HAS","PuRple","dog"]

const findWords = ( dString, dNames, caseSensitive = true ) => {
    if(!caseSensitive){
        dString = dString.toLowerCase();
    }
console.log();
console.log();
console.log('//////////////////////////');
console.log('The matches below are based on normalized lower case matches only');
console.log('//////////////////////////');
console.log();
console.log();

    for(let i = 0; i < dNames.length; i++){
        let name = dNames[i];
        if(!caseSensitive){
            name = name.toLowerCase();
        }
        dString.includes(name) ? console.log(`Matched ${name}`) : console.log(`No Matches for ${name}`);
    }    
}
// let str = "let's go";// do this cus c#
// let str2 = 'let\'s go'; // this way

findWords(str,names);
findWords(str,names, false);

//do not delete this shit because data 