// This version works directly in the browser with Firebase loaded via <script> tags

const firebaseConfig = {
    apiKey: "AIzaSyAn2DugUsH_41SPvwr93xu3ZV3QCkj1PQU",
    authDomain: "farmlink-1183c.firebaseapp.com",
    databaseURL: "https://farmlink-1183c-default-rtdb.firebaseio.com",
    projectId: "farmlink-1183c",
    storageBucket: "farmlink-1183c.appspot.com",
    messagingSenderId: "68680398941",
    appId: "1:68680398941:web:8de047630a33919ff075b4"
  };
  
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  const chatRef = db.ref("messages");
  
  // Send message
document.getElementById("sendBtn").addEventListener("click", () => {
  const input = document.getElementById("chatInput");
  const message = input.value.trim();

  if (message) {
    chatRef.push({ text: message, timestamp: Date.now() });
    console.log("✅ Message sent to Firebase:", message); // ✅ Show what was sent
    input.value = "";
  } else {
    console.log("⚠️ Empty message not sent.");
  }
});

// Show incoming messages
chatRef.on("child_added", (snapshot) => {
  const msg = snapshot.val();
  console.log("📥 Message received from Firebase:", msg); // ✅ Log received message

  const p = document.createElement("p");
  p.innerText = msg.text;
  document.getElementById("chatBox").appendChild(p);
});


  