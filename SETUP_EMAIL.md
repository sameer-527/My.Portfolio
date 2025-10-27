# Setup Email in 2 Steps (No API keys needed!)

Your form is ready! Just follow these 2 steps:

## Step 1: Get a Gmail App Password

1. Go to **https://myaccount.google.com/apppasswords**
2. Sign in with your Gmail: `mohammadsameers766@gmail.com`
3. Select **"Mail"** and **"Other"**
4. Enter name: **"Contact Form"**
5. Click **"Generate"**
6. **Copy the 16-digit password** (looks like: `abcd efgh ijkl mnop`)

## Step 2: Create `.env` file

In your project root, create a file named `.env`:

```env
GMAIL_APP_PASSWORD=abcdefghijklmnop
```

(Replace with your 16-digit app password from Step 1)

## Done! 🎉

Restart your server:
```bash
pnpm dev
```

Now when someone fills out your contact form, you'll receive an email directly in your Gmail inbox!

---

## What if I don't want to set this up?

The form will still work! It will show the submission in your terminal/console. You just won't get emails yet. But no errors!



