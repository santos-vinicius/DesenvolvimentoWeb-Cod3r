function reajuste(plano, salarioAtual) {
  switch (plano) {
    case 'A':
      return salarioAtual * 1.1
    case 'B':
      return salarioAtual * 1.15
    case 'C':
      return salarioAtual * 1.2
    default:
      return 'Plano inválido'
  }
}

console.log(reajuste('A', 2000))
console.log(reajuste('B', 2000))
console.log(reajuste('C', 2000))
console.log(reajuste('D', 2000))
