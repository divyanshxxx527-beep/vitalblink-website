/**
 * Test script to verify the login fix for Google Apps Script Affiliate Management API
 */

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx4-ESxVsQs7GoX9vHnlhDq_Etz976EmM6FtCWeHMZrizoeteoRiGb0dRKD4DiK0sXk/exec";

async function makeRequest(action, payload) {
  try {
    console.log(`\n📤 Sending request: ${action}`);
    console.log(`Payload:`, JSON.stringify(payload, null, 2));
    
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
      console.log("❌ Error: Deployment returned HTML instead of JSON");
      console.log("Status:", response.status);
      console.log("Details: Check deployment settings - must be 'Execute as' your account and 'Anyone' has access");
      return { 
        success: false, 
        error: "Deployment authentication issue",
        status: response.status
      };
    }
    
    try {
      const data = JSON.parse(text);
      console.log(`\n📥 Response:`, JSON.stringify(data, null, 2));
      return data;
    } catch (e) {
      console.log("❌ Error: Invalid JSON response");
      console.log("Response text:", text.substring(0, 200));
      return { success: false, error: "Invalid JSON response", details: text };
    }
  } catch (error) {
    console.log(`❌ Fetch error: ${error.message}`);
    return { success: false, error: error.message };
  }
}

async function runTests() {
  console.log("=" .repeat(70));
  console.log("🧪 Testing Google Apps Script Login Fix");
  console.log("=" .repeat(70));
  console.log(`📍 API URL: ${APPS_SCRIPT_URL}`);
  console.log("");

  let loginToken = null; // Store token for next test

  // Test 1: Connection test
  console.log("\n" + "─".repeat(70));
  console.log("✅ TEST 1: Connection Test");
  console.log("─".repeat(70));
  let result = await makeRequest("testConnection", {});
  console.log(result.success ? "✓ Connection successful" : "✗ Connection failed");

  // Test 2: Login with correct credentials (test/123)
  console.log("\n" + "─".repeat(70));
  console.log("✅ TEST 2: Login with correct credentials (test/123)");
  console.log("─".repeat(70));
  result = await makeRequest("login", {
    username: "test",
    password: "123"
  });
  
  if (result.success) {
    console.log("✓ Login successful!");
    console.log("Token:", result.token);
    loginToken = result.token; // Store for next test
  } else {
    console.log("✗ Login failed:", result.error);
  }

  // Test 3: Login with wrong password
  console.log("\n" + "─".repeat(70));
  console.log("✅ TEST 3: Login with wrong password (should fail)");
  console.log("─".repeat(70));
  result = await makeRequest("login", {
    username: "test",
    password: "wrong"
  });
  console.log(result.success ? "✗ Unexpectedly succeeded" : "✓ Correctly rejected");
  console.log("Response:", result.error || result.message);

  // Test 4: Login with spaces in credentials (testing the trim fix)
  console.log("\n" + "─".repeat(70));
  console.log("✅ TEST 4: Login with spaces (testing trim fix)");
  console.log("─".repeat(70));
  result = await makeRequest("login", {
    username: " test ",
    password: " 123 "
  });
  
  if (result.success) {
    console.log("✓ Login with spaces successful! (TRIM FIX WORKING)");
    console.log("Token:", result.token);
    loginToken = result.token; // Store for profile test
  } else {
    console.log("✗ Login with spaces failed:", result.error);
  }

  // Test 5: Get profile (requires valid token)
  if (loginToken) {
    console.log("\n" + "─".repeat(70));
    console.log("✅ TEST 5: Get Profile (using token from successful login)");
    console.log("─".repeat(70));
    result = await makeRequest("getProfile", {
      token: loginToken
    });
    
    if (result.success) {
      console.log("✓ Profile retrieved successfully!");
      console.log("Profile:", JSON.stringify(result.profile, null, 2));
    } else {
      console.log("✗ Failed to get profile:", result.error);
    }
  }

  console.log("\n" + "=".repeat(70));
  console.log("🏁 Tests Complete!");
  console.log("=".repeat(70));
}

runTests().catch(console.error);
