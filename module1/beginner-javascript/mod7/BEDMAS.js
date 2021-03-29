const age = 10 * 5 - 2; // 48
const age2 = 10 * (5 - 2); // 30

function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // this is the function body
  console.log("Running Calculate Bill!!");
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

const total = 128 + (25.6 - 19.2);
