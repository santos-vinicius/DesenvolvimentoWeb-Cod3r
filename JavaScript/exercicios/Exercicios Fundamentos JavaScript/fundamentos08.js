let stringPontuacoes = '30, 40, 20, 4, 51, 25, 42, 38, 56, 0'

function avaliaPontuacoes(stringPontuacoes) {
  let pontuacoes = stringPontuacoes.split(',')
  let qtdQuebraDeRecordes = 0
  let piorJogo = 1
  let maiorPontuacao = pontuacoes[0]
  let menorPontuacao = pontuacoes[0]

  for (let i = 1; i < pontuacoes.lenght; i++) {
    if (pontuacoes[i] > maiorPontuacao) {
      maiorPontuacao = pontuacoes[i]
      qtdQuebraDeRecordes++
    } else if (pontuacoes[i] < menorPontuacao) {
      menorPontuacao = pontuacoes[i]
      piorJogo = i + 1
    }
  }
  return [qtdQuebraDeRecordes, piorJogo]
}
console.log(avaliaPontuacoes(stringPontuacoes))
