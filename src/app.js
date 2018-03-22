console.log('Zapis nr 1a');
let imie='Jacek';
let nazwisko='Kowalski';
console.log(typeof imie);
const aa = true;
console.log(aa);
// console.log([1,2,3,4]);


//ES5
html='<ul><li>Name: ' + imie + '<li>Nazwisko: ' + nazwisko + '</ul>'; 
// document.body.innerHTML = html;

//ES6
//template strings
html  = `
<ul>
<li>Name: ${imie}
<li>Nazwisko: ${nazwisko}
</ul>
`;
//document.body.innerHTML = html;