/**
 * Test to initialize sheets and add test user
 */

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx9ZmpcZDUg7-P9DMWJ5IDEfpDuFmZ-DA_3sx3cvrN6Wm1_7i1TW4Hfsjc_izX7RnS5/exec";

async function makeRequest(action, payload) {
  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action, ...payload }),
    });

    const text = await response.text();
    
    if (text.startsWith("{")) {
      return JSON.parse(text);
    } else {
      return { 
        success: false, 
        error: "HTML response received",
        details: text.substring(0, 100)
      };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function initialize() {
  console.log("📝 Initializing Google Sheets...\n");

  const result = await makeRequest("initializeSheets", {});
  console.log("Response:", JSON.stringify(result, null, 2));
  
  if (result.success) {
    console.log("\n✅ Sheets initialized successfully!");
    console.log("\n📌 Check your Google Sheet to verify:");
    console.log("- Users sheet with test user (test/123)");
    console.log("- Leads sheet");
    console.log("\nNow you can test login with: username='test', password='123'");
  }
}

initialize().catch(console.error);
