// declare variable based on the name of an object property
const myObject = { x: 2, y: 50, z: 600, a: 28, b: 35 };
const { x } = myObject;
console.log('myObject.p:', myObject?.p?.q);

// destructuring array
const [p, q] = [28, 35, 91, 86];
console.log(p, q);

const [best, faltu] = ['tonni', 'onny'];
console.log(best, faltu);
const { sky, money } = { sky: 'blue', soil: 'mati', color: 'red', money: 500 }
console.log(sky, money);


const company = {
    name: 'GP',
    ceo: {
        id: 1,
        name: 'Ajmol',
        food: 'fuchka'
    },
    web: {
        work: 'wesite development',
        employee: 22, framework: 'react',
        tech: {
            first: 'html',
            seconde: 'css',
            third: 'js'
        }
    }
};
console.log(company?.web.backEnd.tech?.third);