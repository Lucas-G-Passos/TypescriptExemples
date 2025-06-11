interface Veiculo {
  imprimirDetalhes(): void;
}

class Carro implements Veiculo {
  marca: string;
  modelo: string;

  constructor(marca: string, modelo: string) {
    this.marca = marca;
    this.modelo = modelo;
  }
  imprimirDetalhes(): void {
    console.log(`Carro: ${this.marca} - ${this.modelo}`);
  }
}

class Bicicleta implements Veiculo {
  marca: string;
  tipo: string;
  constructor(marca: string, tipo: string) {
    this.marca = marca;
    this.tipo = tipo;
  }
  imprimirDetalhes(): void {
    console.log(`Bike: ${this.marca} - ${this.tipo}`);
  }
}

const carro = new Carro("ford","gio");
const bicicleta = new Bicicleta("Monark","Ye")

carro.imprimirDetalhes()
bicicleta.imprimirDetalhes()

function imprimirDetalhes(veiculo:Veiculo){
    veiculo.imprimirDetalhes()
}

const veiculos:Veiculo[] = [carro,bicicleta]
veiculos.forEach(veiculo=>imprimirDetalhes(veiculo))