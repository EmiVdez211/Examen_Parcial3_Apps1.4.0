import nomina_schema from "../models/nomina.mod.js"

nomina_schema.create({
    id_empleado: 22030756,
    nombre_empleado: "Emilio Valadez",
    cuenta_bancaria: 5248321583760896,
    cantidad: 25000,
    deducciones: 5000,
    total: 2000,
    total_texto: "Veinte mil pesos"
})

export const test_nomina = (() => {
    console.log("Llamando funcion desde controllers")
}
)