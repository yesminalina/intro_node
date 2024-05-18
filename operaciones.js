const fs = require('fs')

const register = (nombre, edad, tipo, color, enfermedad ) => {

  const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'))
  
  if (!nombre || !edad || !tipo || !color || !enfermedad) {
    console.log('Ingresar todos los datos de la mascota.')
    return
  }

  citas.push({ nombre, edad, tipo, color, enfermedad })
  fs.writeFileSync('citas.json', JSON.stringify(citas))
  console.log('se agregó un nuevo paciente!')
}

const read = () => {
  const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'))
  console.log(citas)
}

module.exports = { register, read }