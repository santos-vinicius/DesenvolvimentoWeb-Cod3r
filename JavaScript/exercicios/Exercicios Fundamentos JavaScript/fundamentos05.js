function formatarDecimal(valorDecimal) {
  valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace('.', ',')}`
  console.log(valorEmReais)
}
formatarDecimal(0.1 + 0.2)
