/**
 * Simple connection test
 */

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyA7ZBKUw9JN3_qU2VCKA4sI3MJXv6No-CZSY_cyQ2x56Vl2hzg-45K4s5qaNN5BJhV/exec";

async function testConnection() {
  console.log("🔌 Testing connection to Google Apps Script...\n");

  // Try GET first
  console.log("1️⃣  Trying GET request with testConnection...\n");
  try {
    const getUrl = APPS_SCRIPT_URL + "?action=testConnection";
    const response = await fetch(getUrl);
    const text = await response.text();
    console.log("GET Status:", response.status, response.statusText);
    console.log("Response type:", text.startsWith("{") ? "JSON" : "HTML");
    
    if (text.startsWith("{")) {
      console.log(JSON.stringify(JSON.parse(text), null, 2));
    } else {
      console.log(text.substring(0, 200));
    }
  } catch (error) {
    console.error("GET Error:", error.message);
  }

  console.log("\n" + "=".repeat(60) + "\n");
  
  // Try POST
  console.log("2️⃣  Trying POST request with testConnection...\n");
  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action: "testConnection" }),
    });

    const text = await response.text();
    console.log("POST Status:", response.status, response.statusText);
    console.log("Response type:", text.startsWith("{") ? "JSON" : "HTML");
    
    if (text.startsWith("{")) {
      console.log(JSON.stringify(JSON.parse(text), null, 2));
    } else {
      console.log(text.substring(0, 200));
    }
  } catch (error) {
    console.error("POST Error:", error.message);
  }
}

testConnection();
