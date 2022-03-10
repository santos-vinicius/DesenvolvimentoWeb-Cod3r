function valorMensalidade(mes, valor) {
  if (mes > 0 && mes < 13) {
    atraso = mes - 1
    return (valor * (1 + 5 / 10) ** atraso).toFixed(2)
  } else {
    return 'Mês inválido'
  }
}
console.log(valorMensalidade(5, 100))
