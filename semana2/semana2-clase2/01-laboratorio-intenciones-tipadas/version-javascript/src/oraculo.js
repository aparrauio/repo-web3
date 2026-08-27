/**
 * oraculo.js
 * ----------
 * Lógica del oráculo. Usa varios conceptos de JavaScript avanzado:
 *   - Closures (contador privado de consultas)
 *   - Funciones de orden superior (filter, reduce)
 *   - Destructuring + spread/rest (combinarCriaturas)
 *   - Promesas / async-await + manejo de errores (cargarCriatura, cargarCriaturas)
 */

// --- Concepto #2: Closures -------------------------------------------------
// `crearContadorConsultas` devuelve funciones que comparten una variable
// privada (`total`) que nadie fuera de esta función puede tocar directamente.
export function crearContadorConsultas() {
  let total = 0; // variable "encerrada" por el closure

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

// --- Concepto #3: Funciones de orden superior ------------------------------
// filter y reduce reciben otras funciones como argumento.
export function filtrarPorMood(lista, mood) {
  return lista.filter((criatura) => criatura.mood === mood);
}

export function calcularEnergiaPromedio(lista) {
  if (lista.length === 0) return 0;
  const suma = lista.reduce((acumulado, criatura) => acumulado + criatura.energia, 0);
  return Math.round(suma / lista.length);
}

// --- Concepto #4: Destructuring + spread/rest -------------------------------
// Extraemos `energia` de cada criatura con destructuring y usamos spread (...)
// para construir la nueva criatura híbrida sin mutar las originales.
export function combinarCriaturas(criaturaA, criaturaB) {
  const { energia: energiaA, ...restoA } = criaturaA;
  const { energia: energiaB } = criaturaB;

  return {
    ...restoA,
    ...criaturaB,
    id: `${criaturaA.id}-${criaturaB.id}`,
    nombre: `${criaturaA.nombre} + ${criaturaB.nombre}`,
    energia: Math.round((energiaA + energiaB) / 2),
    mood: criaturaA.mood, // conservamos el mood de la primera criatura
  };
}

// --- Concepto #5: Promesas, async/await y manejo de errores ----------------
// Simula una consulta lenta al oráculo (como si viniera de una red o disco).
function simularCargaCriatura(criatura) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!criatura || !criatura.mood) {
        reject(new Error(`Criatura inválida: falta el campo "mood" (id: ${criatura?.id})`));
        return;
      }
      resolve(criatura);
    }, 200);
  });
}

// Carga varias criaturas en paralelo con Promise.all, sin bloquear el hilo principal.
export async function cargarCriaturas(lista) {
  try {
    const criaturasCargadas = await Promise.all(
      lista.map((criatura) => simularCargaCriatura(criatura))
    );
    return criaturasCargadas;
  } catch (error) {
    console.error("No se pudieron cargar las criaturas:", error.message);
    return [];
  }
}
