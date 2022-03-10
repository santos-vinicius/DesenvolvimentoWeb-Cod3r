function valorConvenio(idade) {
  if (idade < 10) {
    return 180
  } else if (idade < 30) {
    return 150
  } else if (idade < 60) {
    return 195
  } else {
    return 230
  }
}

console.log(valorConvenio(9))
console.log(valorConvenio(20))
console.log(valorConvenio(33))
console.log(valorConvenio(55))
console.log(valorConvenio(60))
console.log(valorConvenio(90))
