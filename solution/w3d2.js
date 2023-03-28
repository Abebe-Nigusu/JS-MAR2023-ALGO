/* 
  Given a search criteria object whose values will only be
  primitives (ints, strings, booleans) and a list of objects.
  return any object that matches all the key value pairs in the search
  criteria object.
  Bonus: write a 2nd solution using build in methods to practice functional
  programming.
*/

/* both functions pulled from yesterday (w3d1)
  function entries(obj) {
    for(const eachKey in obj){
      obj.hasOwnProperty(eachKey)?
        console.log(`${eachKey}: ${obj[eachKey]}`):
        null
    }
  }

    function insert(tableName, columnValuePairs) {
    const keys = []
    const values = []
    for(const eachKey in columnValuePairs){
      keys.push(eachKey)
      typeof columnValuePairs[eachKey] === 'string' ?
        values.push(`'${columnValuePairs[eachKey]}'`) :
        values.push(columnValuePairs[eachKey])
    }
    console.log(`INSERT INTO ${tableName} (${keys}) VALUES (${values})`)
  }
*/

const users = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 }, 
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 }, 
    { firstName: "Bob", lastName: "White", age: 31 }, 
  ];
  
  const searchCriteria1 = {
    firstName: "Bob",
    age: 31,
  };
  // const expected1 = [
  //   { firstName: "Bob", lastName: "Bobbert", age: 31 },
  //   { firstName: "Bob", lastName: "White", age: 31 },
  // ];
  
  const searchCriteria2 = {
    lastName: "Smith",
  };
  // const expected2 = [
  //   { firstName: "John", lastName: "Smith", age: 25 },
  //   { firstName: "Bob", lastName: "Smith", age: 27 },
  // ];

// for (let i = 0; i < collection.length; i++) {
//       console.log(i)
//       for (const eachKey in collection[]) {
//         collection.hasOwnProperty(eachKey)?
//         console.log(`${eachKey}: ${collection[eachKey]}`):
//         null;
  
/* collection [
    { firstName: "Bob", lastName: "Bobbert", age: 31 }, 
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 }, 
    { firstName: "Bob", lastName: "White", age: 31 }, 
  ];
*/

// collection[i] : { firstName: "Bob", lastName: "Bobbert", age: 31 }
// eachKey : firstName
// criteria : { firstName: "Bob", age: 31 }

  function findObjects(criteria, collection) {
    foundCriteria = [];
    let matching = true
    // console.log(collection)
    for (let i = 0; i < collection.length; i++) {
      for (const eachKey in criteria) {
        matching = true
        if (criteria[eachKey] !== collection[i][eachKey]) {
          matching = false
        }
      }
      if(matching){
          foundCriteria.push(collection[i])
      }
    }
    return foundCriteria
  }

console.log(findObjects(searchCriteria1, users))
//console.log(findObjects(searchCriteria2, users))


function findObjectsFunctional(criteria, collection) {
  return collection.map((eachObj) => {
    if (Object.entries(criteria).every(([eachKey, eachVal]) => eachObj[eachKey] === eachVal)) {
      return eachObj
    }
  })
}

const functionalFindObjects = (criteria, collection) =>
  collection.filter((item) =>
    Object.keys(criteria).every((key) => item[key] === criteria[key])
  );
  
  
  /* 
    Given an id, an object that has keys with corresponding updated values, and an array of objects
    Find the object by "id" key that matches the given id value and then update that object's
    keys with the provided new values.
    Return the updated object, or null if no object was found
  */
  
  
  
  const students = [
    {
      id: 1,
      name: "student1",
      isLateToday: false,
      lateCount: 15,
      redBeltStatus: false,
    },
    {
      id: 2,
      name: "student2",
      isLateToday: false,
      lateCount: 1,
      redBeltStatus: false,
    },
    {
      id: 3,
      name: "student3",
      isLateToday: false,
      lateCount: 0,
      redBeltStatus: false,
    },
  ];
  
  const id1 = 3;
  const updateData1 = { redBeltStatus: true, isLateToday: true };
  
  
  /*const expected1 = {
    id: 3,
    name: "student3",
    isLateToday: true,
    lateCount: 0,
    redBeltStatus: true,
  };
  */
  const id2 = 1;
  const updateData2 = {
    isLateToday: true,
    lateCount: 16,
    randomKey: "randomValue",
  };
  /*const expected2 = {
    id: 1,
    name: "student1",
    isLateToday: true,
    lateCount: 16,
    redBeltStatus: false,
  };
  */
  /* 
    Explanation: In this implementation
      randomKey was not added because it is not an existing key that can be updated
  */
  
  const id3 = 5;
  const updateData3 = {};
  const expected3 = null;
  
  function findByIdAndUpdate(id, updatedVals, collection) {
    for(const eachItem of collection){
      if(eachItem.id == id){
        for(const key in updatedVals){
          if(eachItem.hasOwnProperty(key)){
            const value = updatedVals[key]
            eachItem[key] = value
          }
        }
        return eachItem
      }
    }
  return null
  }