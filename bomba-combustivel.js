class BombaCombustível {
  capacidade = 1000
  quantCombustivel = this.capacidade
  precoLitro = 5.45

  encherBomba = () => {
    let qtdAbastecida = this.capacidade - this.quantCombustivel
    this.quantCombustivel += qtdAbastecida
    return qtdAbastecida
  }

  abastecer = litros => {
    if (this.quantCombustivel >= litros) {
      this.quantCombustivel -= litros
      console.log(`Você abasteceu: ${litros}`)
      console.log(`Sobrou: ${this.quantCombustivel} de combustível na bomba`)
      return litros * this.precoLitro
    }
    return 'Combustível insuficiente'
  }

  alteraPreco = novoPreco => {
    if (novoPreco > 0) {
      this.precoLitro = novoPreco
      return novoPreco
    }
    return 'preço incorreto'
  }
}

let bomba = new BombaCombustível()

console.log(`Valor pago: R$ ${bomba.abastecer(20)}`)
console.log('=====================================')
console.log(`Valor pago: R$ ${bomba.abastecer(80)}`)
console.log('=====================================')
console.log(`Valor pago: R$ ${bomba.abastecer(-20)}`) // Não deve ser possível abastecer
console.log('=====================================')
