const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
});


document.querySelector('form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const crop = document.getElementById('crop').value;
  const issue = document.getElementById('issue').value;
  const location = document.getElementById('location').value;

  const prompt = `You are an agricultural expert. A farmer said:\nCrop: ${crop}\nLocation: ${location}\nIssue: ${issue}\nGive a helpful 3-step solution.`;

  const apiKey = "AIzaSyBVCLOb6pUsD2_wXmi3LtvVYk9T9ti7wQk"; // ✅ Replace this with your actual key

  try {
    const res = await fetch(
      "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=" + apiKey,

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    );

    const data = await res.json();
    console.log("🧠 Gemini raw response:", data);

    // ✅ Check if there's an error
    if (data.error) {
      alert("❌ Gemini Error: " + data.error.message);
      return;
    }

    // ✅ Extract advice safely
    const aiReply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      "⚠️ No advice returned.";

    alert("✅ AI Advice:\n" + aiReply);
    localStorage.setItem("farmlinkAdvice", aiReply);
    window.location.href = "dashboard.html";

  } catch (error) {
    alert("❌ Network Error: " + error.message);
    console.error("Fetch error:", error);
  }
});
