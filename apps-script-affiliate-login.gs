/**
 * Google Apps Script - Affiliate Login System
 * 
 * This script manages affiliate user credentials and authentication
 * Stores username and password in plain text in Google Sheets
 * 
 * Setup Instructions:
 * 1. Create a new Google Sheet for storing affiliate credentials
 * 2. Name the first sheet "Affiliates"
 * 3. Column A: Username, Column B: Password (plain text), Column C: Email, Column D: Token
 * 4. Deploy this as a web app (Execute as: your account, Who has access: Anyone)
 * 5. Copy the deployment URL and add to NEXT_PUBLIC_APPS_SCRIPT_URL env variable
 */

// Global variables
const SHEET_ID = '182WJsLlWHMoeFT8PLw60Z8G0ayiLHznsRm5Z0HfMYRQ'; // Your Google Sheet ID
const SHEET_NAME = 'Affiliates';
const LEADS_SHEET_NAME = 'Leads';
const TOKEN_EXPIRY_HOURS = 24;
const TOKEN_LENGTH = 32;

/**
 * Get Sheet ID from properties or use hardcoded value
 */
function getSheetId() {
  return SHEET_ID;
}

/**
 * Get the sheet from spreadsheet
 */
function getSheet() {
  if (!SHEET_ID) {
    throw new Error('SHEET_ID not configured.');
  }
  const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  return spreadsheet.getSheetByName(SHEET_NAME);
}

/**
 * Generate a random token
 */
function generateToken() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let i = 0; i < TOKEN_LENGTH; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return token;
}

/**
 * Find affiliate by username
 * Returns: { row, username, password, email, token, tokenExpiry }
 */
function findAffiliateByUsername(username) {
  const sheet = getSheet();
  const data = sheet.getDataRange().getValues();
  
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] && data[i][0].toString().trim() === username.trim()) {
      return {
        row: i + 1,
        username: data[i][0],
        password: data[i][1],
        email: data[i][2],
        token: data[i][3] || '',
        tokenExpiry: data[i][4] || '',
      };
    }
  }
  return null;
}

/**
 * Update affiliate token in sheet
 */
function updateAffiliateToken(row, token, expiryTime) {
  const sheet = getSheet();
  sheet.getRange(row, 4).setValue(token);
  sheet.getRange(row, 5).setValue(expiryTime);
}

/**
 * LOGIN endpoint
 * Expected body: { action: 'login', username: 'xxx', password: 'xxx' }
 */
function handleLogin(username, password) {
  // Input validation
  if (!username || !password) {
    return {
      success: false,
      error: 'Username and password are required',
      code: 'MISSING_CREDENTIALS'
    };
  }

  // Find affiliate by username
  const affiliate = findAffiliateByUsername(username);
  
  if (!affiliate) {
    return {
      success: false,
      error: 'Invalid username',
      code: 'USER_NOT_FOUND'
    };
  }

  // Verify password (plain text comparison)
  if (affiliate.password.toString().trim() !== password.trim()) {
    return {
      success: false,
      error: 'Invalid password',
      code: 'INVALID_PASSWORD'
    };
  }

  // Generate new token
  const token = generateToken();
  const expiryTime = new Date(Date.now() + TOKEN_EXPIRY_HOURS * 60 * 60 * 1000).toISOString();

  // Update token in sheet
  updateAffiliateToken(affiliate.row, token, expiryTime);

  // Return success
  return {
    success: true,
    token: token,
    expiryTime: expiryTime,
    affiliate: {
      username: affiliate.username,
      email: affiliate.email
    }
  };
}

/**
 * VERIFY TOKEN endpoint
 * Expected body: { action: 'verify', token: 'xxx' }
 */
function handleVerifyToken(token) {
  if (!token) {
    return {
      success: false,
      error: 'Token is required',
      code: 'MISSING_TOKEN'
    };
  }

  const sheet = getSheet();
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    const storedToken = data[i][3] ? data[i][3].toString() : '';
    const tokenExpiry = data[i][4] ? new Date(data[i][4]) : null;

    if (storedToken === token) {
      // Check if token is expired
      if (tokenExpiry && tokenExpiry < new Date()) {
        return {
          success: false,
          error: 'Token expired',
          code: 'TOKEN_EXPIRED'
        };
      }

      return {
        success: true,
        affiliate: {
          username: data[i][0],
          email: data[i][2]
        },
        tokenExpiry: data[i][4] ? data[i][4].toString() : ''
      };
    }
  }

  return {
    success: false,
    error: 'Invalid token',
    code: 'INVALID_TOKEN'
  };
}

/**
 * GET AFFILIATE DATA endpoint
 * Expected body: { action: 'getAffiliate', token: 'xxx' }
 */
function handleGetAffiliate(token) {
  // Verify token first
  const verification = handleVerifyToken(token);
  if (!verification.success) {
    return verification;
  }

  const sheet = getSheet();
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    if (data[i][3] && data[i][3].toString() === token) {
      return {
        success: true,
        affiliate: {
          username: data[i][0] || '',
          email: data[i][2] || '',
          joinedDate: data[i][5] || '',
          commissionRate: data[i][6] || 0,
          totalEarnings: data[i][7] || 0,
          totalLeads: data[i][8] || 0,
          status: data[i][9] || 'active',
          phone: data[i][10] || '',
          company: data[i][11] || '',
          bankAccount: data[i][12] || ''
        }
      };
    }
  }

  return {
    success: false,
    error: 'Affiliate not found',
    code: 'AFFILIATE_NOT_FOUND'
  };
}

/**
 * LIST ALL AFFILIATES endpoint (admin only)
 * Expected body: { action: 'listAffiliates', adminToken: 'xxx' }
 */
function handleListAffiliates(adminToken) {
  // Simple admin token check - in production, use stronger authentication
  const ADMIN_TOKEN = PropertiesService.getScriptProperties().getProperty('ADMIN_TOKEN');
  
  if (!ADMIN_TOKEN || adminToken !== ADMIN_TOKEN) {
    return {
      success: false,
      error: 'Unauthorized',
      code: 'UNAUTHORIZED'
    };
  }

  const sheet = getSheet();
  const data = sheet.getDataRange().getValues();
  const affiliates = [];

  for (let i = 1; i < data.length; i++) {
    if (data[i][0]) { // Skip empty rows
      affiliates.push({
        username: data[i][0],
        email: data[i][2],
        status: data[i][9] || 'active',
        totalEarnings: data[i][7] || 0,
        totalLeads: data[i][8] || 0
      });
    }
  }

  return {
    success: true,
    count: affiliates.length,
    affiliates: affiliates
  };
}

/**
 * CREATE NEW AFFILIATE endpoint (admin only)
 * Expected body: { action: 'createAffiliate', adminToken: 'xxx', username: 'xxx', password: 'xxx', email: 'xxx' }
 */
function handleCreateAffiliate(adminToken, username, password, email) {
  const ADMIN_TOKEN = PropertiesService.getScriptProperties().getProperty('ADMIN_TOKEN');
  
  if (!ADMIN_TOKEN || adminToken !== ADMIN_TOKEN) {
    return {
      success: false,
      error: 'Unauthorized',
      code: 'UNAUTHORIZED'
    };
  }

  // Validate input
  if (!username || !password || !email) {
    return {
      success: false,
      error: 'Username, password, and email are required',
      code: 'MISSING_FIELDS'
    };
  }

  // Check if username already exists
  if (findAffiliateByUsername(username)) {
    return {
      success: false,
      error: 'Username already exists',
      code: 'USER_EXISTS'
    };
  }

  // Add new affiliate to sheet
  const sheet = getSheet();
  const newRow = [
    username,
    password, // plain text
    email,
    '', // token
    '', // tokenExpiry
    new Date().toISOString(), // joinedDate
    0.15, // commissionRate (15%)
    0, // totalEarnings
    0, // totalLeads
    'active' // status
  ];

  sheet.appendRow(newRow);

  return {
    success: true,
    message: 'Affiliate created successfully',
    affiliate: {
      username: username,
      email: email,
      commissionRate: 0.15,
      status: 'active'
    }
  };
}

/**
 * Main entry point - handles all requests
 * Deployed as a web app
 */
function doPost(e) {
  try {
    const params = JSON.parse(e.postData.contents);
    const action = params.action;

    let response;

    switch (action) {
      case 'login':
        response = handleLogin(params.username, params.password);
        break;

      case 'verify':
        response = handleVerifyToken(params.token);
        break;

      case 'getAffiliate':
        response = handleGetAffiliate(params.token);
        break;

      case 'getLeads':
        response = handleGetLeads(params.token);
        break;

      case 'createLead':
        response = handleCreateLead(
          params.token,
          params.leadName,
          params.leadEmail,
          params.leadPhone,
          params.notes,
          params.purchaseId,
          params.paymentMethod,
          params.paymentEmail
        );
        break;

      case 'updatePayment':
        response = handleUpdatePayment(
          params.token,
          params.leadId,
          params.purchaseId,
          params.paymentMethod,
          params.paymentEmail,
          params.status
        );
        break;

      case 'updateLeadStatus':
        response = handleUpdateLeadStatus(
          params.adminToken,
          params.leadId,
          params.status
        );
        break;

      case 'listAffiliates':
        response = handleListAffiliates(params.adminToken);
        break;

      case 'createAffiliate':
        response = handleCreateAffiliate(
          params.adminToken,
          params.username,
          params.password,
          params.email
        );
        break;

      default:
        response = {
          success: false,
          error: 'Unknown action: ' + action,
          code: 'UNKNOWN_ACTION'
        };
    }

    return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    const errorResponse = {
      success: false,
      error: error.message,
      code: 'INTERNAL_ERROR'
    };

    Logger.log('Error: ' + error.message);
    return ContentService.createTextOutput(JSON.stringify(errorResponse))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * GET endpoint for health check
 */
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    success: true,
    message: 'Affiliate Login API is running',
    actions: ['login', 'verify', 'getAffiliate', 'getLeads', 'createLead', 'updatePayment', 'updateLeadStatus', 'listAffiliates', 'createAffiliate']
  }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * GET LEADS endpoint
 * Expected body: { action: 'getLeads', token: 'xxx' }
 */
function handleGetLeads(token) {
  // Verify token first
  const verification = handleVerifyToken(token);
  if (!verification.success) {
    return verification;
  }

  const username = verification.affiliate.username;
  
  try {
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    const leadsSheet = spreadsheet.getSheetByName(LEADS_SHEET_NAME);
    
    if (!leadsSheet) {
      return {
        success: true,
        leads: [],
        count: 0,
        message: 'No leads available'
      };
    }

    const data = leadsSheet.getDataRange().getValues();
    const leads = [];

    // Skip header row (row 0)
    for (let i = 1; i < data.length; i++) {
      // Check if row has data and belongs to this affiliate
      if (data[i][0] && data[i][1] && data[i][1].toString().trim() === username.trim()) {
        leads.push({
          id: data[i][0] ? data[i][0].toString() : '',
          affiliateUsername: data[i][1] ? data[i][1].toString() : '',
          leadName: data[i][2] ? data[i][2].toString() : '',
          leadEmail: data[i][3] ? data[i][3].toString() : '',
          leadPhone: data[i][4] ? data[i][4].toString() : '',
          status: data[i][5] ? data[i][5].toString() : 'pending',
          createdDate: data[i][6] ? data[i][6].toString() : '',
          conversionValue: data[i][7] ? Number(data[i][7]) : 0,
          notes: data[i][8] ? data[i][8].toString() : '',
          purchaseId: data[i][9] ? data[i][9].toString() : '',
          paymentMethod: data[i][10] ? data[i][10].toString() : '',
          paymentEmail: data[i][11] ? data[i][11].toString() : '',
          statusUpdatedDate: data[i][12] ? data[i][12].toString() : ''
        });
      }
    }

    return {
      success: true,
      leads: leads,
      count: leads.length,
      message: leads.length === 0 ? 'No leads available' : 'Leads retrieved successfully'
    };
  } catch (error) {
    return {
      success: false,
      error: 'Failed to retrieve leads: ' + error.message,
      code: 'LEADS_ERROR'
    };
  }
}

/**
 * CREATE LEAD endpoint
 * Expected body: { action: 'createLead', token: 'xxx', leadName: 'xxx', leadEmail: 'xxx', leadPhone: 'xxx', notes: 'xxx', purchaseId: 'xxx', paymentMethod: 'xxx', paymentEmail: 'xxx' }
 */
function handleCreateLead(token, leadName, leadEmail, leadPhone, notes, purchaseId, paymentMethod, paymentEmail) {
  // Verify token first
  const verification = handleVerifyToken(token);
  if (!verification.success) {
    return verification;
  }

  const username = verification.affiliate.username;

  // Validate input
  if (!leadName || !leadEmail) {
    return {
      success: false,
      error: 'Lead name and email are required',
      code: 'MISSING_FIELDS'
    };
  }

  try {
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    let leadsSheet = spreadsheet.getSheetByName(LEADS_SHEET_NAME);
    
    // Create sheet if it doesn't exist
    if (!leadsSheet) {
      leadsSheet = spreadsheet.insertSheet(LEADS_SHEET_NAME);
      leadsSheet.appendRow([
        'Lead ID',
        'Affiliate Username',
        'Lead Name',
        'Lead Email',
        'Lead Phone',
        'Status',
        'Created Date',
        'Conversion Value',
        'Notes',
        'Purchase ID',
        'Payment Method',
        'Payment Email',
        'Status Updated Date'
      ]);
    }

    // Generate lead ID
    const leadId = 'LEAD_' + Date.now();
    const createdDate = new Date().toISOString();
    
    // Add lead row
    const newRow = [
      leadId,
      username,
      leadName,
      leadEmail,
      leadPhone || '',
      'pending',
      createdDate,
      0,
      notes || '',
      purchaseId || '',
      paymentMethod || '',
      paymentEmail || '',
      createdDate
    ];

    leadsSheet.appendRow(newRow);

    return {
      success: true,
      message: 'Lead created successfully',
      lead: {
        id: leadId,
        affiliateUsername: username,
        leadName: leadName,
        leadEmail: leadEmail,
        leadPhone: leadPhone || '',
        status: 'pending',
        createdDate: createdDate,
        conversionValue: 0,
        notes: notes || '',
        purchaseId: purchaseId || '',
        paymentMethod: paymentMethod || '',
        paymentEmail: paymentEmail || '',
        statusUpdatedDate: createdDate
      }
    };
  } catch (error) {
    return {
      success: false,
      error: 'Failed to create lead: ' + error.message,
      code: 'CREATE_LEAD_ERROR'
    };
  }
}

/**
 * UPDATE LEAD STATUS endpoint (admin only)
 * Expected body: { action: 'updateLeadStatus', adminToken: 'xxx', leadId: 'xxx', status: 'xxx' }
 */
function handleUpdateLeadStatus(adminToken, leadId, status) {
  const ADMIN_TOKEN = PropertiesService.getScriptProperties().getProperty('ADMIN_TOKEN');
  
  if (!ADMIN_TOKEN || adminToken !== ADMIN_TOKEN) {
    return {
      success: false,
      error: 'Unauthorized',
      code: 'UNAUTHORIZED'
    };
  }

  // Validate status
  const validStatuses = ['pending', 'approved', 'processing', 'done', 'rejected'];
  if (!validStatuses.includes(status.toLowerCase())) {
    return {
      success: false,
      error: 'Invalid status. Must be one of: ' + validStatuses.join(', '),
      code: 'INVALID_STATUS'
    };
  }

  try {
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    const leadsSheet = spreadsheet.getSheetByName(LEADS_SHEET_NAME);
    
    if (!leadsSheet) {
      return {
        success: false,
        error: 'Leads sheet not found',
        code: 'SHEET_NOT_FOUND'
      };
    }

    const data = leadsSheet.getDataRange().getValues();
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] && data[i][0].toString() === leadId) {
        leadsSheet.getRange(i + 1, 6).setValue(status); // Column F is Status
        leadsSheet.getRange(i + 1, 13).setValue(new Date().toISOString()); // Column M is Status Updated Date
        return {
          success: true,
          message: 'Lead status updated',
          leadId: leadId,
          status: status
        };
      }
    }

    return {
      success: false,
      error: 'Lead not found',
      code: 'LEAD_NOT_FOUND'
    };
  } catch (error) {
    return {
      success: false,
      error: 'Failed to update lead: ' + error.message,
      code: 'UPDATE_ERROR'
    };
  }
}

/**
 * UPDATE PAYMENT INFO endpoint
 * Expected body: { action: 'updatePayment', token: 'xxx', leadId: 'xxx', purchaseId: 'xxx', paymentMethod: 'xxx', paymentEmail: 'xxx', status: 'xxx' }
 */
function handleUpdatePayment(token, leadId, purchaseId, paymentMethod, paymentEmail, status) {
  // Verify token first
  const verification = handleVerifyToken(token);
  if (!verification.success) {
    return verification;
  }

  const username = verification.affiliate.username;

  // Validate input
  if (!leadId) {
    return {
      success: false,
      error: 'Lead ID is required',
      code: 'MISSING_LEAD_ID'
    };
  }

  // Validate status
  const validStatuses = ['pending', 'approved', 'processing', 'done', 'rejected'];
  if (status && !validStatuses.includes(status.toLowerCase())) {
    return {
      success: false,
      error: 'Invalid status. Must be one of: ' + validStatuses.join(', '),
      code: 'INVALID_STATUS'
    };
  }

  try {
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    const leadsSheet = spreadsheet.getSheetByName(LEADS_SHEET_NAME);
    
    if (!leadsSheet) {
      return {
        success: false,
        error: 'Leads sheet not found',
        code: 'SHEET_NOT_FOUND'
      };
    }

    const data = leadsSheet.getDataRange().getValues();
    
    for (let i = 1; i < data.length; i++) {
      // Check if this is the right lead and belongs to this affiliate
      if (data[i][0] && data[i][0].toString() === leadId && 
          data[i][1] && data[i][1].toString().trim() === username.trim()) {
        
        // Update payment information
        if (purchaseId !== undefined) {
          leadsSheet.getRange(i + 1, 10).setValue(purchaseId); // Column J is Purchase ID
        }
        if (paymentMethod !== undefined) {
          leadsSheet.getRange(i + 1, 11).setValue(paymentMethod); // Column K is Payment Method
        }
        if (paymentEmail !== undefined) {
          leadsSheet.getRange(i + 1, 12).setValue(paymentEmail); // Column L is Payment Email
        }
        if (status !== undefined) {
          leadsSheet.getRange(i + 1, 6).setValue(status); // Column F is Status
        }
        leadsSheet.getRange(i + 1, 13).setValue(new Date().toISOString()); // Column M is Status Updated Date
        
        return {
          success: true,
          message: 'Payment information updated successfully',
          lead: {
            id: leadId,
            purchaseId: purchaseId || data[i][9],
            paymentMethod: paymentMethod || data[i][10],
            paymentEmail: paymentEmail || data[i][11],
            status: status || data[i][5],
            statusUpdatedDate: new Date().toISOString()
          }
        };
      }
    }

    return {
      success: false,
      error: 'Lead not found or unauthorized',
      code: 'LEAD_NOT_FOUND'
    };
  } catch (error) {
    return {
      success: false,
      error: 'Failed to update payment: ' + error.message,
      code: 'UPDATE_PAYMENT_ERROR'
    };
  }
}

/**
 * This function creates the Affiliates sheet with proper headers
 */
function setupSheet() {
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheetId = spreadsheet.getId();
    
    Logger.log('Starting setup...');
    Logger.log('Current Spreadsheet ID: ' + sheetId);
    
    // Store sheet ID in script properties
    PropertiesService.getScriptProperties().setProperty('SHEET_ID', sheetId);
    Logger.log('✓ SHEET_ID property set');
    
    // Generate and store admin token
    const adminToken = generateToken();
    PropertiesService.getScriptProperties().setProperty('ADMIN_TOKEN', adminToken);
    Logger.log('✓ ADMIN_TOKEN generated: ' + adminToken);
    
    // Create or get sheet
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    if (sheet) {
      Logger.log('✓ Affiliates sheet already exists, clearing it...');
      sheet.clear();
    } else {
      Logger.log('✓ Creating new Affiliates sheet...');
      sheet = spreadsheet.insertSheet(SHEET_NAME);
    }

    // Add headers
    const headers = [
      'Username',
      'Password',
      'Email',
      'Token',
      'Token Expiry',
      'Joined Date',
      'Commission Rate',
      'Total Earnings',
      'Total Leads',
      'Status',
      'Phone',
      'Company',
      'Bank Account'
    ];
    sheet.appendRow(headers);
    Logger.log('✓ Headers added');

    // Add sample affiliate
    sheet.appendRow([
      'demo_affiliate',
      'demo_password_123',
      'affiliate@example.com',
      '',
      '',
      new Date().toISOString(),
      0.15,
      0,
      0,
      'active',
      '',
      '',
      ''
    ]);
    Logger.log('✓ Demo affiliate added');

    // Format headers
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#4285F4');
    headerRange.setFontColor('white');
    Logger.log('✓ Headers formatted');

    // Set column widths
    sheet.setColumnWidth(1, 150); // Username
    sheet.setColumnWidth(2, 200); // Password
    sheet.setColumnWidth(3, 200); // Email
    sheet.setColumnWidth(4, 150); // Token
    sheet.setColumnWidth(5, 150); // Token Expiry
    Logger.log('✓ Column widths set');

    // Create Leads sheet
    let leadsSheet = spreadsheet.getSheetByName(LEADS_SHEET_NAME);
    if (leadsSheet) {
      Logger.log('✓ Leads sheet already exists, clearing it...');
      leadsSheet.clear();
    } else {
      Logger.log('✓ Creating new Leads sheet...');
      leadsSheet = spreadsheet.insertSheet(LEADS_SHEET_NAME);
    }

    // Add leads headers
    const leadsHeaders = [
      'Lead ID',
      'Affiliate Username',
      'Lead Name',
      'Lead Email',
      'Lead Phone',
      'Status',
      'Created Date',
      'Conversion Value',
      'Notes',
      'Purchase ID',
      'Payment Method',
      'Payment Email',
      'Status Updated Date'
    ];
    leadsSheet.appendRow(leadsHeaders);
    Logger.log('✓ Leads sheet created with headers');

    // Format leads headers
    const leadsHeaderRange = leadsSheet.getRange(1, 1, 1, leadsHeaders.length);
    leadsHeaderRange.setFontWeight('bold');
    leadsHeaderRange.setBackground('#10B981');
    leadsHeaderRange.setFontColor('white');
    Logger.log('✓ Leads headers formatted');

    Logger.log('\n========== SETUP COMPLETE ==========');
    Logger.log('Sheet ID: ' + sheetId);
    Logger.log('Admin Token: ' + adminToken);
    Logger.log('Demo User: demo_affiliate');
    Logger.log('Demo Password: demo_password_123');
    Logger.log('=====================================\n');
    
  } catch (error) {
    Logger.log('ERROR during setup: ' + error.message);
    Logger.log('Stack: ' + error.stack);
    throw error;
  }
}
