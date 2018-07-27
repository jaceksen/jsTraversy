console.log('aa');

const users = [
  {id:1, imie: 'jacek'},
  {id:2, imie: 'rima'},
  {id:3, imie: 'maja'},
  {id:4, imie: 'tigo'},
  {id:5, imie: 'staś'}
];

const imiona = users.map(user => {
  return user.imie;
});

console.log(imiona);

const user = {
  imie: 'Jacek',
  nazwisko: 'Seń',
  urodzony: 'Ciechanów'
};

//for in loop
for(let x in user) {
  console.log(x);
}

for(let x in user) {
  console.log(`${user[x]}`);
}

console.log(window.navigator.platform);
console.log(window.navigator.language);
