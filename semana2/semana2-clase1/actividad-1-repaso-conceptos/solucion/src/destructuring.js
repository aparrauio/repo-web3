// Destructuring: extraemos propiedades de un objeto receta en una sola linea.
export function describirReceta(receta) {
  const { nombre, ingredientePrincipal, extras } = receta;
  return `${nombre} usa ${ingredientePrincipal} y ${extras.length} extras.`;
}

// Rest (...recetas): acepta cualquier cantidad de recetas como argumentos.
// Spread ([...]): combina los arreglos "extras" sin mutar los originales.
export function combinarRecetas(...recetas) {
  return recetas.reduce((acumulado, receta) => {
    return [...acumulado, ...receta.extras];
  }, []);
}
