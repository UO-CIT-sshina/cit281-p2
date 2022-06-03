/*
    CIT 281 Project 2
    Name: Shinault
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const getRandomLetters = function() {
let result = "";
let lengthOfOutputString = getRandomInteger(5, 26);
for (let i = 0; i < lengthOfOutputString; i++) {
    result += getRandomLetter();
}
console.log(result);}

//Returns a single lowercase letter
//I compacted the steps into a single line. I hope that's alright, I felt it aligned better with
//what we are learning in the lectures.
const getRandomLetter = function() {return "abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random()*26)];}

//Returns a string of random length
const getRandomString = function(minLength, maxLength) {
    let output = "";
    let stringLength = getRandomInteger(minLength, maxLength + 1);
    for (let i = 0; i < stringLength; i++) output += getRandomLetter();
    return output;
}

//Returns a string in ascending order
const getSortedString = function(string) {return string.split("").sort().join("");}

console.log(getSortedString(getRandomString(10,20)));