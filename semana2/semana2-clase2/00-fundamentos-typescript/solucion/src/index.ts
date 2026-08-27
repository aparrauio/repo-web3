/**
 * Actividad 0 · Fundamentos de TypeScript — SOLUCIÓN
 * ----------------------------------------------------
 * Migración de un mini-registro de "cartas de energía" de JS a TS.
 * Cada bloque comentado explica la decisión de tipado tomada.
 */

// 1) Unión literal: el campo `elemento` solo puede tomar estos 4 valores.
//    Cualquier otro string ("metal", "hielo", etc.) será un error de compilación.
type Elemento = "fuego" | "agua" | "aire" | "tierra";

// 2) Interface: describe la FORMA completa de una carta coleccionable.
//    Usamos `interface` (en vez de `type`) porque describe un objeto de dominio
//    que podríamos extender más adelante (por ejemplo, con `interface CartaEspecial extends CartaEnergia`).
interface CartaEnergia {
    id: number,
    nombre: string,
    elemento: Elemento,
    poder: number,
    esRara: boolean
}


// 3) Función tipada con retorno EXPLÍCITO.
//    El parámetro usa la interface como tipo: TypeScript revisa que el objeto
//    que le pasemos tenga exactamente esos campos con esos tipos.
function registrarCarta(carta: CartaEnergia): string {
    return `${carta.nombre} (${carta.elemento}) — poder ${carta.poder}`;
}

// 4) Función con retorno INFERIDO (no anotamos ": boolean").
//    TypeScript deduce el tipo de retorno a partir de la expresión `carta.poder >= 80`.
//    Pasa el cursor sobre `esPoderosa` en tu editor: verás `(carta: CartaEnergia) => boolean`.
function esPoderosa(carta: CartaEnergia) {
    return carta.poder >= 80;
}

// 5) Objeto de ejemplo. Si falta un campo o el tipo no coincide,
//    TypeScript marca el error AQUÍ, antes de ejecutar nada.
const miCarta: CartaEnergia = {
    id: 1,
    nombre: "Fenix Igneo",
    elemento: "fuego",
    poder: 92,
    esRara: true
};

//lamado a las funciones
console.log(registrarCarta(miCarta));
console.log(esPoderosa(miCarta));

// --- Prueba deliberada de error (comentada) ---
// Descomenta estas líneas para ver el error TS2322 en el editor/consola:
//
const cartaInvalida: CartaEnergia = {
   id: 2,
   nombre: "Golem de Piedra",
   elemento: "agua",
   poder: 60,
   esRara: false,
};

//lamado a las funciones
console.log(registrarCarta(cartaInvalida));
console.log(esPoderosa(cartaInvalida));