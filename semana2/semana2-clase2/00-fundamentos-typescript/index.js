function registrarCarta(carta) {
  return `${carta.nombre} (${carta.elemento}) — poder ${carta.poder}`;
}

function esPoderosa(carta) {
  return carta.poder >= 80;
}

const cartaEjemplo = {
  id: 1,
  nombre: "Fénix Ígneo",
  elemento: "fuego",
  poder: 92,
  esRara: true,
};

console.log(registrarCarta(cartaEjemplo));
console.log(esPoderosa(cartaEjemplo));