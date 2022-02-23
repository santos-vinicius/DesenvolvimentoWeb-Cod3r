{
  {
    {
      {
        var sera = 'Será???'
      }
    }
  }
}
console.log(sera)

/* Quando você define uma variável dentro de uma função,
 * o escopo desta variável é apenas dentro desta função apenas.
 * Não estará visível fora da função
 */

function teste() {
  var local = 123
  consolel.log(local)
}

teste()
// console.log(local)
