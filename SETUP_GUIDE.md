# Quick Setup Guide for Enterprise Onchain

I've set up almost everything for you! You just need to do **ONE THING**, then run **TWO COMMANDS**.

## What I've Already Done ✅

- ✅ Installed all dependencies
- ✅ Generated your secret key
- ✅ Created a seed script with 5 sample articles
- ✅ Configured all the files

## What You Need to Do

### Step 1: Get a Database (5 minutes)

Go to **Supabase** (easiest option):

1. Visit: https://supabase.com
2. Click "Start your project"
3. Sign up with GitHub or Google
4. Click "New Project"
5. Name it: `enterprise-onchain`
6. Choose a password (save it somewhere)
7. Wait 2 minutes for setup
8. Go to: **Settings → Database** (in left sidebar)
9. Scroll down to "Connection string"
10. Click "URI" tab
11. Copy the entire string (starts with `postgresql://`)

**Example:** `postgresql://postgres.xxx:password@aws-0-us-east-1.pooler.supabase.com:5432/postgres`

### Step 2: Update .env File (1 minute)

1. Open the file `.env` in your project folder
2. Find this line:
   ```
   DATABASE_URL="postgresql://localhost:5432/enterprise_onchain"
   ```
3. Replace it with the connection string you copied from Supabase
4. Save the file

### Step 3: Run Setup Commands (2 minutes)

Open your terminal in the project folder and run:

```bash
npm run setup
```

This single command will:
- Generate Prisma client
- Create all database tables
- Add 5 sample articles
- Create an admin user

You should see:
```
✓ Created user: admin@enterpriseonchain.com
✓ Created article: Institutional Adoption Accelerates in 2024
✓ Created article: Real-World Asset Tokenization: Q4 2024 Report
✓ Created article: Podcast: Building Institutional Infrastructure with Circle
✓ Created article: Job: Senior Blockchain Engineer - JPMorgan Onyx
✓ Created article: Deep Dive: Layer 2 Solutions for Institutional Use Cases
✅ Database seeded successfully!
```

### Step 4: Start Your Website (30 seconds)

```bash
npm run dev
```

Then open your browser to: **http://localhost:3000**

## What You'll See

- **Homepage**: New modern homepage with sidebar menu
- **Blog**: http://localhost:3000/blog - 5 articles ready to read
- **Content Gate**: Click any article to see the signup wall in action

## Sample Articles Included

1. **News**: Institutional Adoption Accelerates in 2024 (Featured)
2. **Insight**: Real-World Asset Tokenization Report (Featured)
3. **Podcast**: Building Institutional Infrastructure with Circle
4. **Jobs**: Senior Blockchain Engineer at JPMorgan
5. **Deep Dive**: Layer 2 Solutions for Institutions

All articles have the content gate enabled - first 4 paragraphs visible, rest requires signup!

## Helpful Commands

```bash
npm run dev          # Start development server
npm run db:studio    # Open visual database editor
npm run db:seed      # Re-run seed script (adds more articles)
```

## Need Help?

If you get an error:
1. Make sure you pasted the FULL database URL in .env
2. Make sure the URL includes your password
3. Try running `npm run setup` again

That's it! Let me know when you're ready and I'll help with next steps.
