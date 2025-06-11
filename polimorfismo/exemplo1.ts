class Produto {
  preco: number;
  nome: string;

  constructor(preco: number, nome: string) {
    (this.preco = preco), (this.nome = nome);
  }
  calcularDesconto():number {
    throw new Error("Método é obrigatorio");
  }
}

class Eletronico extends Produto {
  garantiaMeses: number;

  constructor(nome: string, preco: number, garantiaMeses: number) {
    super(preco,nome);
    this.garantiaMeses = garantiaMeses;
  }

  calcularDesconto(): number {
      return this.preco * 0.1
  }
}

class Alimento extends Produto{
    validade:number;
    constructor(nome:string,preco:number,validade:number){
        super(preco,nome)
        this.validade = validade
    }
    calcularDesconto(): number {
        return this.preco * 0.5
    }
}

function applicarDesconto(produto:Produto):void{
    const desconto = produto.calcularDesconto();
    const precoComDesconto = produto.preco - desconto;

    console.log(`Preço com desconto ${produto.nome} - $${precoComDesconto.toFixed(2)}`);
}

const maxixe = new Alimento("Maxixe",50,2);
const netbook = new Eletronico("Netbook",900,12); 


applicarDesconto(maxixe);
applicarDesconto(netbook)
