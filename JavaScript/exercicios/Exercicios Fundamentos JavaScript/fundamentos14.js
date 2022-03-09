function venderFruta(fruta) {
  switch (fruta) {
    case 'Maçã':
      console.log('Não vendemos esta fruta aqui.')
      break
    case 'Kiwi':
      console.log('Estamos com escassez de kiwis.')
      break
    case 'Melancia':
      console.log('Aqui está, são 3 reais o quilo')
      break
    default:
      console.log('Erro! Fruta inválida, tente novamente.')
  }
}

venderFruta('Maçã')
venderFruta('Kiwi')
venderFruta('Melancia')
venderFruta('Uva')
