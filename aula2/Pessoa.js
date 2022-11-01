
export const nomeGenerico = "Fulane";

export function paraMaiusculo(texto) {
  console.log(texto.toUpperCase())
};

export class Pessoa {
  static #ultimaId = 0
  #id

  constructor(nome, email) {
    this.#id = Pessoa.#ultimaId++;
    this.nome = nome;
    this.email = email;
  }

  caminha() {
    console.log("caminhou", this.#id);
  }

  static isPessoa(item) {
    return item instanceof Pessoa;
  }
}
