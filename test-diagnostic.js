/**
 * Diagnostic test to see the actual HTML error
 */

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx9ZmpcZDUg7-P9DMWJ5IDEfpDuFmZ-DA_3sx3cvrN6Wm1_7i1TW4Hfsjc_izX7RnS5/exec";

async function testDiagnostic() {
  console.log("🔍 Diagnostic Test\n");

  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action: "testConnection" }),
    });

    const text = await response.text();
    
    console.log("Status:", response.status);
    console.log("Status Text:", response.statusText);
    console.log("\nResponse (first 500 chars):");
    console.log(text.substring(0, 500));
    
    // Extract error message if present
    if (text.includes("<title>")) {
      const titleMatch = text.match(/<title>(.*?)<\/title>/);
      if (titleMatch) {
        console.log("\n📌 Error Title:", titleMatch[1]);
      }
    }
    
    if (text.includes("Error")) {
      console.log("\n⚠️  This is an error page, not the API response");
    }
    
  } catch (error) {
    console.error("Request error:", error.message);
  }
}

testDiagnostic();
