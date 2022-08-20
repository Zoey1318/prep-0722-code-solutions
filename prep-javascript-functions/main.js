function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumbersExercise:', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log('converthourToMinExercise:', convertHoursToMinutesResult);

function getGreeting(name) {
  return '"Hello' + ' ' + name + '!"';
}

var getGreetingResult = getGreeting('World');
console.log('getGreetingExercise:', getGreetingResult);

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}

var multiplyAndDivideResult = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideExercise:', multiplyAndDivideResult);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbersExercise:', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumferenceResult:', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return '"' + firstName + ' ' + lastName + '"';
}

var getFullNameResult = getFullName('Juan', 'Ramirez');
console.log('getFullNameExe:', getFullNameResult);

function cube(number) {
  return number * number * number;
}

var cubeResult = cube(5);
console.log('cubeExe:', cubeResult);
