interface Funcionario{
nome:string,
salario:number
}

interface Gerente extends Funcionario{
    setor:string
}

const gerente1:Gerente ={
    nome:"Nome",
    salario:12000,
    setor:"Almoxarifado"
}

console.log(gerente1)