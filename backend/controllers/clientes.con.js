import cliente_schema from "../models/clientes.mod.js"

cliente_schema.create({
    id_cliente: 12075666,
    nombre: "Armando Alfaro",
    edad: 19,
    telefono: 5248615520,
    correo: "aalfaro120@gmail.com",
    direccion: "Reforma ###, Av. Insurgentes, Gdl, Jalisco"
})

export const test_clientes = (() => {
    console.log("Llamando funcion desde controllers")
}
)