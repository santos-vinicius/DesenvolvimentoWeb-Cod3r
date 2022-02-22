/*
 * Hoisting é um comportamento padrão do JavaScript de mover declarações ao topo.
 * Seja o topo o contexto do código em que está trabalhando ou o topo da função.
 */

console.log('a =', a)
var a = 2
console.log('a =', a)

console.log('b =', b)
let b = 2
console.log('b =', b)
