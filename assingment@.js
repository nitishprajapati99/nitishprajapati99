//JavaScript program to display 'Hello, World!' on the console.
console.log("Hello World!");

//JavaScript program to add two numbers and display the result.
function Twonum(a,b){

  console.log(a+b);
}

//JavaScript program to check whether a number is even or odd
function EvenOdd(b){
  if(b%2==0){
    console.log("The number is even");
  }else{
    console.log("The number is odd");
  }
}

//JavaScript program to find the largest of two numbers.
function largenum(a,b){
  if(a>b){
    console.log("A is greater");
  }else{
    console.log("B is greater");
  }
}

//JavaScript program to calculate the square of a number.
function square(sqr){
  console.log(`The Square of ${sqr} is ${sqr * sqr}`);
}
  
// JavaScript program to swap two numbers using a temporary variable
function swap(a,b){

  let c=a;
  a=b;
  b=c;
  console.log('a '+a+' b '+b)
}

//JavaScript program to print the multiplication table of a given number.
function factorial(fact){ 
  
  if(fact==0){
    console.log("factorial of fact is "+1);
    
  }else{
    for(i=fact-1;i>0;i--){
      fact=fact*i;
    }
    console.log(fact)
  }
}
  
//JavaScript program to reverse a number (e.g., 123 → 321).

function reversedNum(num){

  let reversed = 0;
  
  while (num > 0) {
    let digit = num % 10;           // Get last digit
    reversed = reversed * 10 + digit; // Add digit to reversed
    num = Math.floor(num / 10);   }
    console.log(reversed);
  }
    
    // JavaScript program to check whether a year is a leap year or not
    function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log( `${year} is a Leap Year`);
  } else {
    console.log( `${year} is NOT a Leap Year`);
  }
  }
