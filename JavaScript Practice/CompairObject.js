// Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.

function compareObjects(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      if (!obj2.hasOwnProperty(key)) {
        return false;
      }
  
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    return true;
  }
  
  const obj1 = { name: "John", age: 30, city: "New York" };
  const obj2 = { name: "John", age: 30, city: "New York" };
  const obj3 = { name: "Jane", age: 25, city: "Boston" };
  
  console.log(compareObjects(obj1, obj2)); 
  console.log(compareObjects(obj1, obj3)); 