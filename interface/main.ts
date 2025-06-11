import { Pessoa, Endereco } from "./pessoa";

class Cliente implements Pessoa, Endereco {
  nome: string;
  idade: number;
  cep: number;
  rua: string;
  cidade: string;

  constructor(
    nome: string,
    idade: number,
    cep: number,
    rua: string,
    cidade: string
  ) {
    this.nome = nome;
    this.idade = idade;
    this.cep = cep;
    this.rua = rua;
    this.cidade = cidade;
  }
  exibirDados(): void {
    console.log(`Nome:${this.nome}`);
    console.log(`Idade:${this.idade}`);
    console.log(`Rua:${this.rua}`);
    console.log(`Cidade:${this.cidade}`);
    console.log(`CEP:${this.cep}`);
  }
}

const cliente1 = new Cliente("Leo", 12, 432, "Rua do Viado", "VO");
cliente1.exibirDados();
