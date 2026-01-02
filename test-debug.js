/**
 * Debug test - check sheet contents
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
        error: "HTML response received"
      };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function debug() {
  console.log("🔍 Checking Sheet Contents...\n");

  // Note: We're calling it as an action through the API
  // This won't work because debugGetSheetInfo isn't exposed
  // Let's just try login again and see the error
  
  const loginResult = await makeRequest("login", {
    username: "test",
    password: "123"
  });
  
  console.log("Login Result:", JSON.stringify(loginResult, null, 2));
  
  if (!loginResult.success) {
    console.log("\n⚠️  The test user may not have been created properly.");
    console.log("This could be because:");
    console.log("1. The sheet already had data and wasn't cleared");
    console.log("2. The test user row has issues");
    console.log("\n🔧 Manual fix: Open your Google Sheet and:");
    console.log("1. Delete all rows in the 'Users' sheet");
    console.log("2. Run initialize again");
    console.log("3. Or manually add: test | 123 | test@example.com");
  }
}

debug().catch(console.error);
