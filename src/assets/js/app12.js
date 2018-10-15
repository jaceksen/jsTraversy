const rosliny = [
  {
    nazwa: 'gruszka',
    kolor: 'zielony'
  },
  {
    nazwa: 'jablko',
    kolor: 'czerwony'
  },
  {
    nazwa: 'pomidor',
    kolor: 'czerwony'
  },
  {
    nazwa: 'ogorek',
    kolor: 'zielony'
  },
  {
    nazwa: 'jagoda',
    kolor: 'granatowy'
  }
];

console.log(rosliny);

function getZielone() {
  return rosliny.filter((roslina) => {
    return roslina.kolor === 'zielony';
  });
}

let zieloneR = getZielone();

console.log(zieloneR);
