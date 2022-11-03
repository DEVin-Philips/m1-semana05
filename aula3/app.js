import Pessoa from "./Pessoa.js";

class Animal {
  #nome
  constructor(nome) {
    this.#nome = nome;
  }
  getMetodoComum() {
    return `Id: ${this.#nome}`;
  }
  get getMetodoGetter() {
    return `Id: ${this.#nome}`;
  }
  setMetodoComum(valor) {
    this.#nome = valor;
  }
  set setMetodoSetter(valor) {
    this.#nome = valor;
  }
}
const instancia = new Animal("Preguiça");

//console.log(instancia.#nome);
console.log(instancia.getMetodoComum());
console.log(instancia.getMetodoGetter);

instancia.setMetodoComum("Tatu");
console.log(instancia.getMetodoGetter);

instancia.setMetodoSetter = "Jaguatirica";
console.log(instancia.getMetodoGetter);
