/* 
  Given an array of objects, a searchFor string, and searchBy key that exists
  in the object return a new array of only those objects whose value for the
  given key starts with the given search string.
  You can assume the key will exist on the object and the value of that key
  will be a string.
  Bonus: make the search case insensitive.
  Bonus: re-write it with functional programming, using built in methods.
  Bonus: allow the search method to be provided as a parameter, e.g.,
      string methods: includes, startsWith, endsWith.
    - you can assume the searchMethod will be valid.
  This kind of algorithm can be used in react onChange as you type into a
  search bar to live-filter a list.
*/

const people = [
    {
      firstName: "John",
      lastName: "Doe", 
    },
    {
      firstName: "Jane",
      lastName: "Doe",
    },
    {
      firstName: "Eddy",
      lastName: "Lee",
    },
    {
      firstName: "John",
      lastName: "Fawn",
    },
    {
      firstName: "Edward",
      lastName: "Kim",
    },
  ];
  
  const searchFor1 = "Jo"; // keyword
  const searchBy1 = "firstName"; // the key to search
  const expected1 = [
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "John",
      lastName: "Fawn",
    },
  ];
  
  const searchFor2 = "ohn";
  const searchBy2 = "firstName";
  const expected2 = [];
  // Explanation: "John" contains "ohn", it does not start with "ohn"
  
  // level 2 - case insensitive
  const searchFor3 = "do";
  const searchBy3 = "lastName";
  const expected3 = [
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
    },
  ];
  
  // Bonus
  const searchFor4 = "E";
  const searchBy4 = "lastName";
  const searchMethod4 = "includes";
  const expected4 = [
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
    },
    {
      firstName: "Eddy",
      lastName: "Lee",
    },
  ];
  
  /**
   * Filters the given items based on the search criteria using a startsWith
   * search method.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Array<Object>} items The items to be filtered.
   * @param {string} searchBy The key to search by.
   * @param {string} searchFor The value of the given key to search for.
   * @returns {Array<Objects>} The matched items.
   */
  // Level 1: case-sensitive
  // Level 2: case-insensitive
  // Level 3: use different searchMethod
  // Level 4: make it functional
    function filterByKeyStartsWith(items, searchFor, searchBy) {
      //
      const declaredItems = [];

      for (const item of items) { // loop through the array
        let matching = true;
        for(let i =0; i<searchFor.length; i++){
          if(item[searchBy][i] !== searchFor[i]){
            matching = false
          }
        }
        if(matching){
            declaredItems.push(item);
        }
      }

    function filterByKeyStartsWith(items, searchFor, searchBy) {
      //
      const declaredItems = [];

      for (const item of items) { // loop through the array
        if (item[searchBy].startsWith[searchFor]) {
          declaredItems.push(item);
        }
      } 
      //item : { firstName: "John", lastName: "Doe" }
      // searchFor :"Jo"
      // searchBy:  "firstName"
      // item["firstName"] = "John"
      // item["firstName"].startsWith(searchFor)
      
     // Filters the given items based on the search criteria using a startsWith
    
  
  
   function filterByKey(items, searchFor, searchBy, searchMethod = "startsWith") {
   // Filters the given items based on the search criteria using different search method
   // search method : includes, startsWith, endsWith
    console.log(searchMethod)
    const searchResults = []
      for (item of items) {
          if (item[searchBy][searchMethod](searchFor)) {
            searchResults.push(item)
          } 
        }
      }
      return searchResults
  }
  
  
  function functionalFilterByKey(items, searchFor, searchBy, searchMethod = "startsWith") {
    return items.filter((item)=>item[searchBy][searchMethod](searchFor))
  } 