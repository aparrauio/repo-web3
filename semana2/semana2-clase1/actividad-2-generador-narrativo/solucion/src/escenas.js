// Arreglo de escenas de ejemplo. Cada una tiene un tiempo de carga simulado (delay).
export const escenas = [
  { id: 1, titulo: "Bosque azul", emocion: "misterio", delay: 400 },
  { id: 2, titulo: "Puerta que canta", emocion: "curiosidad", delay: 250 },
  { id: 3, titulo: "Río de cristal", emocion: "calma", delay: 500 }
];

// cargarEscena retorna una Promise que se resuelve tras "delay" ms,
// simulando una consulta futura a backend o base de datos.
export function cargarEscena({ id, titulo, emocion, delay }) {
  return new Promise((resolve, reject) => {
    if (!titulo || !emocion) {
      // Si falta un campo obligatorio, rechazamos con un error descriptivo.
      reject(new Error(`Escena ${id} está incompleta`));
      return;
    }
    setTimeout(() => {
      resolve(`Escena ${id}: ${titulo} genera ${emocion}`);
    }, delay);
  });
}
