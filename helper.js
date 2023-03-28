// SWAP arr[i] & arr[j]
// OPTION 1
// let temp = arr[i]
// arr[i] = arr[j]
// arr[j] = temp

// OPTION 2
// [arr[i], arr[j]] = [arr[j], arr[i]]


// Array
const animalList = ["cats", "dogs", "pokemons", "unicorn", "dragons"]

// Object
const pet = {
  petname: "Pepper",
  age: 14,
  haircolor: "White"
}

const proto = { weight: 10, protoFunction: "protoValue" };
const petWithProto = Object.assign(Object.create(proto), pet);


// loop through the array (normal for-loop)
for (let i = 0; i < animalList.length; i++) {
  console.log(animalList[i])
}

// loop through an array (for...of)
for (const eachItem of animalList) {
  console.log(eachItem)
}

// loop through an object (for... in)
for(const eachKey in petWithProto){
  console.log(petWithProto.hasOwnProperty(eachKey))
  console.log(`${eachKey} : ${petWithProto[eachKey]}`) 
}

console.log(Object.entries(petWithProto))

const test = "Test"
console.log(test.toLowerCase())
console.log(test.toUpperCase())


for (const eachItem of test) {
  console.log(eachItem)
}






                           