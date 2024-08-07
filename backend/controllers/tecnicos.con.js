import tecnicos_schema from "../models/tecnicos.mod.js"

tecnicos_schema.create({
    id_empleado: 22030753,
    nombre: "Ingrid Salazar",
    edad: 19,
    area_especializada: "Soporte tecnico",
    correo: "isalazar@nissan.com",
    telefono: 80047530305
})

export const test_tecnicos = (() => {
    console.log("Llamando funcion desde controllers")
}
)
