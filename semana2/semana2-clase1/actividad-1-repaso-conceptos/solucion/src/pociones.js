// Retorna una Promise que se resuelve tras "tiempoDeCoccion" ms,
// simulando un proceso lento (como una consulta a base de datos).
// setTimeout dentro de una Promise es el patron clasico para
// simular operaciones asincronas sin bloquear el hilo principal.
export function prepararPocion(nombre, tiempoDeCoccion) {
  return new Promise((resolve, reject) => {
    if (tiempoDeCoccion < 0) {
      // Rechazo inmediato si el tiempo no tiene sentido
      reject(new Error(`Tiempo de cocción inválido para ${nombre}`));
      return;
    }
    setTimeout(() => {
      resolve(`✨ ${nombre} está lista tras ${tiempoDeCoccion}ms`);
    }, tiempoDeCoccion);
  });
}

// Prepara varias pociones EN PARALELO usando Promise.all.
// async/await hace que el codigo se lea de forma secuencial,
// pero por dentro sigue siendo no bloqueante gracias al Event Loop.
export async function prepararVariasPociones(listaPociones) {
  try {
    const resultados = await Promise.all(
      listaPociones.map(({ nombre, tiempo }) => prepararPocion(nombre, tiempo))
    );
    return resultados;
  } catch (error) {
    // Si CUALQUIER pocion falla, Promise.all rechaza y caemos aqui.
    console.error("⚠️  Error en la fábrica:", error.message);
    return [];
  }
}
