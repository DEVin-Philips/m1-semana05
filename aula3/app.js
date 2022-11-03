import Pessoa from "./Pessoa.js";

class Animal {
  #nome
  constructor(nome) {
    this.#nome = nome;
  }
  getMetodoComum() {
    return `Id: ${this.#nome}`;
  }
  setMetodoComum(valor) {
    console.log({ valor });
    this.#nome = valor;
  }
  get nome() {
    console.log("GETTER");
    // adicione aqui sua lógica...
    return `Id: ${this.#nome}`;
  }
  set nome(valor) {
    console.log("SETTER");
    // adicione aqui sua lógica...
    this.#nome = valor;
  }
}
const instancia = new Animal("Preguiça");

//console.log(instancia.#nome);
console.log(instancia.getMetodoComum());
console.log(instancia.nome);

instancia.setMetodoComum("Tatu");
console.log(instancia.nome);

instancia.nome = "Jaguatirica";
console.log(instancia.nome);
