class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello ${this.firstName} ${this.lastName}`
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, memebership) {
    super(firstName, lastName)
    this.phone = phone;
    this.memebership = memebership;
  }
}

const john = new Customer('John','Doe','3333','statndard');

console.log(john);
console.log(john.greeting());
