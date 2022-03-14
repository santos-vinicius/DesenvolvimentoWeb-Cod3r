const sequencia = {
  _valor: 1, // o uso da _ é uma convenção da comunidade para respeitar variáveis "privadas"
  get valor() {
    return this._valor++
  },
  set valor(valor) {
    if (valor > this._valor) {
      this._valor = valor
    }
  }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
