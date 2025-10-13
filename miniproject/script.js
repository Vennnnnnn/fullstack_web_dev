const billInput = document.getElementById("billInput");
const tipInput = document.getElementById("tipInput");
const result = document.getElementById("result");
const button = document.getElementById("calculateBtn");

function calculateTip() {
  const bill = parseFloat(billInput.value);
  const tipPercent = parseFloat(tipInput.value);

  if (!bill || !tipPercent) {
    result.textContent = "";
    button.disabled = true;
    return;
  }

  button.disabled = false;

  const tip = bill * (tipPercent / 100);
  const total = bill + tip;
  result.textContent = `Tip: RM${tip.toFixed(2)} | Total: RM${total.toFixed(2)}`;
}

// billInput.addEventListener("input", calculateTip);
// tipInput.addEventListener("input", calculateTip);
// button.addEventListener("click", calculateTip);

billInput.onkeyup = calculateTip;
tipInput.onkeyup = calculateTip;
button.onclick = calculateTip;