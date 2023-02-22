/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
// Creates a new array populated with the results of calling a provided function
// on every element in the calling array
// 3 parameters: (element, index, array)
Array.prototype.myMap = function(callbackFn) {
  let new_array = []
  
  for(let i = 0; i < this.length; i++){
    if(this[i] === undefined) continue; // if element at index is null then skip rest of code 
    new_array[i] = callbackFn(this[i], i, this); // new_array[i] is now equal to callbackFn result
  }
  return new_array;
};

// FILTER //
// Creates a shallow copy of a portion of a given array, filtered down to just the elements
// from given array that pass test implemented by provided function
// 3 parameters: (element, index, array)
Array.prototype.myFilter = function(callbackFn) {
  let new_array = []
  let index = 0;

  for(let i = 0; i < this.length; i++){
    if(this[i] === undefined) continue;
    if(callbackFn(this[i], i, this)){
      new_array[index] = this[i];
      index += 1
    }
  }
  return new_array;
};

// SOME //
// Tests whether at least one element in the array passes the test 
// implemented by the provided function
// Returns true if it finds an element for which provided function returns true
// Does not modify the array
// 3 parameters: (element, index, array)
Array.prototype.mySome = function(callbackFn) {
  for(let i = 0; i < this.length; i++){
    if(this[i] === undefined) continue;
    if(callbackFn(this[i], i, this)){
      return true;
    }
  }
  return false;
};

// EVERY //
// Test whether all the elements in the array pass the test implemented by the provided function
// Returns a boolean value
// 3 parameters: (element, index, array)
Array.prototype.myEvery = function(callbackFn) {
  for(let i = 0; i < this.length; i++){
    if(this[i] === undefined) continue;
    if(!callbackFn(this[i], i, this)){
      return false;
    }
  }
  return true;
};

// REDUCE //
// method executes a user-supplied "reducer" callback function on each element of the array,
// in order, passing in the return value from the calculation on the preceding element.
// The final result of running the reducer across all elements of the array is a single value.
// First time callback is run, there is no previous return value, can be supplied
// 4 parameters: (accumulator, currentValue, currentIndex, array)
Array.prototype.myReduce = function(callbackFn) {
  index = 0;

  if(typeof initialValue === 'undefined'){
    index = 1;
    accumulator = this[0];
  }
  else{
    accumulator = initialValue;
  }

  for(let i = index; i < this.length; i++){
    accumulator = callbackFn(accumulator, this[i], i, this);
  }

  return accumulator;
};

// INCLUDES //
// Determines whether an array includes a certain value among its entries
// returns true or false 
// 2 possible parameters: (searchElement, fromIndex) *implement only searchEelement*
Array.prototype.myIncludes = function(searchElement) {
  for(let i = 0; i < this.length; i ++){
    if(this[i] == searchElement){
      return true;
    }
  }
  return false;
};

// INDEXOF //
// Determines whether an array includes a certain value among its entries
// returns true or false 
// 2 possible parameters: (searchElement, fromIndex) *implement only searchEelement*
Array.prototype.myIndexOf = function(searchElement) {
  for(let i = 0; i < this.length; i ++){
    if(this[i] === undefined) continue;
    if(this[i] == searchElement){
      return true;
    }
  }
  return false;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};

// MAP VS MYMAP //

// myArray = [1,4,9,16]
// const map1 = myArray.map(x => x * 2);

// console.log("Original 'map' function:")
// console.log(map1)
// console.log('------------------------------------')

// const map2 = myArray.myMap(x => x * 2);

// console.log("My 'map' function:")
// console.log(map2)
// console.log('------------------------------------')

// ---------------------------------------------------------------------------------------------- //

// FILTER VS MYFILTER
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);
// console.log(result);
// console.log('------------------------------------');

// const result2 = words.myFilter(word => word.length > 6);
// console.log(result2);
// console.log('------------------------------------');
// const fruits = ["apple", "banana", "grapes", "mango", "orange"];

// ---------------------------------------------------------------------------------------------- //

// SOME VS MYSOME
// function isBiggerThan10(element, index, array) {
//   return element > 10;
// }

// console.log([2, 5, 8, 1, 4].some(isBiggerThan10)); // false
// console.log([12, 5, 8, 1, 4].some(isBiggerThan10)); // true
// console.log('------------------------------------');

// console.log([2, 5, 8, 1, 4].mySome(isBiggerThan10)); // false
// console.log([12, 5, 8, 1, 4].mySome(isBiggerThan10)); // true
// console.log('------------------------------------');

// ---------------------------------------------------------------------------------------------- //

// EVERY VS MYEVERY
// const isBelowThreshold = (currentValue) => currentValue < 40;

// const array1 = [1, 30, 39, 29, 10, 13];

// console.log(array1.every(isBelowThreshold));
// console.log('------------------------------------');

// console.log(array1.myEvery(isBelowThreshold));
// console.log('------------------------------------');

// ---------------------------------------------------------------------------------------------- //

// REDUCE VS MYREDUCE
// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue, initialValue
// );

// const sumWithInitial2 = array1.myReduce(
//   (accumulator, currentValue) => accumulator + currentValue, initialValue
// );


// console.log(sumWithInitial);
// console.log('------------------------------------');

// console.log(sumWithInitial2);
// console.log('------------------------------------');

// const array = [15, 16, 17, 18, 19];

// function reducer(accumulator, currentValue, index) {
//   const returns = accumulator + currentValue;
//   console.log(
//     `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
//   );
//   return returns;
// }

// array.reduce(reducer);
// console.log('------------------------------------');

// array.myReduce(reducer);

// const getMax = (a, b) => Math.max(a, b);

// // callback is invoked for each element in the array starting at index 0
// console.log([1, 100].reduce(getMax, 50)); // 100
// console.log([50].reduce(getMax, 10)); // 50

// // callback is invoked once for element at index 1
// console.log([1, 100].reduce(getMax)); // 100

// // callback is not invoked
// console.log([50].reduce(getMax)); // 50

// console.log("--------------------------------")
// // callback is invoked for each element in the array starting at index 0
// console.log([1, 100].myReduce(getMax, 50)); // 100
// console.log([50].myReduce(getMax, 10)); // 50

// // callback is invoked once for element at index 1
// console.log([1, 100].myReduce(getMax)); // 100

// // callback is not invoked
// console.log([50].myReduce(getMax)); // 50

// console.log([].myReduce(getMax, 1)); // 1

// console.log([].myReduce(getMax)); // TypeError

// ----------------------------------------------------------------------------------------------

// const array1 = [1, 2, 3];

// console.log(array1.includes(2));
// // Expected output: true
// console.log('------------------------------------');

// console.log(array1.myIncludes(2));
// Expected output: true

// console.log('------------------------------------');

// const pets = ['cat', 'dog', 'bat'];

// console.log(pets.includes('cat'));
// // Expected output: true

// console.log(pets.includes('at'));
// // Expected output: false
// console.log('------------------------------------');


// console.log(pets.myIncludes('cat'));
// // Expected output: true

// console.log(pets.myIncludes('at'));
// // Expected output: false
// console.log('------------------------------------');

// console.log([1, , 3].includes(undefined)); // true
// console.log([1, , 3].myIncludes(undefined)); // true

// ----------------------------------------------------------------------------------------------

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true
console.log('------------------------------------');

console.log(array1.myIncludes(2));
// Expected output: true

console.log('------------------------------------');

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false
console.log('------------------------------------');


console.log(pets.myIncludes('cat'));
// Expected output: true

console.log(pets.myIncludes('at'));
// Expected output: false
console.log('------------------------------------');

console.log([1, , 3].includes(undefined)); // true
console.log([1, , 3].myIncludes(undefined)); // true

























