#!/usr/bin/env node

/**
 * Test script for Affiliate Login System
 * 
 * This script tests the Google Apps Script deployment and affiliate authentication
 * 
 * Usage:
 *   node test-affiliate-system.js <APPS_SCRIPT_URL>
 * 
 * Example:
 *   node test-affiliate-system.js "https://script.google.com/macros/d/YOUR_ID/usercontent"
 */

const https = require('https');
const http = require('http');

const APPS_SCRIPT_URL = process.argv[2];

if (!APPS_SCRIPT_URL) {
  console.error('❌ Please provide Apps Script URL as argument');
  console.error('Usage: node test-affiliate-system.js <APPS_SCRIPT_URL>');
  process.exit(1);
}

console.log('\n📋 Affiliate Login System - Test Suite');
console.log('======================================\n');
console.log(`📍 Testing URL: ${APPS_SCRIPT_URL}\n`);

/**
 * Make POST request to Apps Script
 */
function makeRequest(payload) {
  return new Promise((resolve, reject) => {
    const url = new URL(APPS_SCRIPT_URL);
    const protocol = url.protocol === 'https:' ? https : http;
    
    const postData = JSON.stringify(payload);
    
    const options = {
      hostname: url.hostname,
      path: url.pathname + url.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
      },
      timeout: 30000,
    };

    const req = protocol.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json);
        } catch (e) {
          reject(new Error(`Invalid JSON response: ${data}`));
        }
      });
    });

    req.on('error', reject);
    req.on('timeout', () => {
      req.abort();
      reject(new Error('Request timeout'));
    });

    req.write(postData);
    req.end();
  });
}

/**
 * Run all tests
 */
async function runTests() {
  let testsPassed = 0;
  let testsFailed = 0;

  // Test 1: Health check
  console.log('Test 1: Health Check (GET)');
  try {
    // For health check, we'll just try to POST without action
    const response = await makeRequest({ action: 'health' });
    if (response) {
      console.log('✅ Apps Script is reachable and responding\n');
      testsPassed++;
    }
  } catch (error) {
    console.log(`❌ Health check failed: ${error.message}\n`);
    testsFailed++;
  }

  // Test 2: Login with demo credentials
  console.log('Test 2: Login with Demo Credentials');
  let demoToken = null;
  try {
    const response = await makeRequest({
      action: 'login',
      username: 'demo_affiliate',
      password: 'demo_password_123',
    });

    if (response.success && response.token) {
      console.log('✅ Login successful');
      console.log(`   Token: ${response.token.substring(0, 16)}...`);
      console.log(`   Expires: ${response.expiryTime}`);
      console.log(`   Username: ${response.affiliate.username}`);
      console.log(`   Email: ${response.affiliate.email}\n`);
      demoToken = response.token;
      testsPassed++;
    } else {
      console.log(`❌ Login failed: ${response.error}\n`);
      testsFailed++;
    }
  } catch (error) {
    console.log(`❌ Login test failed: ${error.message}\n`);
    testsFailed++;
  }

  // Test 3: Invalid credentials
  console.log('Test 3: Login with Invalid Credentials');
  try {
    const response = await makeRequest({
      action: 'login',
      username: 'demo_affiliate',
      password: 'wrong_password',
    });

    if (!response.success) {
      console.log('✅ Correctly rejected invalid credentials');
      console.log(`   Error: ${response.error}\n`);
      testsPassed++;
    } else {
      console.log('❌ Should have rejected invalid credentials\n');
      testsFailed++;
    }
  } catch (error) {
    console.log(`❌ Invalid credentials test failed: ${error.message}\n`);
    testsFailed++;
  }

  // Test 4: Verify token
  if (demoToken) {
    console.log('Test 4: Verify Token');
    try {
      const response = await makeRequest({
        action: 'verify',
        token: demoToken,
      });

      if (response.success) {
        console.log('✅ Token verified');
        console.log(`   Username: ${response.affiliate.username}`);
        console.log(`   Email: ${response.affiliate.email}\n`);
        testsPassed++;
      } else {
        console.log(`❌ Token verification failed: ${response.error}\n`);
        testsFailed++;
      }
    } catch (error) {
      console.log(`❌ Token verification test failed: ${error.message}\n`);
      testsFailed++;
    }
  }

  // Test 5: Get affiliate data
  if (demoToken) {
    console.log('Test 5: Get Affiliate Profile');
    try {
      const response = await makeRequest({
        action: 'getAffiliate',
        token: demoToken,
      });

      if (response.success) {
        console.log('✅ Profile retrieved');
        console.log(`   Username: ${response.affiliate.username}`);
        console.log(`   Email: ${response.affiliate.email}`);
        console.log(`   Status: ${response.affiliate.status}`);
        console.log(`   Commission Rate: ${(response.affiliate.commissionRate * 100).toFixed(0)}%`);
        console.log(`   Total Earnings: $${response.affiliate.totalEarnings}`);
        console.log(`   Total Leads: ${response.affiliate.totalLeads}\n`);
        testsPassed++;
      } else {
        console.log(`❌ Profile retrieval failed: ${response.error}\n`);
        testsFailed++;
      }
    } catch (error) {
      console.log(`❌ Profile retrieval test failed: ${error.message}\n`);
      testsFailed++;
    }
  }

  // Test 6: Invalid token
  console.log('Test 6: Verify with Invalid Token');
  try {
    const response = await makeRequest({
      action: 'verify',
      token: 'invalid_token_123',
    });

    if (!response.success) {
      console.log('✅ Correctly rejected invalid token');
      console.log(`   Error: ${response.error}\n`);
      testsPassed++;
    } else {
      console.log('❌ Should have rejected invalid token\n');
      testsFailed++;
    }
  } catch (error) {
    console.log(`❌ Invalid token test failed: ${error.message}\n`);
    testsFailed++;
  }

  // Summary
  console.log('\n======================================');
  console.log('📊 Test Results');
  console.log('======================================');
  console.log(`✅ Passed: ${testsPassed}`);
  console.log(`❌ Failed: ${testsFailed}`);
  console.log(`📈 Success Rate: ${((testsPassed / (testsPassed + testsFailed)) * 100).toFixed(0)}%\n`);

  if (testsFailed === 0) {
    console.log('🎉 All tests passed! Your affiliate system is working correctly.\n');
    process.exit(0);
  } else {
    console.log('⚠️  Some tests failed. Please check your Apps Script setup.\n');
    process.exit(1);
  }
}

// Run tests
runTests().catch((error) => {
  console.error(`\n❌ Test suite failed: ${error.message}\n`);
  process.exit(1);
});
