class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  validatePassword() {
    this.password.length > 6 ? true : false
  }




}


let a = 'Ivan';
let b = '777781';

const gamer = new User(a, b);
console.log(person);
console.log(person.username);
console.log(person.validatePassword());

class Student extends User {
  constructor(username, password, nickname) {
    super(username, password);
    this.nicname = nickname;
  }

  getStudentCourses() {
    return [1, 2] // for example could be anithing you want
  }

  validatePassword() {
    super.validatePassword();
    this.password.length > 10 ? true : false;
  }
}

// Task1
class Cpu {
  constructor(producer, amount, family, name) {
    this.producer = producer;
    this.amount = amount;
    this.family = family;
    this.name = name;
  }
}

const proc = new Cpu('AMD', 250.00, 'AMD Ryzon', 'Ryzen 7 3700X');

class Memory extends Cpu {
  constructor(producer, amount, memory, family, name) {
    super(producer, amount, family, name);
    this.memory = memory;
  }
}

const memory = new Memeory('Hynix', 60, 2048, 'Hynix DDR4-2666', 'DDR4');


