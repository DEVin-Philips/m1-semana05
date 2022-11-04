
export default class Personagem {
  constructor(nome) {
    this.nome = nome
    this.percentualVida = 100
  }

  sofreuDano(percentualDano) {
    if (this.percentualVida - percentualDano < 0) {
      this.percentualVida = 0
    } else {
      this.percentualVida -= percentualDano
    }
  }

  usouKitMedico() {
    if (this.percentualVida + 10 > 100) {
      this.percentualVida = 100
    } else {
      this.percentualVida += 10
    }
  }
}
