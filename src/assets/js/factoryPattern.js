function MemeberFactory() {
  this.createMemeber = function(name, type) {
    let member;

    if (type === 'simple') {
      member = new SimpleMembership(name);
    } else if (type === 'standard') {
      member = new StandardMembership(name);
    } else if (type === 'super') {
      member = new SuperMembership(name);
    }

    member.type = type;

    member.define = function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    };

    return member;
  };
}

const SimpleMembership = function(name) {
  this.name = name;
  this.cost = '$10';
}

const StandardMembership = function(name) {
  this.name = name;
  this.cost = '$20';
}

const SuperMembership = function(name) {
  this.name = name;
  this.cost = '$30';
}

const members = [];
const factory = new MemeberFactory();

members.push(factory.createMemeber('John Doe', 'simple'));
members.push(factory.createMemeber('John Doe2', 'super'));
members.push(factory.createMemeber('John Doe3', 'standard'));
members.push(factory.createMemeber('John Doe4', 'simple'));

// console.log(members);

members.forEach(member => {
  member.define();
})
