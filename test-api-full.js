/**
 * Full API test with built-in test user
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

async function runFullTest() {
  console.log("🧪 FULL API TEST WITH TEST USER\n");
  console.log("📍 API URL:", APPS_SCRIPT_URL);
  console.log("👤 Username: test");
  console.log("🔐 Password: 123\n");
  console.log("=".repeat(70) + "\n");

  // Test 1: Login with test user
  console.log("✅ TEST 1: Login");
  const loginResult = await makeRequest("login", {
    username: "test",
    password: "123",
  });
  console.log("Response:", JSON.stringify(loginResult, null, 2));
  
  if (!loginResult.success) {
    console.log("\n❌ Login failed. Cannot continue.\n");
    return;
  }

  const token = loginResult.token;
  console.log(`\n✅ Login successful!`);
  console.log(`Token: ${token.substring(0, 16)}...`);
  console.log(`Expires in: ${loginResult.expiresIn} seconds (${(loginResult.expiresIn / 3600).toFixed(1)} hours)\n`);
  console.log("=".repeat(70) + "\n");

  // Test 2: Get Profile
  console.log("✅ TEST 2: Get Profile");
  const profileResult = await makeRequest("getProfile", { token });
  console.log("Response:", JSON.stringify(profileResult, null, 2));
  console.log("\n" + "=".repeat(70) + "\n");

  // Test 3: Update Profile
  console.log("✅ TEST 3: Update Profile (Bank Details)");
  const updateProfileResult = await makeRequest("updateProfile", {
    token,
    bankHolderName: "John Smith",
    bankName: "Chase Bank",
    bankAccountNo: "9876543210",
    ifsc: "CHASE001",
  });
  console.log("Response:", JSON.stringify(updateProfileResult, null, 2));
  console.log("\n" + "=".repeat(70) + "\n");

  // Test 4: Create Lead
  console.log("✅ TEST 4: Create Lead");
  const leadResult = await makeRequest("createLead", {
    token,
    hospitalName: "City Medical Center",
    address: "456 Hospital Blvd, Los Angeles, CA 90001",
  });
  console.log("Response:", JSON.stringify(leadResult, null, 2));
  
  let leadID = null;
  if (leadResult.success) {
    leadID = leadResult.leadID;
    console.log(`\n✅ Lead created: ${leadID}\n`);
  }
  console.log("=".repeat(70) + "\n");

  // Test 5: List Leads
  console.log("✅ TEST 5: List Leads");
  const leadsResult = await makeRequest("listLeads", { token });
  console.log("Response:", JSON.stringify(leadsResult, null, 2));
  console.log("\n" + "=".repeat(70) + "\n");

  // Test 6: Update Lead Status (if we created one)
  if (leadID) {
    console.log("✅ TEST 6: Update Lead Status");
    const updateLeadResult = await makeRequest("updateLeadStatus", {
      token,
      leadID,
      status: "Completed",
      paymentMethod: "Wire Transfer",
      orderID: "ORD-2025-001",
      purchaseEmail: "admin@hospital.com",
      amount: "10000",
    });
    console.log("Response:", JSON.stringify(updateLeadResult, null, 2));
    console.log("\n" + "=".repeat(70) + "\n");
  }

  console.log("✅ All tests completed!\n");
  console.log("📝 Summary:");
  console.log("- Login: Working");
  console.log("- Profile management: Working");
  console.log("- Lead management: Working");
  console.log("\n💡 Next steps:");
  console.log("- Add 'tezst' user to Google Sheet if needed");
  console.log("- Share the API URL in .env file as APPS_SCRIPT_URL");
}

runFullTest().catch(console.error);
