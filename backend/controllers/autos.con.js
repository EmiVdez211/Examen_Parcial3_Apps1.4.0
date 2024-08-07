import autos_schema from "../models/autos.mod.js"

autos_schema.create({
    ns: "1531846218684",
    nombre: "Nissan Pathfinder",
    año: 2015,
    precio: "265,400$",
    tienda: "Nissan Torres Corzo Aguascalientes"
})

export const test_autos = (() => {
    console.log("Llamando funcion desde controllers")
}
)