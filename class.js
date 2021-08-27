class Support {
    name;
    designation = 'support web dev';
    address;
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}
const aamir = new Support('AAmir Khan', 'Bangladesh');
const salman = new Support('Solaiman khan', 'Dubai');
const shahrukh = new Support('SR khan', 'india');
const saif = new Support('Saif ali khan', 'mumbay');
aamir.startSession();
shahrukh.startSession();
saif.startSession();
console.log(aamir, salman, shahrukh, saif);