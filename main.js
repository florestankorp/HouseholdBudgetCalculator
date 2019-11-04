const button = document.querySelector("#calculate-button");
const resultThelma = document.querySelector("#result-thelma");
const resultLouise = document.querySelector("#result-louise");

function calculate() {
  let shares = {};

  const expenses = parseInt(document.querySelector("#expenses").value);
  const incomeThelma = parseInt(document.querySelector("#income-thelma").value);
  const incomeLouise = parseInt(document.querySelector("#income-louise").value);

  const totalIncome = incomeThelma + incomeLouise;

  const shareLouise = (incomeLouise / totalIncome) * expenses;
  const shareThelma = (incomeThelma / totalIncome) * expenses;

  shares.thelma = parseInt(shareThelma);
  shares.louise = parseInt(shareLouise);

  resultThelma.innerHTML = `${shares.thelma} €`;
  resultLouise.innerHTML = `${shares.louise} €`;

  return shares;
}

// TODO: add error handling and validation