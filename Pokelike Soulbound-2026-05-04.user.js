// ==UserScript==
// @name         Pokelike Soulbound
// @namespace    http://tampermonkey.net/
// @version      2026-05-04
// @description  try to take over the world!
// @author       Taberl3D
// @match        https://pokelike.xyz/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    console.log("🟢 Soulbound Script gestartet");

     // 🔥 Spielername speichern
    let playerName = localStorage.getItem("playerName");

    if (!playerName) {
        playerName = prompt("Wie heißt du?");
        localStorage.setItem("playerName", playerName);
    }

    // 👉 HIER deinen ngrok Link eintragen
    const socket = new WebSocket("wss://princess-handed-errand.ngrok-free.dev?room=pokemon123&key=7788");

    socket.onopen = () => {
        console.log("✅ Verbunden mit Server");
    };

    socket.onerror = (err) => {
        console.error("❌ WebSocket Fehler:", err);
    };

    socket.onclose = (event) => {
        console.warn("⚠️ Verbindung geschlossen:", event.code, event.reason);
    };

    socket.onmessage = (event) => {
        console.log("📩 Nachricht:", event.data);
        try {
            const data = JSON.parse(event.data);

            if (data.type === "death") {
                alert("Der Bastard " + data.name + " hat zum " + data.count + ".Mal komplett reingeschissen 💀");
                console.table(data.stats);
                location.reload();
            }
        } catch (e){
            console.error("❌ Fehler beim Verarbeiten der Nachricht:", e);
       }
    };

    const chartBtn = document.createElement("button");
    chartBtn.innerText = "Tabelle";

    chartBtn.style.position = "fixed";
    chartBtn.style.top = "20px";
    chartBtn.style.right = "200px";
    chartBtn.style.zIndex = "999999";
    chartBtn.style.padding = "10px 15px";

    const typeChart = document.createElement("img");
    typeChart.src = "https://cardmex.b-cdn.net/media/49/2a/fa/1758813285/pokemon-typen-tabelle-staerken-schwaechen-effektivitaet.webp?ts=1758813285";
    typeChart.style.position = "fixed";
    typeChart.style.right = "20px";
    typeChart.style.bottom = "20px";
    typeChart.style.width = "450px";
    typeChart.style.zIndex = "999998";
    typeChart.style.display = "none";

    chartBtn.onclick = () => {
        typeChart.style.display =
            typeChart.style.display === "none" ? "block" : "none";
    };

    // 🔴 Button erstellen
    const btn = document.createElement("button");
    btn.innerText = "Verkackt 💀";

    btn.style.position = "fixed";
    btn.style.top = "20px";
    btn.style.right = "300px";
    btn.style.zIndex = "999999";
    btn.style.padding = "15px 20px";
    btn.style.fontSize = "18px";
    btn.style.background = "red";
    btn.style.color = "white";
    btn.style.border = "3px solid white";
    btn.style.borderRadius = "10px";
    btn.style.cursor = "pointer";

    btn.onclick = () => {
    if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({
            type: "death",
            name: playerName
        }));
    }
};

    document.body.appendChild(btn);
    document.body.appendChild(chartBtn);
    document.body.appendChild(typeChart);
})();
// ==UserScript==
// @name         Pokelike Soulbound
// @namespace    http://tampermonkey.net/
// @version      2026-05-04
// @description  try to take over the world!
// @author       Taberl3D
// @match        https://pokelike.xyz/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    console.log("🟢 Soulbound Script gestartet");

     // 🔥 Spielername speichern
    let playerName = localStorage.getItem("playerName");

    if (!playerName) {
        playerName = prompt("Wie heißt du?");
        localStorage.setItem("playerName", playerName);
    }

    // 👉 HIER deinen ngrok Link eintragen
    const socket = new WebSocket("wss://princess-handed-errand.ngrok-free.dev?room=pokemon123&key=7788");

    socket.onopen = () => {
        console.log("✅ Verbunden mit Server");
    };

    socket.onerror = (err) => {
        console.error("❌ WebSocket Fehler:", err);
    };

    socket.onclose = (event) => {
        console.warn("⚠️ Verbindung geschlossen:", event.code, event.reason);
    };

    socket.onmessage = (event) => {
        console.log("📩 Nachricht:", event.data);

        if (event.data === "reload") {
            alert("Der Bastard " + playerName + " hat komplett reingeschissen 💀");
            location.reload();
        }
    };

    const chartBtn = document.createElement("button");
    chartBtn.innerText = "Tabelle";

    chartBtn.style.position = "fixed";
    chartBtn.style.top = "20px";
    chartBtn.style.right = "200px";
    chartBtn.style.zIndex = "999999";
    chartBtn.style.padding = "10px 15px";

    const typeChart = document.createElement("img");
    typeChart.src = "https://cardmex.b-cdn.net/media/49/2a/fa/1758813285/pokemon-typen-tabelle-staerken-schwaechen-effektivitaet.webp?ts=1758813285";
    typeChart.style.position = "fixed";
    typeChart.style.right = "20px";
    typeChart.style.bottom = "20px";
    typeChart.style.width = "450px";
    typeChart.style.zIndex = "999998";
    typeChart.style.display = "none";

    chartBtn.onclick = () => {
        typeChart.style.display =
            typeChart.style.display === "none" ? "block" : "none";
    };

    // 🔴 Button erstellen
    const btn = document.createElement("button");
    btn.innerText = "Verkackt 💀";

    btn.style.position = "fixed";
    btn.style.top = "20px";
    btn.style.right = "300px";
    btn.style.zIndex = "999999";
    btn.style.padding = "15px 20px";
    btn.style.fontSize = "18px";
    btn.style.background = "red";
    btn.style.color = "white";
    btn.style.border = "3px solid white";
    btn.style.borderRadius = "10px";
    btn.style.cursor = "pointer";

    btn.onclick = () => {
        console.log("🧨 Button gedrückt");

        if (socket.readyState === WebSocket.OPEN) {
            socket.send("reload");
            console.log("📤 reload gesendet");
        } else {
            alert("❌ Nicht verbunden mit Server");
            console.warn("Socket Status:", socket.readyState);
        }
    };

    document.body.appendChild(btn);
    document.body.appendChild(chartBtn);
    document.body.appendChild(typeChart);
})();
