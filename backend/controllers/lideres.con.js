import lider_schema from "../models/lideres.mod.js"

lider_schema.create({
    id_empleado: 22030486,
    nombre: "Jessica Guadalupe Romo Montoya",
    edad: 23,
    jefe_zona: "Area de Sistemas",
    correo: "jromo@nissan.com",
    telefono: 44956813579,
    ext: 9999
})

export const test_lider = (() => {
    console.log("Llamando funcion desde controllers")
}
)