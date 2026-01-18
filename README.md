# Enterprise Onchain

Institutional crypto intelligence newsletter and blog platform with gated content, authentication, and newsletter integration.

## Features

- 📰 **Blog/Newsletter Archive** - Categorized articles (News, Insights, Podcast, Jobs, Deep Dives)
- 🔒 **Content Gating** - Read wall with email signup for full article access
- 🔐 **Authentication** - NextAuth with magic links + Google OAuth
- 📧 **Newsletter Integration** - Syncs subscribers to Loops/Resend/ConvertKit
- 🎨 **Slide-out Sidebar** - Mobile-friendly navigation menu
- 📊 **Database** - Prisma with PostgreSQL for articles and subscribers

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Auth**: NextAuth.js
- **Database**: PostgreSQL + Prisma ORM
- **Styling**: Tailwind CSS
- **Newsletter**: Loops (configurable for Resend/ConvertKit)

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd enterprise-onchain
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and configure:
- `DATABASE_URL` - Your PostgreSQL connection string
- `NEXTAUTH_SECRET` - Generate with `openssl rand -base64 32`
- `NEXTAUTH_URL` - Your app URL (http://localhost:3000 for dev)
- Email provider settings (for magic links)
- Google OAuth credentials (optional)
- Newsletter platform API key (Loops/Resend/ConvertKit)

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## Project Structure

```
enterprise-onchain/
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/  # NextAuth endpoints
│   │   ├── subscribe/           # Newsletter signup API
│   │   └── webhooks/            # Newsletter platform webhooks
│   ├── blog/
│   │   ├── page.tsx             # Article listing
│   │   └── [slug]/page.tsx      # Individual articles
│   ├── login/                   # Login page
│   ├── subscribe/               # Subscribe page
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
├── components/
│   ├── auth/
│   │   └── SignupForm.tsx       # Email + Google signup
│   ├── blog/
│   │   ├── ArticleCard.tsx      # Article preview card
│   │   ├── ArticleList.tsx      # Grid of articles
│   │   └── ContentGate.tsx      # Read wall component
│   └── layout/
│       └── Sidebar.tsx          # Slide-out navigation
├── lib/
│   ├── prisma.ts                # Prisma client
│   ├── auth.ts                  # NextAuth config
│   └── newsletter.ts            # Newsletter platform sync
└── prisma/
    └── schema.prisma            # Database schema
```

## Creating Articles

### Option 1: Using Prisma Studio (Recommended for testing)

```bash
npx prisma studio
```

Navigate to the `Article` model and create a new article with:
- `slug`: URL-friendly identifier (e.g., "institutional-adoption-q4-2024")
- `title`: Article title
- `excerpt`: Short summary (for previews and SEO)
- `content`: Full HTML content
- `category`: One of: news, insight, podcast, jobs, deep-dive
- `isPublished`: true
- `publishedAt`: Current date
- `readTime`: Estimated minutes
- `authorId`: User ID (create a User first)

### Option 2: Admin Dashboard (Coming soon)

An admin interface for managing articles will be added in a future update.

## Newsletter Integration

The platform supports three newsletter providers:

### Loops (Recommended)
1. Sign up at [loops.so](https://loops.so)
2. Get API key from Settings → API
3. Add to `.env`: `LOOPS_API_KEY=your_key`
4. Configure webhook URL: `https://your-domain.com/api/webhooks/newsletter`

### Resend
1. Sign up at [resend.com](https://resend.com)
2. Verify your domain
3. Create an Audience
4. Add to `.env`: `RESEND_API_KEY=your_key`

### ConvertKit
1. Sign up at [convertkit.com](https://convertkit.com)
2. Create a Form
3. Add to `.env`: `CONVERTKIT_API_KEY` and `CONVERTKIT_FORM_ID`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Docker

```bash
docker build -t enterprise-onchain .
docker run -p 3000:3000 enterprise-onchain
```

## Environment Variables

See `.env.example` for all required environment variables.

**Critical variables:**
- `DATABASE_URL` - PostgreSQL connection
- `NEXTAUTH_SECRET` - Auth secret key
- `NEXTAUTH_URL` - Your app URL
- `LOOPS_API_KEY` - Newsletter platform key

## License

MIT

## Support

For issues or questions, contact support@enterpriseonchain.com