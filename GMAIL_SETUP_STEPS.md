# Gmail Setup - Use Your Password Safely! 🔐

**Important:** Never put your real Gmail password in code! Gmail requires an "App Password" for security.

## Step 1: Create Gmail App Password

1. Go to: **https://myaccount.google.com/apppasswords**
2. Sign in with: `mohammadsameers766@gmail.com`
3. Password: `sameer@1234567899`
4. Click **"Security"** in the left menu
5. Under **"2-Step Verification"**, click **"App passwords"**
6. Select **"Mail"** and **"Other (Custom name)"**
7. Enter name: **"Contact Form"**
8. Click **"Generate"**
9. **Copy the 16-digit password** (like: `abcd efgh ijkl mnop`)

## Step 2: Update .env File

Open the `.env` file in your project and replace `your_app_password_here` with your 16-digit app password:

```env
GMAIL_APP_PASSWORD=abcdefghijklmnop
GMAIL_USER=mohammadsameers766@gmail.com
```

## Step 3: Test It!

```bash
pnpm dev
```

Now when someone fills out your contact form, you'll get an email at `mohammadsameers766@gmail.com`!

---

## Why App Password?
- Your real password (`sameer@1234567899`) won't work
- Gmail blocks regular passwords for security
- App passwords are safer and designed for apps
- You can revoke them anytime if needed

**The contact form is ready - just needs the app password!** 🚀
