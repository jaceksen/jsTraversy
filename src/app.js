console.log('app.js');
let imie='Jacek';
let nazwisko='Kowalski';
// console.log(typeof imie);
const aa = true;
// console.log(aa);
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

//Window

//input
// const input = prompt();
// alert(input);

//confirm
// if(confirm('Are you sure')){
//     window.console.log('YES');
// } else {
//     console.log('No');
// }

//window size
// let valY, valX;
// valY = window.outerHeight;
// valX = outerWidth;
// valYin = innerHeight;
// console.log(valY);
// console.log(valX);
// console.log(valYin);


//scrolling
// let valS;
// valS = window.scrollY;

//location object
// val = window.location;
// console.log(val);
// //podaje to co w adresie jest po ?id=1&imie=Jacek
// val1 = window.location.search;
// console.log(val1);
// redirection
// window.location.href='http://google.com';
//reload
// window.location.reload();


//history object
//powrot do miejsca z ktorego przyszlismy
// widow.history.go();
// widow.history.go(-2); //wracam do historii dwa skoki do tyłu
// let val = window.history.length;
// console.log(val);


//navigato object (powiązany z przeglądarką)
// val = window.navigator;
// val = window.navigator.language;
// console.log(val);