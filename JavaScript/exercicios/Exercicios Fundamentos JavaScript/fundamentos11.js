function verificaBissexto(ano) {
  if (ano <= 0) {
    return false
  } else if (ano % 400 == 0) {
    return true
  } else if (ano % 100 == 0) {
    return false
  } else if (ano % 4 == 0) {
    return true
  } else {
    return false
  }
}
console.log(verificaBissexto(0))
console.log(verificaBissexto(5))
console.log(verificaBissexto(100))
console.log(verificaBissexto(400))
console.log(verificaBissexto(800))
console.log(verificaBissexto(2020))
console.log(verificaBissexto(2022))
console.log(verificaBissexto(2024))
