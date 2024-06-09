document.addEventListener("DOMContentLoaded", function () {
  const monthlyPrices = {
    "p-mobile": "$1.78",
    "p-premium": "$5.58",
    "p-super": "$2.67",
  };

  const quarterlyPrices = {
    "p-mobile": "$2.6",
    "p-premium": "$8.97",
    "p-super": "$5.58",
  };

  const yearlyPrices = {
    "p-mobile": "$5.97",
    "p-premium": "$17.95",
    "p-super": "$10.76",
  };

  function updatePrices() {
    const selectedFrequency = document.querySelector(
      'input[name="toggle"]:checked'
    ).id;
    const prices =
      selectedFrequency === "monthly"
        ? monthlyPrices
        : selectedFrequency === "quarterly"
        ? quarterlyPrices
        : yearlyPrices;

    Object.keys(prices).forEach(function (plan) {
      document.getElementById(plan).innerText = prices[plan];
    });
  }

  document.querySelectorAll('input[name="toggle"]').forEach(function (item) {
    item.addEventListener("change", updatePrices);
  });

  updatePrices(); // Update prices initially
});
