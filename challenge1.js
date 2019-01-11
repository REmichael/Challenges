// //Challenge Assessment 1
// ***********************

// What is a palindrome?  A palindrome is a word that is spelled the same way, both forwards and backwards (i.e. bob, level, tacocat, racecar, etc.).  Notice that each of these words have the same spelling if you reversed the word.
// Using only JavaScript, create a prompt telling the user, "Enter a word to see if it is a palindrome", then create a way to check if the word is in fact a palindrome.  If it is, have JavaScript console.log that their word is a palindrome; if it is not, have JavaScript console.log the opposite.



//CHALLENGE//
function checkPalindrome(word) {
    
    var reversedword = word.split('').reverse().join('');
        
        if (word === reversedword) {
           
            console.log("Palindrome")
        } else {

         console.log("Not a Palindrome") 
        } }
        
        checkPalindrome('lol');

function isPalindrome(word) {
    var reversedword = word.split('').reverse().join('');
    return word === reversedword;
  }
  
  var s = 'tony';
  if (isPalindrome(s))
    console.log('Yes');
  else
    console.log('No');


        
       
       
       
        //CHALLENGE//
// write a function that checks to see if all characters in a string are unique 
// TOOLS:   
//  FUNCTION WITH A PARAMETER, FOR LOOPS, CONDITIONAL, SPLIT()

let x = "String";
let y = "racecar";


let check = (checking) => {
    let broken = checking.split("");
    for (item in broken) {
        for (item2 in broken) {
            console.log(item, item2);
            if (broken[item] === broken[item2] && item !== item2) {
            console.log("Not unique");
        }
    }
}
check(y);


    let word1 = "no";

let word2 = word1.split("");

let word3 = word2.reverse();

// console.log(word3);

let word4 = word3.join("");

console.log(word4);

if (word1 == word4) {
    console.log('that word is a palindrome')
} else {
    console.log('not a palindrome')
}
