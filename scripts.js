
// 1a. Programmatically subtract the value of the first element in the ages array from the value in the last element of the array 

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

function lastMinusFirst(ages) {
  let firstNum = ages[0];
  let lastNum = ages[ages.length-1];
  return lastNum - firstNum;
}

console.log("1a. Programmatically subtract the value of the first element in the ages array from the value in the last element of the ages array. " ,lastMinusFirst(ages))

// 1b. Add a new age to your array and repeat the step above to ensure it is dynamic.

let ages2 = [3, 9, 23, 64, 2, 8, 28, 93, 106];

function lastMinusFirst(ages2) {
    let firstNum = ages2[0];
    let lastNum = ages2[ages2.length-1];
    return lastNum - firstNum;
}
  
console.log("1b. Add a new age to your ages array and repeat the step above to ensure it is dynamic.", lastMinusFirst(ages2))

// 1c. Use a loop to iterate through the array and calculate the average age.

let total = 0;

function sum(ages) {
for (i = 0; i < ages.length; i++) {
    total += ages[i];
 }
 return total;
}

// console.log("HERE'S TOTAL'S VALUE", sum(ages));

let averageAges = sum(ages) / ages.length;

console.log("1c. Use a loop to iterate through the ages array and calculate the average age.", averageAges);

// 2a. Use a loop to iterate through the names array and calculate the average number of letters per name. 
//Unsure if reduce technically counts as a loop

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]; 

let lengths = names.map(function (element) {
    return element.length;
});

let totalNamesLengths = lengths.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
});

let namesAverage = totalNamesLengths / names.length;

console.log("2a. Use a loop to iterate through the names array and calculate the average number of letters per name.", namesAverage)

// 2b. Use a loop to iterate through the names array again and concatenate all the names together, separated by spaces. 

let allNames = names[0] + " ";

function concatArray(names) {
    for (let i = 1; i < names.length; i++) {
        allNames += names[i] + " ";
     }
     return allNames;
}

console.log("2b. Use a loop to iterate through the names array again and concatenate all the names together, separated by spaces.", concatArray(names))

//* 3.How do you access the last element of any array?

console.log("3.How do you access the last element of any array?", "MY ANSWER: Using the pop() array method") 

//* 4. How do you access the first element of any array?

console.log("4.How do you access the first element of any array?", "MY ANSWER: Using the shift() array method") 

//* 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let nameLengths = [];

let pullLengths = names.map(function (element) {
    nameLengths.push(element.length);
    return element.length;
});

console.log("5. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.", nameLengths)

//* 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. // 

let nameLengthsSum = nameLengths.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
});

console.log("6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.", nameLengthsSum)

//* 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.

function concatWord(word, n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += word;
    }
    return result;
}

console.log("7. function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times." , concatWord('Hey', 4))

//* 8. Write a function that takes two parameters, firstName and lastName, and returns a full name.

let firstName = "Hannah";
let lastName = "Guay";

function fullName() {
    return firstName + " " + lastName;
}

console.log("8. Write a function that takes two parameters, firstName and lastName, and returns a full name separated by a space.", fullName())

//* 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let batch = [25, 75, 35];

let batchLength = batch.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
});

function isBatchSumGreater () {
    if (batchLength > 100) {
        return true;
    }
}


console.log("9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.", isBatchSumGreater(batch))

//* 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

let arrayOfNumbers = [25, 45, 75];

let arrayLength = arrayOfNumbers.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
});

let arrayOfNumbersAverage = arrayLength / arrayOfNumbers.length;

console.log("10. Write a function that takes an array of numbers and returns the average of all the elements in the array.", arrayOfNumbersAverage)

//* 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

let array1 = [3, 4, 5];
let array2 = [1, 2, 3];

let array1Length = array1.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
});

let array2Length = array2.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
});

let array1Average = array1Length / array1.length;
let array2Average = array2Length / array2.length;

function arrayCompare() {
    if (array1Average > array2Average) {
        return true;
    }
}

console.log("11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.", arrayCompare());

//* 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

let isHotOutside = true; //globally scoped/accessible 
let moneyInPocket = 10.10;

function willBuyDrink() {
    if (isHotOutside == true && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}

console.log("12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.", willBuyDrink())

//* 13. Create a function of your own that solves a problem. 
//Here is a cat counter. In Expression 1, we set the value of the variable numberOfCats to 0. Expression 2 will evaluate that numberOfCats is <10 is true, and if it is true, then it will move on to Expression 3 where the increment operator will add 1 to the value of numberOfCats, as well as print a message regarding the quanity of cats. Now the loop will continue to run until Expression 2 evaluates that numberOfCats is <10 is false, at which point it will print a message that we have enough cats. 
console.log("13. Create a function of your own that solves a problem.")

function catCounter() {
    for (let numberOfCats = 0; numberOfCats <10; numberOfCats++) {
    console.log('We only have ' + numberOfCats + ', we need more!');
    } 
    return '** We have enough cats! **';
}

console.log(catCounter())


