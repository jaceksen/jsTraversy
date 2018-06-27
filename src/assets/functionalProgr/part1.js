
// ----------- REDUCE ---------------
// multi tool
var orders = [
  {amount: 250},
  {amount: 400},
  {amount: 100},
  {amount: 325}
]

//dodanie wratości
// let total = orders.reduce(function(sum, order){
//   console.log('hello', sum, order);
//   return sum + order.amount;
// },0)

// let total = orders.reduce((sum,order) => sum + order.amount,0);
// console.log(total);


// ---------------------

var animals = [
  {name: 'Azor', gatunek: 'pies'},
  {name: 'Burek', gatunek: 'pies'},
  {name: 'Mruczuś', gatunek: 'kot'},
  {name: 'Argos', gatunek: 'pies'},
  {name: 'Kicia', gatunek: 'kot'},
  {name: 'Reks', gatunek: 'pies'},
]

// ----------- FIND ------------------
// to samo co filter ale zwraca pierwszy element

// var argos = animals.find(function(animal) {
//   return animal.name === 'Argos';
// })
var argos = animals.find(x => x.name === 'Argos');
// console.log(argos);

// ------------ FILTER -------------
// filter - nowa tablica wyfiltrowana po jakiejś wartości

pies = function(animal){
  return animal.gatunek === 'pies';
}

pies1 = x => x.gatunek === 'pies';

// var dogs = animals.filter(function(animal){
//   return animal.gatunek === 'pies';
// })

// var dogs = animals.filter(pies);
// console.log(dogs);

var dogs = animals.filter(pies1);
console.log(dogs);


// --------------- MAP --------------------
// map - porbranie nazw zwierząt z tablicy

// var names = animals.map(function(animal) {
//   return animal.name;
// });

// arrow function
var names = animals.map(animal => animal.name);

// console.log(names);
