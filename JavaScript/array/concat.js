const filhas = ['Fernanda', 'Júlia']
const filhos = ['Matheus', 'Thiago']
const todos = filhas.concat(filhos, 'Fulano')
console.log(todos, '//', filhas, '//', filhos)

console.log('---------------')

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))

// Os arrays originais não são mantidos e é gerado somente um novo array no concat
