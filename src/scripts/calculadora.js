function calculateSavings(e) {
  e.preventDefault();
  const location = document.getElementById("location").value;
  const systemSize = parseFloat(document.getElementById("system-size").value);
  const initialCost = parseFloat(document.getElementById("initial-cost").value);
  const electricityRate = parseFloat(
    document.getElementById("electricity-rate").value
  );

  // Suponhamos que a economia seja de 30% na conta de eletricidade após a instalação
  const monthlySavings = (systemSize * electricityRate * 30) / 100;
  const annualSavings = monthlySavings * 12;

  const paybackPeriod = initialCost / annualSavings;

  const results = `Com um sistema de ${currencyFormatter(
    systemSize
  )} kW em ${location}, você pode economizar aproximadamente ${currencyFormatter(
    annualSavings
  )} por ano. Seu retorno sobre o investimento (payback) será de aproximadamente ${paybackPeriod.toFixed(
    2
  )} anos.`;

  document.getElementById("savings").textContent = results;
}
