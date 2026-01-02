# Affiliate Management System - Setup & Deployment Guide

## Overview

This is a complete affiliate management system with:
- **Google Apps Script backend** for data storage and authentication
- **Google Sheets** as the database (Users + Leads sheets)
- **Next.js frontend** with login, profile management, and lead tracking
- **Email notifications** for all key actions
- **REST API** for seamless integration

---

## 📋 Architecture

```
┌─────────────────────────────────────────────────────────┐
│  Next.js App (app/(dashboard)/affiliate/)               │
│  - Login Form                                           │
│  - Profile Form (Bank Details)                          │
│  - Lead Form & List                                     │
└─────────────────┬───────────────────────────────────────┘
                  │ HTTPS POST Requests
                  ↓
┌─────────────────────────────────────────────────────────┐
│  Google Apps Script Web App                             │
│  - REST API Endpoints (login, leads, profile)           │
│  - Token Management                                     │
│  - Email Notifications                                  │
└─────────────────┬───────────────────────────────────────┘
                  │ Read/Write
                  ↓
┌─────────────────────────────────────────────────────────┐
│  Google Sheet (Database)                                │
│  - Users Sheet (credentials, bank details)              │
│  - Leads Sheet (hospitals, payment tracking)            │
└─────────────────────────────────────────────────────────┘
```

---

## 🚀 Step-by-Step Deployment

### **Step 1: Set Up Google Apps Script**

1. Go to [https://script.google.com](https://script.google.com)
2. Click **"New project"**
3. Copy the entire code from `APPS_SCRIPT.gs` file and paste it into the editor
4. In the toolbar, go to **Project Settings** and note down the **Script ID**
5. Click **"Save"** (Ctrl+S)

### **Step 2: Deploy as Web App**

1. Click **"Deploy"** → **"New deployment"**
2. Select **Type**: "Web app"
3. Set **Execute as**: Your Google account email
4. Set **Who has access**: "Anyone"
5. Click **"Deploy"**
6. You'll see a dialog with the **Deployment URL** — copy it
7. Example URL: `https://script.googleapis.com/macros/d/{DEPLOYMENT_ID}/userweb`

### **Step 3: Add Users to Google Sheet**

The Google Sheet automatically creates two tabs when you first run a function. To add users manually:

1. Open your Google Sheet
2. Go to the **"Users"** tab
3. Add rows with this format:

| Username | Password | Email | BankHolderName | BankName | BankAccountNo | IFSC | CreatedAt | LastLogin |
|----------|----------|-------|----------------|----------|---------------|------|-----------|-----------|
| john_affiliate | pass123 | john@example.com | John Doe | SBI | 1234567890123456 | SBIN0001234 | 2025-01-01 | |
| alice_partner | secure456 | alice@example.com | Alice Smith | HDFC | 9876543210987654 | HDFC0005678 | 2025-01-01 | |

> ⚠️ **Security Note**: Passwords are stored in plaintext. For production, implement hashing in the Apps Script (use `Utilities.computeDigest()`)

### **Step 4: Configure Environment Variables**

In your Next.js project, create a `.env.local` file:

```bash
# .env.local
NEXT_PUBLIC_APPS_SCRIPT_URL=https://script.googleapis.com/macros/d/{YOUR_DEPLOYMENT_ID}/userweb
```

Replace `{YOUR_DEPLOYMENT_ID}` with the deployment ID from Step 2.

### **Step 5: Update Apps Script Configuration**

1. Go back to [script.google.com](https://script.google.com)
2. Open your project
3. Update the `SHEET_ID` constant at the top of the script:

```javascript
const SHEET_ID = "1dO3ryVa2HJ8ljkcZ2vV5HaJEhUKcGd6UlY4eKqauxVM"; // Your sheet ID
```

Your sheet ID is in the URL: `https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit`

4. Click **"Save"**

### **Step 6: Test the Connection**

1. Go to `http://localhost:3000/dashboard/affiliate` (after running `npm run dev`)
2. Try logging in with one of your test users
3. Check the Google Sheet for `LastLogin` updates
4. Check your email inbox for login notification

---

## 📚 API Endpoints

All endpoints are called via POST to the Apps Script URL with JSON payloads.

### **Login**
```json
{
  "action": "login",
  "username": "john_affiliate",
  "password": "pass123"
}
```

**Response:**
```json
{
  "success": true,
  "token": "uuid-token-string",
  "username": "john_affiliate",
  "email": "john@example.com"
}
```

---

### **Get Profile**
```json
{
  "action": "getProfile",
  "token": "uuid-token-string"
}
```

**Response:**
```json
{
  "success": true,
  "profile": {
    "username": "john_affiliate",
    "email": "john@example.com",
    "bankHolderName": "John Doe",
    "bankName": "SBI",
    "bankAccountNo": "1234567890123456",
    "ifsc": "SBIN0001234",
    "createdAt": "2025-01-01",
    "lastLogin": "2025-01-05 14:30:45"
  }
}
```

---

### **Update Profile**
```json
{
  "action": "updateProfile",
  "token": "uuid-token-string",
  "bankHolderName": "John Doe Updated",
  "bankName": "HDFC Bank",
  "bankAccountNo": "9876543210987654",
  "ifsc": "HDFC0005678"
}
```

---

### **Create Lead**
```json
{
  "action": "createLead",
  "token": "uuid-token-string",
  "hospitalName": "City Medical Center",
  "address": "123 Main St, New York, NY 10001"
}
```

**Response:**
```json
{
  "success": true,
  "leadID": "LEAD-1704370245123",
  "message": "Lead created successfully"
}
```

---

### **List Leads**
```json
{
  "action": "listLeads",
  "token": "uuid-token-string"
}
```

**Response:**
```json
{
  "success": true,
  "leads": [
    {
      "leadID": "LEAD-1704370245123",
      "hospitalName": "City Medical Center",
      "address": "123 Main St, New York, NY 10001",
      "status": "Pending",
      "paymentMethod": "",
      "orderID": "",
      "purchaseEmail": "",
      "amount": "",
      "createdAt": "2025-01-05",
      "updatedAt": "2025-01-05"
    }
  ]
}
```

---

### **Update Lead Status**
```json
{
  "action": "updateLeadStatus",
  "token": "uuid-token-string",
  "leadID": "LEAD-1704370245123",
  "status": "Payment Done",
  "paymentMethod": "Direct",
  "orderID": "ORD-2025-001",
  "purchaseEmail": "hospital@example.com",
  "amount": "50000"
}
```

---

## 📧 Email Notifications

The system automatically sends emails for:

1. **Login** → User email address
   - Subject: "Login Notification"
   - Body: "User {username} logged in at {timestamp}"

2. **Lead Created** → User email address
   - Subject: "Lead Created"
   - Body: "New lead created: {hospital_name} at {address}"

3. **Lead Updated** → User email address
   - Subject: "Lead Updated"
   - Body: "Lead {lead_id} status updated to: {status}"

4. **Profile Updated** → User email address
   - Subject: "Profile Updated"
   - Body: "Your bank details have been updated."

> ⚠️ **Note**: Emails are sent by the Google Apps Script account. Make sure the account has email sending enabled.

---

## 🔧 Files Created

```
lib/
  └── affiliation.ts          # API wrapper functions

app/(dashboard)/affiliate/
  ├── page.tsx                # Main dashboard
  ├── login.tsx               # Login form
  ├── profile.tsx             # Profile & bank details form
  ├── lead-form.tsx           # Create lead form
  ├── leads-list.tsx          # Display user's leads
  └── lead-status-modal.tsx   # Update lead modal

public/
  └── APPS_SCRIPT.gs          # Google Apps Script code
```

---

## 🛡️ Security Considerations

### Current Implementation (Development)
- ✅ Tokens stored in-memory (simple)
- ✅ Passwords in plaintext (not recommended for production)
- ✅ No rate limiting
- ⚠️ Anyone with the Apps Script URL can access

### For Production, Consider:
1. **Hash Passwords** - Use `Utilities.computeDigest()` in Apps Script
2. **HTTPS Only** - Ensure all communication is encrypted
3. **Rate Limiting** - Add throttling to prevent brute force
4. **CORS** - Restrict access to your domain only
5. **Token Expiry** - Add expiration times to tokens
6. **IP Whitelisting** - Limit who can call the API
7. **Database** - Move from Google Sheets to Firestore/PostgreSQL

---

## 🧪 Testing Checklist

- [ ] Users can login with valid credentials
- [ ] Invalid credentials show error message
- [ ] Profile page loads and displays bank details
- [ ] Users can update bank details
- [ ] Users receive email on profile update
- [ ] Users can create new leads
- [ ] Users receive email on lead creation
- [ ] Users can see their leads in the list
- [ ] Users can update lead status/payment info
- [ ] Users receive email on lead update
- [ ] Users can logout
- [ ] Logout clears token and redirects to login

---

## 📞 Troubleshooting

### Issue: "Apps Script URL not configured"
**Solution**: Add `NEXT_PUBLIC_APPS_SCRIPT_URL` to `.env.local` and restart dev server

### Issue: CORS errors in browser console
**Solution**: The Apps Script web app should be set to "Anyone" access. Redeploy if needed.

### Issue: Emails not sending
**Solution**: 
- Check that the email addresses in the Users sheet are valid
- The Apps Script account must have Gmail enabled
- Check Apps Script Executions log for errors

### Issue: Changes not appearing in Leads
**Solution**: 
- Refresh the page after updating a lead
- Check that the token is still valid (re-login if needed)

---

## 🚦 Next Steps

1. ✅ Deploy Apps Script
2. ✅ Set environment variables
3. ✅ Add test users to Google Sheet
4. ✅ Test affiliate dashboard at `/dashboard/affiliate`
5. 🔄 Monitor email notifications
6. 📊 Add analytics/reporting
7. 🔐 Implement production security measures

---

**Questions?** Check the Apps Script Executions log (View → Executions) for detailed error messages.
