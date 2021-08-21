function salario(valorSalario) {
  switch (true) {
    case valorSalario >= 0 && valorSalario < 280:
      valorSalario += 20 / 100
      console.log(
        `Seu salario era ${valorSalario}, você teve 20% de aumento. Agora seu salário é de ${
          valorSalario + 20 / 100
        }`
      )
      break
    case valorSalario >= 280 && valorSalario <= 700:
      valorSalario += 15 / 100
      console.log(
        `Seu salario era ${valorSalario}, você teve 15% de aumento. Agora seu salário é de ${
          valorSalario + 15 / 100
        }`
      )
      break
    case (valorSalario = 700 && valorSalario <= 1500):
      valorSalario += 10 / 100
      console.log(
        `Seu salario era ${valorSalario}, você teve 10% de aumento. Agora seu salário é de ${
          valorSalario + 10 / 100
        }`
      )
      break
    default:
      valorSalario += 5 / 100
      console.log(
        `Seu salario era ${valorSalario}, você teve 5% de aumento. Agora seu salário é de ${
          valorSalario + 5 / 100
        }`
      )
      break
  }
}
salario(200)
salario(400)
salario(800)
salario(1600)
