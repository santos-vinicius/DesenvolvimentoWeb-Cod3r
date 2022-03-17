const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o ultimo elemento da lista
console.log(pilotos)

pilotos.push('Verstappen') // adiciona elemento a última posição da lista
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona elemento na primeira posição da lista
console.log(pilotos)

// splice pode adicionar e remover elementos do array
// -> adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// -> remover
pilotos.splice(3, 1) // remove 1 elemento da posição 3

const algunsPilotos1 = pilotos.slice(2) // retorna novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
