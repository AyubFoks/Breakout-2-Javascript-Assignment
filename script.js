// Question 01

let a = 5; 
let b = "5";

console.log(a == b); // Output: true, because == checks for value equality and performs type coercion  
console.log(a === b); // Output: false, because === checks for both value and type equality



// Question 02

function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
    }


// Question 03

function gradingSystem(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 70) {
    return "Fail";
    }


// Question 04

function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true; 
  if (n % 2 === 0) return false; 


//Question 05

function reverseString(str) {
  return str.split('').reverse().join('');
}


// Question 06

let userName = "admin";
let password = "1234";
if (userName === "admin" && password === "1234") {
  console.log("Access granted");
}   else {
  console.log("Access denied");
}

// Question 07

function evaluatePassword(password) {
  const isLongEnough = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasUppercase = /[A-Z]/.test(password);

  return isLongEnough && hasNumber && hasUppercase ? "Strong" : "Weak";
}


// Question 08

function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  return cleanedStr === cleanedStr.split('').reverse().join('');
}


// Question 09

function checkMultiplesOf3_5(number) {
  if (number % 3 === 0) {
    console.log("Fizz");
    else if (number % 5 === 0) {
    console.log("Buzz");
  } else if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
  } 
    }


// Question 10

function drawTree(n) {
  for (let i = 1; i <= n; i++) {
    console.log('*'.repeat(i));
  }
}

