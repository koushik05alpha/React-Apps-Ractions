const array = [1,2,3,4,5]

const reducer = (accumuator, currentvale) => accumuator + currentvale

console.log(array.reduce(reducer));

console.log(array.reduce(reducer, 5));

// console.log(array.reduce((total, value) => total + value));


// for (let index = 0; index < array.length; index++) {
//     total += array[index] 
// }

// array.forEach(value => total += value)

