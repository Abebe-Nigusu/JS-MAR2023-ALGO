// SWAP arr[i] & arr[j]
// OPTION 1
let temp = arr[i]
arr[i] = arr[j]
arr[j] = temp

// OPTION 2
[ arr[i] , arr[j] ] = [ arr[j] , arr[i] ]