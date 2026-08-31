// Cada llamada a crearCaldero() genera un nuevo "scope" privado.
// La variable "ingredientes" vive dentro de ese scope y solo es
// accesible a través de los métodos que se retornan (closure).
export function crearCaldero(nombrePocion) {
  const ingredientes = []; // variable privada: no se expone directamente

  return {
    agregarIngrediente(ingrediente) {
      ingredientes.push(ingrediente);
      console.log(`[${nombrePocion}] Se agregó: ${ingrediente}`);
    },
    verContenido() {
      // Se retorna una copia (spread) para no exponer el arreglo original
      return [...ingredientes];
    }
  };
}
