/***********************
Challenge Assessment 2
***********************
Using JS only, take an array of numbers (i.e. an array that lists numbers between 1 and 10). Create
two arrays from this original one, where one array list all of the even numbers, and the second lists
all of the odd.
Example:
Input:
originalArray = [1,2,3,4];
Output:
evenArray = [2,4];
oddArray = [1,3]; */



var originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var evenArray= [];
var oddArray= [];

for ( var i = 1; i <= 10; i++){

    if (originalArray[i]%2 == 0) {
        evenArray.push(i);
    } else {
        oddArray.push(i);
    }
}
console.log(evenArray);
console.log(oddArray);



