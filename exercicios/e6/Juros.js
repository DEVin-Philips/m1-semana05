
export default class Juros {
  constructor(capitalInicial, taxaAplicada, tempo) {
    this.capitalInicial = capitalInicial
    this.taxaAplicada = taxaAplicada
    this.tempo = tempo
  }

  // C: Capital inicial
  // i: Taxa de jutos % (de 0 a 1)
  // t: Período de tempo
  // J: Montante de juros simples
  // M: Montante de capital inicial + juros compostos

  calcularJurosSimples() {
    // J = C * i * t
    return this.capitalInicial * this.taxaAplicada * this.tempo
  }

  calcularJurosCompostos() {
    // M = C * (1 + i) ** t
    return (this.capitalInicial * (1 + this.taxaAplicada) ** this.tempo) - this.capitalInicial
  }
}
