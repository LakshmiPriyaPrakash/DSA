const a0 = [1, 2, 3];
const a1 = [4, 5, 6];
const a2 = [7, 8, 9];

const a3 = a1.concat(a2, a0);

// console.log(a3)

const a4 = [2, 4, 6];
const a5 = [2, 4, 5, 6];

// console.log(a4.every((num) => num % 2 === 0))
// console.log(a5.every((num) => num % 2 === 0))

const a6 = [1, 2, 3, 4, 5, 6, 7];

// console.log(a6.find((num) => num > 5))
// console.log(a6.findIndex((num) => num > 5))

const a7 = [1, 2, [3, 4, [5, 6, [7, 8]]]];

// console.log(a7.flat()); //depth defaults to 1
// console.log(a7.flat(2));
// console.log(a7.flat(Infinity));


const a8 = [1, 2, 3, 4, 5];

const arr = a8.splice(1, 3, -2, -3, -4);
console.log(arr);
console.log(a8);

const arr2 = a8.splice(1, 3, "*");
console.log(arr2);
console.log(a8);
