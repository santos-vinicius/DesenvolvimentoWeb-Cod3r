const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
  const funcionarios = response.data
  // console.log(funcionarios)

  // Desafio: encontrar no JSON de funcionários a MULHER, CHINESA com o MENOR SALÁRIO
  const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)

  console.log(func)
})
