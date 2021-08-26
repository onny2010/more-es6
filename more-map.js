const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];

const fLenghts = friends.map(friend => friend.length);
console.log(fLenghts);

const products = [
    { name: 'water bottle', price: 50, color: 'blue' },
    { name: 'Xiaomi Note 4X', price: 12500, color: 'black' },
    { name: 'beats', price: 2500, color: 'green' },
    { name: 'Smart watch', price: 3500, color: 'black' },
    { name: 'Books', price: 500, color: 'White' }
];
const productNames = products.map(product => product.name);
const productPrices = products.map(product => product.price);
const productColor = products.map(product => product.color);
products.map(product => console.log(product));

console.log(productNames, productPrices, productColor);