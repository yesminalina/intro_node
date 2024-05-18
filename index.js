const { register, read } = require('./operaciones.js')

const [operacion, nombre, edad, tipo, color, enfermedad ] = process.argv.slice(2)

if (operacion === 'registrar') {
  register(nombre, edad, tipo, color, enfermedad)
}

if (operacion === 'leer') {
  read()
}