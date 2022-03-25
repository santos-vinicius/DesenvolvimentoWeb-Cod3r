// MAP serve para transformar um array em outro.
// MAP não causa modificações no array original, ele gera sempre um novo array
// MAP é um FOR com propósito

const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function (e) {
  return e * 2
})

console.log(resultado)
console.log('--------')

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
