function venderCarro(carro) {
  switch (carro) {
    case 'Hatch':
      console.log('Compra efetuada com sucesso.')
      break
    case 'Sedan':
    case 'Motocicleta':
    case 'Caminhonete':
      console.log('Tem certeza que não prefere este modelo?')
      break
    default:
      console.log('Não trabalhamos com este tipo de automóvel aqui.')
  }
}

venderCarro('Hatch')
venderCarro('Sedan')
venderCarro('Motocicleta')
venderCarro('Caminhonete')
venderCarro('Skate')
