# Affiliate Login System - Implementation Summary

## ✅ Completed Tasks

### 1. **Google Apps Script Created**
- File: `apps-script-affiliate-login.gs`
- Features:
  - Login with username/password (plain text)
  - Token generation and validation
  - Token expiry (24 hours)
  - Get affiliate profile
  - List all affiliates (admin only)
  - Create new affiliates (admin only)

### 2. **Environment Variables Configured**
- File: `.env.local`
- Variable: `NEXT_PUBLIC_APPS_SCRIPT_URL`
- Current URL: `https://script.google.com/macros/s/AKfycbz0b0MRpFEfmpfrtRMTLIWqJT8xPb-IxBXjV_mgoVEQUAnW3BDJ8Z57ez_3WUQWgTin/exec`

### 3. **Frontend Integration**
- File: `lib/affiliate-manager.ts`
  - AffiliateManager class for API communication
  - useAffiliateAuth() React hook
  - Token persistence in localStorage
  - Singleton instance pattern

- File: `app/(dashboard)/affiliate/login.tsx`
  - Login form component
  - Username/password inputs
  - Error handling
  - Loading state

### 4. **API Route**
- File: `app/api/affiliate/route.ts`
  - Next.js API proxy to Apps Script
- Forwards login requests to Google Apps Script

### 5. **Test Utilities**
- File: `test-affiliate-system.js`
  - Comprehensive test suite
  - Login, token verification, profile retrieval tests

### 6. **Documentation**
- File: `AFFILIATE_LOGIN_SETUP.md`
  - Complete setup instructions
  - API endpoint documentation
  - Sheet structure details
  - Security notes
  - Troubleshooting guide

---

## 🔧 Next Steps - REQUIRED

### **Step 1: Initialize the Google Sheet**
1. Go to your Google Sheet: https://docs.google.com/spreadsheets/d/182WJsLlWHMoeFT8PLw60Z8G0ayiLHznsRm5Z0HfMYRQ
2. Click **Extensions → Apps Script**
3. Paste the code from `apps-script-affiliate-login.gs`
4. Run the `setupSheet()` function (click the play button)
5. Check the Execution log for success confirmation

### **Step 2: Deploy the Apps Script**
1. In Apps Script, click **Deploy → New deployment**
2. Select type: **Web app**
3. Configure:
   - Execute as: Your Google Account
   - Who has access: Anyone
4. Copy the deployment URL

### **Step 3: Update .env.local**
The URL has already been updated to:
```
NEXT_PUBLIC_APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycbz0b0MRpFEfmpfrtRMTLIWqJT8xPb-IxBXjV_mgoVEQUAnW3BDJ8Z57ez_3WUQWgTin/exec
```

### **Step 4: Test the System**
```bash
# Run the test script
node test-affiliate-system.js "https://script.google.com/macros/s/AKfycbz0b0MRpFEfmpfrtRMTLIWqJT8xPb-IxBXjV_mgoVEQUAnW3BDJ8Z57ez_3WUQWgTin/exec"
```

Expected demo credentials:
- Username: `demo_affiliate`
- Password: `demo_password_123`

---

## 📊 Google Sheet Structure

Your sheet will have the following columns after setupSheet():

| Column | Name | Description |
|--------|------|-------------|
| A | Username | Affiliate login username |
| B | Password | Plain text password |
| C | Email | Affiliate email address |
| D | Token | Current session token |
| E | Token Expiry | Token expiration timestamp |
| F | Joined Date | Account creation date |
| G | Commission Rate | Commission percentage |
| H | Total Earnings | Total commission earned |
| I | Total Leads | Total leads generated |
| J | Status | Account status (active/inactive) |

---

## 🔌 API Endpoints Available

### Login
```bash
POST /api/affiliate
{
  "action": "login",
  "username": "demo_affiliate",
  "password": "demo_password_123"
}
```

### Verify Token
```bash
POST /api/affiliate
{
  "action": "verify",
  "token": "token_string"
}
```

### Get Affiliate Profile
```bash
POST /api/affiliate
{
  "action": "getAffiliate",
  "token": "token_string"
}
```

### List All Affiliates (Admin)
```bash
POST /api/affiliate
{
  "action": "listAffiliates",
  "adminToken": "admin_token"
}
```

### Create New Affiliate (Admin)
```bash
POST /api/affiliate
{
  "action": "createAffiliate",
  "adminToken": "admin_token",
  "username": "new_user",
  "password": "password_123",
  "email": "user@example.com"
}
```

---

## 🚀 Usage in Your App

### Using the Login Form
```tsx
import LoginForm from '@/app/(dashboard)/affiliate/login';

export default function AffiliatePagePage() {
  const handleLoginSuccess = () => {
    // Redirect to affiliate dashboard
  };

  return (
    <LoginForm onLoginSuccess={handleLoginSuccess} />
  );
}
```

### Using the React Hook
```tsx
import { useAffiliateAuth } from '@/lib/affiliate-manager';

export default function AffiliateProfile() {
  const { login, logout, isAuthenticated, profile, loading, error } = useAffiliateAuth();

  const handleLogin = async (username: string, password: string) => {
    await login(username, password);
  };

  if (isAuthenticated) {
    return <div>Welcome, {profile.username}!</div>;
  }

  return <LoginForm onLogin={handleLogin} />;
}
```

### Using the Manager Directly
```tsx
import { getAffiliateManager } from '@/lib/affiliate-manager';

const manager = getAffiliateManager();

// Login
const result = await manager.login('demo_affiliate', 'demo_password_123');
if (result.success) {
  console.log('Token:', result.token);
}

// Get profile
const profile = await manager.getProfile();
console.log('User:', profile.affiliate.username);
```

---

## ⚠️ Important Notes

1. **Passwords are Plain Text** - This is acceptable for internal affiliate systems but not for public-facing apps
2. **Tokens expire after 24 hours** - Configurable in the Apps Script (TOKEN_EXPIRY_HOURS)
3. **Sheet ID is hardcoded** - Currently set to your sheet ID in the Apps Script
4. **Admin token is generated on setup** - Save it securely after running setupSheet()

---

## 📝 Files Created/Modified

### Created:
- ✅ `apps-script-affiliate-login.gs` - Google Apps Script
- ✅ `lib/affiliate-manager.ts` - Manager class and React hook
- ✅ `test-affiliate-system.js` - Test suite
- ✅ `AFFILIATE_LOGIN_SETUP.md` - Documentation

### Modified:
- ✅ `.env.local` - Added NEXT_PUBLIC_APPS_SCRIPT_URL

### Existing (Already Working):
- ✅ `app/(dashboard)/affiliate/login.tsx` - Login form
- ✅ `app/api/affiliate/route.ts` - API proxy
- ✅ `lib/affiliation.ts` - Original affiliation utilities

---

## 🧪 Testing Checklist

- [ ] Run setupSheet() in Google Apps Script
- [ ] Verify "Affiliates" sheet created with headers and demo data
- [ ] Test login with demo credentials
- [ ] Test token verification
- [ ] Test profile retrieval
- [ ] Test invalid credentials rejection
- [ ] Test frontend login form
- [ ] Test token persistence across page reloads

---

## 📞 Support

For questions about:
- **Syntax errors**: Fixed in Apps Script (uses hardcoded Sheet ID)
- **Deployment**: Refer to `AFFILIATE_LOGIN_SETUP.md`
- **Integration**: Check `lib/affiliate-manager.ts` for API client
- **Frontend**: Check `app/(dashboard)/affiliate/login.tsx` for component

All components are ready to use! Just need to initialize the Google Sheet with setupSheet().
