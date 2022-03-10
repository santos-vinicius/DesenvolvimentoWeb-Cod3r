function notaFinal(aluno, nota1, nota2, nota3) {
  let notas = []
  notas.push(nota1)
  notas.push(nota2)
  notas.push(nota3)
  notas.sort((a, b) => (a < b ? 1 : -1))
  let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10

  console.log(
    `Código do Aluno: ${aluno}. Notas: ${nota1}, ${nota2}, ${nota3}. Situação: ${
      mediaFinal < 5 ? 'Reprovado!' : 'Aprovado!'
    }`
  )
}

notaFinal(123, 2, 6, 7.5)

notaFinal(321, 2, 2, 1.2)
