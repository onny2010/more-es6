class TeamMember {
    name;
    address;
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember {
    groupSupportTime;
    designation = 'support web dev';
    constructor(name, address, time) {
        super(name, address)
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

class StudentCare extends TeamMember {
    groupSupportTime;
    designation = 'lovely person';
    constructor(name, address, time) {
        super(name, address)
        this.groupSupportTime = time;
    }
    buildARoutine(student) {
        console.log(this.name, 'build a routine', student);
    }
}

class NeptuneDev extends TeamMember {
    codeEdtior;
    designation = 'Neptun App dev';
    constructor(name, address, editor) {
        super(name, address)
        this.codeEdtior = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version);
    }
}



const aamir = new Support('AAmir Khan', 'Bangladesh', 11);
const salman = new Support('Solaiman khan', 'Dubai', 4);
const shahrukh = new Support('SR khan', 'india', 10);
const saif = new Support('Saif ali khan', 'mumbay', 3);

const alia = new NeptuneDev('Alia Bhatt', 'Mumbai', 'Android Studio');
const tonni = new StudentCare('Tasnia Hossain', 'Dinajpur', 12);
alia.releaseApp('1.4.5');

console.log(tonni.name);
console.log(aamir);
console.log(alia);





