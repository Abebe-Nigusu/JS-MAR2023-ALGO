 /* 
This was extracted from a react interview challenge. The items were to be displayed in category groups.
Given an array of objects that contain a category key,
return a hash table to group the objects by their category.
Make the grouping case-insensitive.
Bonus: allow the key that is grouped by to be provided.
*/


const objects = [
  {
    name: "Baby Yoda",
    category: "cute",
  },
  {
    name: "Cricket Protein",
    category: "food",
  },
  {
    name: "Groot",
    category: "Cute",
  },
  {
    name: "House of Dragon",
    category: "TV Show",
  },
  {
    name: "Wasp Crackers",
    category: "Food",
  },
  {
    name: "Stranger Things",
    category: "TV Show",
  },
];

const expected = {
  cute: [
    {
      name: "Baby Yoda",
      category: "cute",
    },
    {
      name: "Groot",
      category: "Cute",
    },
  ],
  food: [
    {
      name: "Cricket Protein",
      category: "food",
    },
    {
      name: "Wasp Crackers",
      category: "Food",
    },
  ],
  "TV show": [
    {
      name: "House of Dragon",
      category: "TV show",
    },
    {
      name: "Stranger Things",
      category: "TV show",
    },
  ],
};

/* 
Given an array of objects that contain a category key,
return a hash table to group the objects by their category.
Make the grouping case-insensitive.
Bonus: allow the key that is grouped by to be provided.
*/
function groupObjects(items) {
const newGroup = {};

  // array1.forEach(element => console.log(element));
  // given [a, b, c] console log will print a, b, c on new lines

items.forEach((item) => {
  const key = item.category.toLowerCase(); //"cute"
    if (!newGroup[key]) { // if the new category is not yet a key, push
      newGroup[key] = []; //empty array for each category to push into
    }
    newGroup[key].push(item);
    });
  //end of forEach
  return newGroup;
}



// make a frequency table
// iterate through each item in items
// create our key for new freq table based on category
// if key is not in freq table yet, keep it in there and add an empty array for the value for us to push results into
// push individual items that have the corresponding keys

function groupObjects(items) {
  const result = {};
  
  for(let i = 0; i < items.length; i++) {
    const key = items[i].category.toLowerCase();
    if(result[key]) result[key].push(items[i]);
    else result[key] = [items[i]];
  }

  return result;
}


const groupObjectsReduce = (items, groupByKey = "category") =>
  items.reduce((table, item) => {
    const lowerCaseCat = item[groupByKey].toLowerCase();

    if (!table.hasOwnProperty(lowerCaseCat)) {
      table[lowerCaseCat] = [];
    }

    table[lowerCaseCat].push(item);

    return table;
  }, {});



console.log(groupObjects(objects))
// inside the for loop...declare var for key
// key = string of 'category'
// item[key].toLowerCase


/* 
  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.
  # character means a backspace character.
  i.e., after processing the backspaces, are the two strings equal?
  Bonus: solve in O(n) time
*/

const S1 = "ab#c"; // ac
const T1 = "ad#c"; // ac
const expected1 = true;
// Explanation: Both S and T become "ac"

const S2 = "ab##"; // ""
const T2 = "c#d#"; // ""
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c"; // c
const T3 = "#a#c"; // c
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c"; // c
const T4 = "ac#"; // a
const expected4 = false;
// Explanation: S becomes "c" while T becomes "a".

/**
 * Determines if the given strings are equal after the backspace characters
 * "#" are processed.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} S
 * @param {string} T
 * @returns {boolean} Whether the given strings are equal after backspaces
 *    have been processed.
 */
function backspaceStringCompare(S, T) {
    let arrS = [];
    let arrT = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] == '#') {
            arrS.pop();
        } else {
            arrS.push(S[i]);
        }
    }
    for (let i = 0; i < T.length; i++) {
        if (T[i] == '#') {
            arrT.pop();
        } else {
            arrT.push(T[i]);
        }
    }

    if (arrS.length !==arrT.length) {
        return false;
    }

    for (let i = 0; i < arrS.length ; i++) { // 0
        if (arrS[i] !== arrT[i]) {
            return false;
        } 
    }
    return true;
}



