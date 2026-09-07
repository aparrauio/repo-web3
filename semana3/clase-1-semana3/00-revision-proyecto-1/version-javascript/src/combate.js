/**
 * combate.js
 * ----------
 * Lógica de combate. Usa 5 conceptos de JavaScript avanzado (mínimo del
 * Proyecto 1: 3):
 *   - Closures (contador privado de combates simulados)
 *   - Funciones de orden superior (filter, reduce)
 *   - Destructuring + spread/rest (fusionarPersonajes)
 *   - Módulos ES (este archivo + personajes.js)
 *   - Promesas / async-await + manejo de errores (invocarPersonaje)
 */

// --- Closures ---------------------------------------------------------------
export function crearContadorCombates() {
  let total = 0;

  return {
    registrar() {
      total += 1;
      return total;
    },
    obtenerTotal() {
      return total;
    },
  };
}

// --- Funciones de orden superior --------------------------------------------
export function filtrarPorElemento(lista, elemento) {
  return lista.filter((personaje) => personaje.elemento === elemento);
}

export function filtrarPorNivel(lista, nivel) {
  return lista.filter((personaje) => personaje.nivelPoder === nivel);
}

export function calcularPoderPromedio(lista) {
  if (lista.length === 0) return 0;
  const suma = lista.reduce((acumulado, personaje) => acumulado + personaje.nivelPoder, 0);
  return Math.round(suma / lista.length);
}

// --- Destructuring + spread/rest ---------------------------------------------
export function fusionarPersonajes(personajeA, personajeB) {
  const { nivelPoder: poderA, ...restoA } = personajeA;
  const { nivelPoder: poderB } = personajeB;

  return {
    ...restoA,
    ...personajeB,
    id: `${personajeA.id}-${personajeB.id}`,
    nombre: `${personajeA.nombre} / ${personajeB.nombre}`,
    elemento: personajeA.elemento,
    nivelPoder: Math.round((poderA + poderB) / 2),
  };
}

// --- Promesas, async/await y manejo de errores --------------------------------
function simularInvocacion(personaje) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!personaje || !personaje.elemento) {
        reject(new Error(`Personaje inválido: falta "elemento" (id: ${personaje?.id})`));
        return;
      }
      resolve(personaje);
    }, 500);
  });
}

export async function invocarPersonajes(lista) {
  try {
    const invocados = await Promise.all(lista.map((personaje) => simularInvocacion(personaje)));
    return invocados;
  } catch (error) {
    console.error("No se pudieron invocar los personajes:", error.message);
    return [];
  }
}
