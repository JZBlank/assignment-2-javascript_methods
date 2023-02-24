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

// callbackFn is NOT invoked for array indexes that 
// do not have assigned values
Array.prototype.myMap = function(callbackFn) {
  let new_array = [];
  
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

// callbackFn is NOT invoked for array indexes that 
// do not have assigned values
Array.prototype.myFilter = function(callbackFn) {
  let new_array = [];
  let index = 0;

  for(let i = 0; i < this.length; i++){
    if(this[i] === undefined) continue;
    if(callbackFn(this[i], i, this)){
      new_array[index] = this[i];
      index += 1;
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

// skips missing elements in sparse arrays but does not skip undefined values
Array.prototype.myReduce = function(callbackFn) {
  index = 0;

  if(typeof initialValue === 'undefined'){
    index = 1;
    accumulator = this[0];
  }
  else{
    accumulator = initialValue;
  }

  if(this.length == 1 && typeof initialValue !== 'undefined'){ // edge case where length == 1, solo value returned without calling callbackFn
    return accumulator;
  }
  else if(this.length == 0 && typeof initialValue === 'undefined'){
    return TypeError("Reduce of empty array with no initial value", "javascript-methods.js");
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

// iterates empty slots as if they have the value undefined
Array.prototype.myIncludes = function(searchElement) {
  for(let i = 0; i < this.length; i ++){
    if(this[i] == searchElement){
      return true;
    }
  }
  return false;
};

// INDEXOF //
// Returns the first index at which a given element can be found in the array
// or -1 if it is not present
// 2 possible parameters: (searchElement, fromIndex) *implement only searchElement*
Array.prototype.myIndexOf = function(searchElement) {
  for(let i = 0; i < this.length; i ++){
    if(this[i] === undefined) continue;
    if(this[i] == searchElement){
      return i;
    }
  }
  return -1;
};

// LASTINDEXOF //
// Returns the last index at which a given element can be found in array
// Return -1 if it is not present
// 2 possible parameters (searchElement, fromIndex) *implement only searchElement*
Array.prototype.myLastIndexOf = function(searchElement) {
  let index = -1;

  for(let i = 0; i < this.length; i++){
    if(this[i] === undefined) continue;
    if(this[i] == searchElement){
      index = i;
    }
  }
  return index;
};

// KEYS //
// Static method that returns an array of a given object's own enumerable string-keyed property names
// 1 parameter: (obj)
Object.myKeys = function(object) {
  let new_array = [];
  let index = 0;

  for(var key in object){
    if(key === undefined) continue;

    new_array[index] = key;
    index += 1;
  }

  return new_array;
};

// VALUES //
// Static method that returns an array of a given object's own enumerable string-keyed property values
// 1 parameter: (obj)
Object.myValues = function(object) {
  let new_array = [];
  let index = 0;

  for(var key in object){
    if(key === undefined) continue;
    
    new_array[index] = object[key];
    index += 1;
  }

  return new_array;
};