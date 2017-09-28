let totalExpenses = document.querySelector('#total-expenses')
let incomeLotte = document.querySelector('#income-lotte')
let incomeFlorestan = document.querySelector('#income-florestan')

let resultLotte = document.querySelector('#result-lotte')
let resultFlorestan = document.querySelector('#result-florestan')

let button = document.querySelector('#calculate-button')

let collectResult = () => {
  let shares = {}

  incomeFlorestan = parseInt(incomeFlorestan.value)
  incomeLotte = parseInt(incomeLotte.value)
  totalExpenses = parseInt(totalExpenses.value)

  let totalIncome = incomeLotte + incomeFlorestan

  let shareFlorestan = incomeFlorestan / totalIncome * totalExpenses
  shares.florestan = shareFlorestan

  let shareLotte = incomeLotte / totalIncome * totalExpenses
  shares.lotte = shareLotte

  return shares
}

let printResult = () => {
  let shares = collectResult()
  resultFlorestan.innerHTML = shares.florestan
  resultLotte.innerHTML = shares.lotte
}

button.onclick = function () { printResult() }
