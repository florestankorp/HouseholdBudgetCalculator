const button = document.querySelector('#calculate-button');
const resultThelma = document.querySelector('#result-thelma');
const resultLouise = document.querySelector('#result-louise');

function collectResult() {
  let shares = {};

  const totalExpenses = parseInt(document.querySelector('#total-expenses').value);
  const incomeThelma = parseInt(document.querySelector('#income-thelma').value);
  const incomeLouise = parseInt(document.querySelector('#income-louise').value);
  const totalIncome = incomeThelma + incomeLouise;

  const shareLouise = incomeLouise / totalIncome * totalExpenses;
  const shareThelma = incomeThelma / totalIncome * totalExpenses;

  shares.thelma = shareThelma.toFixed(2);
  shares.louise = shareLouise.toFixed(2);

  return shares;
}

function printResult() {
  let shares = collectResult();
  resultThelma.innerHTML = `${shares.thelma} €`;
  resultLouise.innerHTML = `${shares.louise} €`;
}

button.addEventListener('click', printResult);