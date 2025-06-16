// dashboard.js
window.onload = () => {
  // ✅ Load AI advice from localStorage
  const aiAdvice = localStorage.getItem("farmlinkAdvice");
  const aiOutput = document.getElementById("aiResponse");

  if (aiOutput) {
    aiOutput.innerText = aiAdvice?.trim() || "No advice available yet. Please submit a report.";
  }

  // ✅ Load live market prices (static demo)
  const prices = [
    { crop: "Maize", price: "₦250 / kg" },
    { crop: "Tomatoes", price: "₦1,200 / basket" },
    { crop: "Cassava", price: "₦400 / tuber" },
    { crop: "Pepper", price: "₦700 / bag" },
    { crop: "Yam", price: "₦500 / tuber" }
  ];

  const priceContainer = document.getElementById("price-list");
  priceContainer.innerHTML = ""; // Clear previous content

  prices.forEach(item => {
    const card = document.createElement("div");
    card.className = "bg-green-800 px-4 py-2 rounded-md flex justify-between items-center";
    card.innerHTML = `
      <span class="font-semibold">${item.crop}</span>
      <span class="text-green-200">${item.price}</span>
    `;
    priceContainer.appendChild(card);
  });
};
