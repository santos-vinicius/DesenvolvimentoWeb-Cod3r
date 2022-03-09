function venda(codigo, quantidade) {
  switch (codigo) {
    case 100:
      return `Cachorro Quente: ${quantidade * 3}`
    case 200:
      return `Hamburger Simples: ${quantidade * 4}`
    case 300:
      return `Cheeseburger: ${quantidade * 5.5}`
    case 400:
      return `Bauru: ${quantidade * 7.5}`
    case 500:
      return `Refrigerante: ${quantidade * 3.5}`
    case 600:
      return `Suco: ${quantidade * 2.8}`
    default:
      return 'Produto não existente!'
  }
}

console.log(venda(100, 2))
console.log(venda(200, 2))
console.log(venda(300, 2))
console.log(venda(400, 2))
console.log(venda(500, 2))
console.log(venda(600, 2))
console.log(venda(700, 2))
