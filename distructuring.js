const fish = { id: 28, name: 'king hilsha', price: 9000, phone: '01621113333', address: 'Chandpur', dress: 'silver' };

// const phone = fish.phone;
// const price = fish.price;
// const name = fish.name;
// const address = fish.address;
// const id = fish.id;

const { phone, price, address, id } = fish;
console.log(phone, id, price, address);


const company = {
    name: 'GP',
    ceo: { id: 1, name: 'Ajmol', food: 'fuchka' },
    web: { work: 'wesite development', employee: 22, framework: 'react' }
};

// const work = company.web.work;
// const framework = company.web.framework;

const { work, }