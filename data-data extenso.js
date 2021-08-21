function convertDate(data) {
  let meses = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubo',
    'novembro',
    'dezembro'
  ]

  let dataList = data.split('/')
  console.log(
    `${dataList[0]} de ${meses[parseInt(dataList[1]) - 1]} de ${dataList[2]}`
  )
}

convertDate('11/05/1955')
