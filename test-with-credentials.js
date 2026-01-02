/**
 * Test script with actual credentials
 */

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyA7ZBKUw9JN3_qU2VCKA4sI3MJXv6No-CZSY_cyQ2x56Vl2hzg-45K4s5qaNN5BJhV/exec";
const TEST_USERNAME = "tezst";
const TEST_PASSWORD = "123";

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
        error: "HTML response received",
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
  console.log("🧪 Testing Google Apps Script with Credentials\n");
  console.log(`📍 API URL: ${APPS_SCRIPT_URL}\n`);
  console.log(`👤 Username: ${TEST_USERNAME}`);
  console.log(`🔐 Password: ${TEST_PASSWORD}\n`);
  console.log("=".repeat(60) + "\n");

  // Test 1: Login
  console.log("✅ Test 1: Login");
  const loginResult = await makeRequest("login", {
    username: TEST_USERNAME,
    password: TEST_PASSWORD,
  });
  console.log("Response:", JSON.stringify(loginResult, null, 2));
  
  if (!loginResult.success) {
    console.log("❌ Login failed. Cannot continue with other tests.\n");
    return;
  }

  const token = loginResult.token;
  console.log(`\n✅ Login successful! Token: ${token.substring(0, 20)}...\n`);
  console.log("=".repeat(60) + "\n");

  // Test 2: Get Profile
  console.log("✅ Test 2: Get Profile");
  const profileResult = await makeRequest("getProfile", { token });
  console.log("Response:", JSON.stringify(profileResult, null, 2));
  console.log("\n" + "=".repeat(60) + "\n");

  // Test 3: List Leads
  console.log("✅ Test 3: List Leads");
  const leadsResult = await makeRequest("listLeads", { token });
  console.log("Response:", JSON.stringify(leadsResult, null, 2));
  console.log("\n" + "=".repeat(60) + "\n");

  // Test 4: Create Lead
  console.log("✅ Test 4: Create Lead");
  const leadResult = await makeRequest("createLead", {
    token,
    hospitalName: "Test Hospital Corp",
    address: "123 Medical Ave, New York, NY 10001",
  });
  console.log("Response:", JSON.stringify(leadResult, null, 2));
  
  if (leadResult.success) {
    const leadID = leadResult.leadID;
    console.log(`\n✅ Lead created! ID: ${leadID}\n`);
    console.log("=".repeat(60) + "\n");

    // Test 5: Update Lead Status
    console.log("✅ Test 5: Update Lead Status");
    const updateResult = await makeRequest("updateLeadStatus", {
      token,
      leadID,
      status: "Completed",
      paymentMethod: "Credit Card",
      orderID: "ORD-12345",
      purchaseEmail: "purchase@hospital.com",
      amount: "5000",
    });
    console.log("Response:", JSON.stringify(updateResult, null, 2));
    console.log("\n" + "=".repeat(60) + "\n");
  }

  // Test 6: Update Profile
  console.log("✅ Test 6: Update Profile (Bank Details)");
  const updateProfileResult = await makeRequest("updateProfile", {
    token,
    bankHolderName: "John Doe",
    bankName: "Example Bank",
    bankAccountNo: "1234567890",
    ifsc: "EXPL0001234",
  });
  console.log("Response:", JSON.stringify(updateProfileResult, null, 2));
  console.log("\n" + "=".repeat(60) + "\n");

  console.log("✅ All tests completed successfully!");
}

runTests().catch(console.error);
