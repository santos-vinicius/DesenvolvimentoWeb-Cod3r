function classificaAluno(nota) {
  let notaCorrigida = arredondar(nota)
  if (notaCorrigida >= 40) {
    console.log(`Aprovado com a nota ${notaCorrigida}`)
  } else {
    console.log(`Reprovado com a nota ${notaCorrigida}`)
  }
}

function arredondar(nota) {
  if (nota % 5 > 2) {
    return nota + (5 - (nota % 5))
  } else {
    return nota
  }
}

classificaAluno(100)
classificaAluno(50)
classificaAluno(34)
classificaAluno(61)
classificaAluno(88)
classificaAluno(30)
