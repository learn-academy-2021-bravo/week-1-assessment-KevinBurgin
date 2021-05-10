// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

 var temp1 = 35
 var temp2 = 350
 var temp3 = 212
//create a function that takes a number and determines temperature is below boiling point
  const myBoilingPoint = (temperature) => {
//initiate variable for a string
    let newString =""
//for the length of the var
    for(let i=0; i<temperature.length; i++){
//if statement to return if temp is under over or equal to boiling point
             if(temp1 < 212){
                   return `${temp1} is below boiling point`
                }
               else if(temp2 > 212){
                  return `${temp2} is above boiling point`
               }
               else if(temp3 === 212){
                  return `${temp3} is at boiling point`
               }
//return in string
               return newString
           }
         console.log(myBoilingPoint(temp1));





// --------------------2) Create a function that takes in an array of numbers and returns an array with each number multiplied by 5.
// Use the test variable provided below. Expected output: [15, 35, 0, 30, -45]

 var myNumbers1 = [3, 7, 0, 6, -9]
 //create a function that takes in an array of numbers
 const mult5 =(array) => {
 //initiate a variable to string list of numbers
     let newArray = []
 //for each number in the list given   
     for(let i=0; i<array.length; i++){
 //store new array into variable for numbers being multiplied      
         newArray.push(array[i] * 5)
     }
 //return the list of multipied numbers   
     return newArray
 }
 console.log(mult5(myNumbers1))




 // --------------------3) Create a function that takes in an array of numbers and returns an array containing only the odd numbers.
 // Use the test variable provided below. Expected output: [-7, 9, 13]

 var myNumbers2 = [8, -7, 0, 6, 2, 9, 13]
 //create a function that takes a list of numbers
 const getOnlyOddNumbers = (numbers) => {
 //initialize a variable to store the new list of numbers
     let oddNumbers=[]
 //for each given number
     for(let i=0; i<numbers.length; i++){
 //determine if the number is odd
         if(numbers[i] % 2 !== 0){
 //if odd, store into new list of numbers
             oddNumbers.push(numbers[i])
         }
     }
 //return new list of numbers
             return oddNumbers
 }
     console.log(getOnlyOddNumbers(myNumbers2))





// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"
//create a function that removes all the vowels from string
const removeVowels1 = (strings) =>{
//initiate variable to string all letters but vowels
let newString = ""
//for each letter of the string
    for(let i=0; i<strings.length; i++){
//intiate variable to lowercase
    let lowerCase = strings[i].toLowerCase()
//create if statement to remove vowels aeiou
    if(lowerCase !== "a" && lowerCase !== "e" && lowerCase  !== "i" && lowerCase  !== "o" && lowerCase  !== "u"){
        newString += lowerCase
    }
    }
//return all letters in strings that are not vowels
    return newString
}
console.log(removeVowels1(stringWithVowels1))
console.log(removeVowels1(stringWithVowels2))




// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user if the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string" "mCdngMstr"
// Hint: There is an operator in JavaScript called typeof :)

var refactorTester1 = true
var refactorTester2 = 42
var refactorTester3 = "IAmACodingMaster"
//create a function that identifies non strings and removes vowels in strings
const removeVowels = (strings) =>{
//inistiate a variable that outputs a string
    let newString = ""
//create if statement that will return type of variable  
    if (typeof strings == "string"){
//for the length of each var that is given
        for(let i=0; i<strings.length; i++){
//intiate variable to lowercase
        let lowerCase = strings[i].toLowerCase()
//create if statement to remove vowels aeiou
        if(lowerCase !== "a" && lowerCase !== "e" && lowerCase  !== "i" && lowerCase  !== "o" && lowerCase  !== "u"){
            newString += lowerCase
        }
        }
//else statement to catch non strings
    } else {
        return `${strings} is not a string`
    }
//return in a string
        return newString
    }
    console.log(removeVowels(refactorTester1))
    // console.log(removeVowels(stringWithVowels2))