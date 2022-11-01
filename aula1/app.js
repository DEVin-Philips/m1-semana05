console.log('Olá! m1-s05-a1')

class Retangulo {
  // atributo privado utiliza-se # no início do nome
  #blah = "tralala"
  // atributo de Classe
  static contador = 0;

  // método padrão executado quando new é invocado
  constructor(altura, largura) {
    // this é o objeto resultante da construção de uma nova instância
    this.altura = altura;
    this.largura = largura;
    Retangulo.contador++;
  }

  // método de instância
  calculaArea() {
    //console.log(Retangulo.blah);
    return this.largura * this.altura;
  }

  // método da Classe
  static isRetangulo(item) {
    return item instanceof Retangulo;
  }
}

const retA = new Retangulo(3, 6);
const retB = new Retangulo(2, 7);
const retC = new Retangulo(2, 7);

//console.log(Retangulo); // Class
console.log(retA); // instance
console.log(retB); // instance
// executando métodos de instância
console.log(retA.calculaArea());
console.log(retB.calculaArea());

// console.log(Retangulo.contador);

class Quadrado extends Retangulo {
  constructor(base) {
    super(base, base);
  }

  static isQuadrado(item) {
    return item instanceof Quadrado;
  }

  calculaVolume() {
    return this.altura ** 3;
  }
}

const quadA = new Quadrado(6);

console.log(quadA);
console.log(quadA.calculaArea());
console.log(quadA.calculaVolume());
