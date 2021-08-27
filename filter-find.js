const numbers = [23, 28, 35, 77, 98, 40, 191];
// 1.filter's work
const bigNumbers = numbers.filter(number => number > 23);
const smallNumbers = numbers.filter(number => number < 77);
// console.log(bigNumbers, smallNumbers);

// 2. filter and find using on array of objects
const products = [
    { name: 'water bottle', price: 50, color: 'blue' },
    { name: 'Xiaomi Note 4X', price: 12500, color: 'black' },
    { name: 'beats', price: 300, color: 'green' },
    { name: 'Smart watch', price: 3500, color: 'black' },
    { name: 'Books', price: 500, color: 'white' }
];
// const expensive = products.filter(product => product.price > 400);
// console.log(expensive);
// const blacks = products.filter(product => product.color = 'black');
// console.log(blacks);
// const names = products.filter(product => product.name);
// console.log(names);

const whiteItem = products.find(product => product.color == 'white');
console.log(whiteItem);