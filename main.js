const button = document.querySelector('#calculate-button');
const resultThelma = document.querySelector('#result-thelma');
const resultLouise = document.querySelector('#result-louise');

function calculate() {
  let shares = {};

  const expenses = parseInt(document.querySelector('#expenses').value);
  const incomeThelma = parseInt(document.querySelector('#income-thelma').value);
  const incomeLouise = parseInt(document.querySelector('#income-louise').value);

  const totalIncome = incomeThelma + incomeLouise;

  const shareLouise = (incomeLouise / totalIncome) * expenses;
  const shareThelma = (incomeThelma / totalIncome) * expenses;

  shares.thelma = parseInt(shareThelma);
  shares.louise = parseInt(shareLouise);

  document.querySelector('.results').innerHTML = showResults(
    shares.louise,
    shares.thelma
  );

  return shares;
}

function showResults(shareLouise, shareThelma) {
  return `            
  <h4>Result</h4>

  <div class="result" >
    <label>Thelma</label>
    <span id="result-thelma">${shareThelma} €</span>
  </div>

  <div class="result" >
    <label>Louise</label>
    <span id="result-louise">${shareLouise} €</span>
  </div>`;
}

// window.onload = () => {
//     const clipboardData;
//     document.addEventListener('paste', function (evt) {
//         clipboardData = evt.clipboardData || window.clipboardData;
//         console.log(clipboardData.getData('text/plain'));
//     });

//     const regex = /[0-9]/;
//     console.log(regex.test(clipboardData));

//     document.querySelectorAll('input')
//         .forEach((myInput) => {
//             myInput.onpaste = (event) => {
//                 const regex = /[0-9]/;

//                 if (regex.test(clipboardData)) {
//                     alert('Cannot paste')
//                     event.preventDefault();
//                 }
//             }
//         })

// }

// document.querySelector("#okButton")
//   .addEventListener("click", function (value) {
//     document.querySelector(".calculator").hidden = true;
//   }, false);

/** TODO:
 * add error handling and validation
 * > allow only positive integers
 * > disable paste of non int vals
 * what if total is greater than combined income?
 * new function: saving for shared goal; e.g. how much should each of them put aside for a trip p/m
 * how much money do do you have left to spend?
 */
