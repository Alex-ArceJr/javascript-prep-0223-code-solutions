function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumber exercise:', addTwoNumbersResult);

function covertHoursToMinutes(hours) {
  return hours * 60;
}
var covertHoursToMinutesResults = covertHoursToMinutes(2);
console.log('covertHoursToMinutes exercise:', covertHoursToMinutesResults);

function getGreeting(name) {
  return 'Hello, ' + name;
}
var getGreetingResult = getGreeting('world!');
console.log('getGreeting exercise:', getGreetingResult);

function addAndMultiplyby5(num1, num2) {
  return (num1 + num2) * num2;
}
var addAndMultiplyby5Result = addAndMultiplyby5(10, 5);
console.log('addAndMultiplyBy5 exercise:', addAndMultiplyby5Result);

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}
var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 exercise:', multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumber exercise:', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 2 * 3.14 * radius;
}
var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumference exercise:', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var getFullNameResult = getFullName('Alex', 'Arce');
console.log('getFullName exercise:', getFullNameResult);

function cube(number) {
  return Math.pow(number, 3);
}
var cubeResult = cube(5);
console.log('cube exercise:', cubeResult);
