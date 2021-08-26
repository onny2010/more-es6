// template string
const someone = 'Tonni';
const myNotes = `I am mojnu of ${someone}. I dont have a Laily`;
console.log(myNotes);

// default parameter and spread or three dots
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber();
console.log(biggest);

// arrow function
// function square(x) {
//     return x * x;
// }

const square = x => x * x;
console.log(square(28));