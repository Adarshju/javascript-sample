// sum of two number
const num1 = prompt("Enter the first number:  For Sum");
const num2 = prompt("Enter the second number: For Sum");
const sum = parseFloat(num1) + parseInt(num2);
console.log("sum of two numbers  " + sum);

//rectangle area calculation

const width = parseInt(prompt("Enter The Rectangle width  For area calculation"));
const length = parseInt(prompt("Enter The Rectangle length  For area calculation"));
const area = width * length;
console.log("Area Of The Rectangle " + area);

// voting eligiblity checking

const age = parseInt(prompt("Enter The Age For Voting: "))

if(age>=18){
    console.log("You Are Eligible For Voting");
}else{
    console.log("You Are Not Eligible For Voting");
}

// pass or failed

const grade = parseInt(prompt("Enter Your Grade :"))
if (grade>=60) {
    console.log("You Passed");
}else{
    console.log("You Failed");
}

// Zero Or Postive

const num = parseInt(
  prompt("Enter a  Number For Checking Postive OR Negative")
);

if (num > 0) {
  console.log("Your Enter Number " + num + " Is Positive");
} else if (num < 0) {
  console.log("Your Enter Number " + num + " Is Negative");
} else {
  console.log("Your Enter Number " + num + " Is Zero");
}

// // Checking Your Age child or Above

const age_check = parseInt(
  prompt("Enter Your Age For Checking Your Are teenager Or Above")
);

if (age_check < 0) {
  console.log("Please Enter Your Valid Age");
} else if (age_check <= 12) {
  console.log("You Are Child");
} else if (age_check <= 19) {
  console.log("You Are Teenager");
} else if (age_check <= 59) {
  console.log("You Are Adult");
} else {
  console.log("You Are Senior");
}

