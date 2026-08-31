// filter -> map -> reduce: el trio clasico de las funciones de orden superior.
export function analizarIngredientes(ingredientes, umbralPotencia) {
  const potentes = ingredientes.filter((ing) => ing.potencia > umbralPotencia);

  const nombresEnMayuscula = potentes.map((ing) => ing.nombre.toUpperCase());

  const potenciaTotal = potentes.reduce((total, ing) => total + ing.potencia, 0);

  return { nombresEnMayuscula, potenciaTotal };
}
