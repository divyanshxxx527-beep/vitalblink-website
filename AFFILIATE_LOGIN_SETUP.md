# Affiliate Login - Google Apps Script Setup Guide

## Overview

This system manages affiliate authentication using Google Apps Script as a backend. Affiliate credentials (username and password in plain text) are stored in a Google Sheet and accessed via the Apps Script web app.

## Files

1. **apps-script-affiliate-login.gs** - The main Google Apps Script code
2. **app/api/affiliate/route.ts** - Next.js API proxy that forwards requests to Apps Script
3. **lib/affiliation.ts** - Frontend library for making API calls
4. **app/(dashboard)/affiliate/login.tsx** - Affiliate login form component

## Setup Instructions

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it something like "Affiliate Credentials"
4. Copy the Spreadsheet ID from the URL:
   ```
   https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit
   ```

### Step 2: Set Up Google Apps Script

1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete any existing code
3. Paste the entire content from `apps-script-affiliate-login.gs`
4. Save the project (name it "Affiliate Login API")

### Step 3: Initialize the Sheet

1. In the Apps Script editor, run the `setupSheet()` function:
   - Click the play button (▶) next to `setupSheet`
   - Grant permissions when prompted
   - This will:
     - Create the "Affiliates" sheet with headers
     - Add sample affiliate data
     - Generate and store your Admin Token
     - Store the Sheet ID in Script Properties

2. After running, check the execution logs for your **Admin Token** - save this securely

### Step 4: Deploy as Web App

1. In Apps Script, click **Deploy → New deployment**
2. Select type: **Web app**
3. Configure:
   - Execute as: **Your Google Account**
   - Who has access: **Anyone**
4. Click **Deploy**
5. Copy the deployment URL (it will be something like):
   ```
   https://script.google.com/macros/d/{DEPLOYMENT_ID}/usercontent
   ```

### Step 5: Set Environment Variables

Update your `.env.local` file:

```env
# Google Apps Script URL for affiliate authentication
NEXT_PUBLIC_APPS_SCRIPT_URL=https://script.google.com/macros/d/{DEPLOYMENT_ID}/usercontent

# Sheet ID (optional - stored in script properties)
SHEET_ID={YOUR_SPREADSHEET_ID}

# Admin token for managing affiliates (from script execution log)
ADMIN_TOKEN={YOUR_ADMIN_TOKEN}
```

### Step 6: Test the Connection

Use the existing test endpoint or create a simple test:

```bash
curl -X POST https://script.google.com/macros/d/{DEPLOYMENT_ID}/usercontent \
  -H "Content-Type: application/json" \
  -d '{
    "action": "login",
    "username": "demo_affiliate",
    "password": "demo_password_123"
  }'
```

Expected response:
```json
{
  "success": true,
  "token": "abcdef123456...",
  "expiryTime": "2025-12-30T12:00:00.000Z",
  "affiliate": {
    "username": "demo_affiliate",
    "email": "affiliate@example.com"
  }
}
```

## API Endpoints

### 1. Login
Authenticate affiliate with username and password.

**Request:**
```json
{
  "action": "login",
  "username": "affiliate_username",
  "password": "affiliate_password"
}
```

**Response:**
```json
{
  "success": true,
  "token": "token_string",
  "expiryTime": "ISO_date_string",
  "affiliate": {
    "username": "affiliate_username",
    "email": "affiliate@example.com"
  }
}
```

### 2. Verify Token
Verify if a token is valid and not expired.

**Request:**
```json
{
  "action": "verify",
  "token": "affiliate_token"
}
```

**Response:**
```json
{
  "success": true,
  "affiliate": {
    "username": "affiliate_username",
    "email": "affiliate@example.com"
  },
  "tokenExpiry": "ISO_date_string"
}
```

### 3. Get Affiliate Data
Retrieve complete affiliate profile (requires valid token).

**Request:**
```json
{
  "action": "getAffiliate",
  "token": "affiliate_token"
}
```

**Response:**
```json
{
  "success": true,
  "affiliate": {
    "username": "affiliate_username",
    "email": "affiliate@example.com",
    "joinedDate": "ISO_date_string",
    "commissionRate": 0.15,
    "totalEarnings": 1500.00,
    "totalLeads": 25,
    "status": "active"
  }
}
```

### 4. List All Affiliates (Admin Only)
Get list of all affiliates (requires admin token).

**Request:**
```json
{
  "action": "listAffiliates",
  "adminToken": "admin_token"
}
```

**Response:**
```json
{
  "success": true,
  "count": 5,
  "affiliates": [
    {
      "username": "affiliate1",
      "email": "affiliate1@example.com",
      "status": "active",
      "totalEarnings": 2000,
      "totalLeads": 30
    }
  ]
}
```

### 5. Create New Affiliate (Admin Only)
Add a new affiliate to the system.

**Request:**
```json
{
  "action": "createAffiliate",
  "adminToken": "admin_token",
  "username": "new_affiliate",
  "password": "secure_password_123",
  "email": "newaffiliate@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Affiliate created successfully",
  "affiliate": {
    "username": "new_affiliate",
    "email": "newaffiliate@example.com",
    "commissionRate": 0.15,
    "status": "active"
  }
}
```

## Google Sheet Structure

The "Affiliates" sheet contains the following columns:

| Column | Name | Description |
|--------|------|-------------|
| A | Username | Affiliate login username |
| B | Password | Plain text password |
| C | Email | Affiliate email address |
| D | Token | Current session token |
| E | Token Expiry | Token expiration timestamp |
| F | Joined Date | Account creation date |
| G | Commission Rate | Commission percentage (e.g., 0.15 = 15%) |
| H | Total Earnings | Total commission earned |
| I | Total Leads | Total leads generated |
| J | Status | Account status (active/inactive) |

## Security Notes

⚠️ **Important Security Considerations:**

1. **Plain Text Passwords**: Passwords are stored in plain text in the Google Sheet. This is acceptable for internal affiliate systems but consider these mitigations:
   - Restrict Google Sheet access to authorized users only
   - Use Google Workspace security features
   - Regularly audit access logs
   - Consider encrypting the sheet content

2. **Token Security**:
   - Tokens expire after 24 hours (configurable)
   - Tokens are randomly generated (32 characters)
   - Tokens are stored in the sheet and validated on each request

3. **Admin Token**:
   - Keep the admin token secure (generated on first setup)
   - Don't share it in code or commits
   - Store it in environment variables only

4. **CORS & Access**:
   - The web app is deployed with "Anyone can access"
   - Add additional validation on your Next.js API route if needed
   - Consider adding IP whitelisting

## Troubleshooting

### Issue: "SHEET_ID not configured"
- Make sure you ran the `setupSheet()` function first
- Check that Script Properties contain SHEET_ID

### Issue: "Unauthorized" for admin operations
- Verify the admin token is correct
- Check it was properly stored in Script Properties
- Re-run `setupSheet()` to generate a new admin token

### Issue: Token always returns as invalid
- Check the token hasn't expired (24 hour expiry)
- Ensure the token is being passed correctly
- Verify the token in the sheet matches what's being verified

### Issue: CORS errors in browser
- This is expected - always use the Next.js API route `/api/affiliate`
- Don't call the Apps Script directly from the frontend
- The API route handles CORS properly

## Managing Affiliates

### Adding New Affiliates

**Option 1: Via API (Admin)**
```javascript
// From your backend
await fetch('/api/affiliate', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    action: 'createAffiliate',
    adminToken: process.env.ADMIN_TOKEN,
    username: 'new_user',
    password: 'their_password_123',
    email: 'new@example.com'
  })
});
```

**Option 2: Manually in Google Sheet**
1. Open the Google Sheet
2. Add a new row with:
   - Column A: Username
   - Column B: Password (plain text)
   - Column C: Email
   - Leave D, E empty
   - Column F: Current date
   - Column G: 0.15 (or desired commission rate)
   - Column H: 0
   - Column I: 0
   - Column J: active

### Updating Affiliate Data

Currently, you can update directly in the Google Sheet:
- Change password in Column B
- Update email in Column C
- Update commission rate in Column G
- Update status in Column J

Or create a new API endpoint for editing.

### Deactivating Affiliates

Set Column J (Status) to "inactive" for the affiliate.

## Advanced Features

### Customizing Token Expiry

Edit this line in the Apps Script:
```javascript
const TOKEN_EXPIRY_HOURS = 24;
```

### Adding More Fields

To add fields (like "phone number", "company name", etc.):

1. Add a new column in the Google Sheet
2. Update the `handleCreateAffiliate()` function to include the new field
3. Update `handleGetAffiliate()` to return the new field

### Enhancing Security

For production use, consider:

1. **Encrypt Passwords**:
   ```javascript
   // Use CryptoJS library in Apps Script
   const encrypted = CryptoJS.AES.encrypt(password, SECRET_KEY).toString();
   ```

2. **Add Rate Limiting**:
   - Track login attempts per IP/username
   - Lock account after failed attempts

3. **Email Verification**:
   - Send verification emails on account creation
   - Store verification status in sheet

4. **Two-Factor Authentication**:
   - Add OTP verification step
   - Store OTP in sheet with expiry

## Support

For issues or questions about:
- **Frontend Integration**: Check `lib/affiliation.ts` and `app/(dashboard)/affiliate/login.tsx`
- **API Routing**: Check `app/api/affiliate/route.ts`
- **Apps Script Deployment**: Refer to [Google Apps Script Docs](https://developers.google.com/apps-script)
- **Google Sheets API**: Refer to [Google Sheets API Docs](https://developers.google.com/sheets/api)
