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
    if(callbackFn(this[i], i, this)){
      new_array[index] = this[i];
      index += 1
    }
  }
  return new_array;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  // Place your code here.
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  // Place your code here.
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  // Place your code here.
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  // Place your code here.
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  // Place your code here.
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

//FILTER VS MYFILTER
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);
// console.log(result);
// console.log('------------------------------------');

// const result2 = words.myFilter(word => word.length > 6);
// console.log(result2);
// console.log('------------------------------------');
// const fruits = ["apple", "banana", "grapes", "mango", "orange"];

// ---------------------------------------------------------------------------------------------- //














