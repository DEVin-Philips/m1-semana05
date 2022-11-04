import Funcionario from './Funcionario.js'

console.log('m1-s05-e1')

const ada = new Funcionario("528.442.040-31", "Ada Lovelace", 1000)

console.log(ada.salario) // 1000

ada.promover(50)

console.log(ada.salario) // 1500
