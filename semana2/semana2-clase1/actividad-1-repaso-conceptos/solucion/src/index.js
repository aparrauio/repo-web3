//importar archivos
import { crearCaldero } from "./closures.js";
import { analizarIngredientes } from "./hof.js";
import { catalogoIngredientes } from "./ingredientes.js";
import { describirReceta, combinarRecetas } from "./destructuring.js";
import { prepararVariasPociones } from "./pociones.js";

const caldero1 = crearCaldero("Poción de invisibilidad");
caldero1.agregarIngrediente("Polvo de estrella");
caldero1.agregarIngrediente("Miel de abejas");
caldero1.agregarIngrediente("Pétalos de margarita");
console.log("Contenido del caldero:", caldero1.verContenido());

const { nombresEnMayuscula, potenciaTotal } = analizarIngredientes(catalogoIngredientes, 20);
console.log("Ingredientes potentes", nombresEnMayuscula);
console.log("Potencia total", potenciaTotal);

const receta1 = { 
  nombre: "Poción de valentía",
  ingredientePrincipal: "escamas de dragón",
  extras: ["sal", "agua de mar", "vainilla", "miel", "canela"]
};
const receta2 = { 
  nombre: "Poción de sabiduría",
  ingredientePrincipal: "polvo de estrellas",
  extras: ["azúcar", "miel", "chocolate"]
};
const receta3 = { 
  nombre: "Poción de alegría",
  ingredientePrincipal: "hojas de maple",
  extras: ["canela", "harina", "miel"]
};

console.log(describirReceta(receta1));
console.log(describirReceta(receta2));
console.log("Extras combinados", combinarRecetas(receta1, receta2, receta3));

async function principal() {
  console.log("Preparando pociones..."); //se imprime antes de terminar de cocinar las pociones

  const misPociones = await prepararVariasPociones([
    { nombre: "Pocion de hielo", tiempo: 500 },
    { nombre: "Pocion de fuego", tiempo: 800 },
    { nombre: "Pocion de agua", tiempo: 5000 }
  ]);

  console.log("Resultado de las pociones", misPociones);
  console.log("El programa se sigue ejecutando hasta que las pociones se preparan.");
}
principal();
console.log("Este mensaje aparece mientras se preparan las pociones");