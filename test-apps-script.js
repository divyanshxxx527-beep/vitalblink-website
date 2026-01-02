/**
 * Test script for Google Apps Script Affiliate Management API
 */

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyQdehfdz3CT818OA4YkcLjXsx5GwcnmNuqrVvY0vGbWVQSGU97f4Skv8zFhZtipkFI/exec";

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
    
    // Check if response is HTML (error) or JSON (success)
    if (text.startsWith("<")) {
      return { 
        success: false, 
        error: "Deployment authentication issue",
        details: "Response is HTML, not JSON. Check deployment settings.",
        status: response.status,
        statusText: response.statusText
      };
    }
    
    try {
      const data = JSON.parse(text);
      return data;
    } catch (e) {
      return { success: false, error: "Invalid JSON response", details: text.substring(0, 100) };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function runTests() {
  console.log("🧪 Testing Google Apps Script Affiliate Management API\n");
  console.log(`📍 API URL: ${APPS_SCRIPT_URL}\n`);

  // Test 1: Invalid request (empty payload)
  console.log("Test 1: Empty payload");
  try {
    const emptyTest = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify({}),
      headers: { "Content-Type": "application/json" },
    });
    const emptyText = await emptyTest.text();
    console.log("Status:", emptyTest.status);
    console.log("Response starts with:", emptyText.substring(0, 50));
    if (emptyText.startsWith("<")) {
      console.log("⚠️  Deployment is returning HTML instead of JSON");
      console.log("🔧 Fix: Make sure the deployment is set to 'Execute as' your account and 'Anyone' has access");
    }
  } catch (error) {
    console.log("Error:", error.message);
  }
  console.log("");
}

runTests().catch(console.error);
