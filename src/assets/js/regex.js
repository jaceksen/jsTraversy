const napis = 'jc-es-_en@nada.ltd';
re = /([a-z0-9_\-]+)\.([a-z0-9_\-]+)@nada.ltd/;

wynik = re.test(napis);

console.log(wynik);
