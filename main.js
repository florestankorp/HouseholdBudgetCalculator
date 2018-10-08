const button = document.querySelector('#calculate-button');
const resultLotte = document.querySelector('#result-lotte');
const resultFlorestan = document.querySelector('#result-florestan');

let collectResult = () => {
  let shares = {};

  const totalExpenses = parseInt(document.querySelector('#total-expenses').value);
  const incomeLotte = parseInt(document.querySelector('#income-lotte').value);
  const incomeFlorestan = parseInt(document.querySelector('#income-florestan').value);
  const totalIncome = incomeLotte + incomeFlorestan;

  let shareFlorestan = incomeFlorestan / totalIncome * totalExpenses;
  let shareLotte = incomeLotte / totalIncome * totalExpenses;

  shares.florestan = shareFlorestan.toFixed(2);
  shares.lotte = shareLotte.toFixed(2);

  return shares
}

let printResult = () => {
  let shares = collectResult()
  resultFlorestan.innerHTML = shares.florestan
  resultLotte.innerHTML = shares.lotte
}

button.addEventListener('click', printResult);