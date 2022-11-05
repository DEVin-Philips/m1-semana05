import Juros from './Juros.js'

console.log('m1-s05-e6')

const aplicacao1 = new Juros(10000, 0.07, 24)
const aplicacao2 = new Juros(10000, 0.15, 10)

console.log(aplicacao1.calcularJurosSimples()) // 16.800,00
console.log(aplicacao1.calcularJurosCompostos()) // 40.723,67

console.log(aplicacao2.calcularJurosSimples()) // 15.000,00
console.log(aplicacao2.calcularJurosCompostos()) // 30.455,58
