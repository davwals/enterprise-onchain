# Enterprise Onchain - Next.js Application

Next.js 16 application with blog system, authentication, and content gating for Enterprise Onchain.

## Features

- ✅ **Next.js 16** with App Router and TypeScript
- ✅ **Authentication** with NextAuth.js (Google OAuth + Magic Link)
- ✅ **Blog System** with category filtering
- ✅ **Content Gating** - 30% preview for non-authenticated users
- ✅ **Prisma ORM** with PostgreSQL
- ✅ **Tailwind CSS** with dark mode support
- ✅ **Mobile Hamburger Menu** with sidebar navigation
- ✅ **Design Consistency** matching the original HTML website

## Project Structure

```
nextjs-app/
├── app/
│   ├── api/auth/[...nextauth]/   # NextAuth configuration
│   ├── blog/                      # Blog pages
│   │   ├── [slug]/                # Individual article pages
│   │   └── page.tsx               # Blog listing with categories
│   ├── login/                     # Login page
│   └── page.tsx                   # Homepage (TO DO: convert from HTML)
├── components/
│   └── layout/
│       └── Sidebar.tsx            # Mobile hamburger menu
├── lib/
│   └── prisma.ts                  # Prisma client singleton
├── prisma/
│   ├── schema.prisma              # Database schema
│   └── seed.ts                    # Sample data
└── .env                           # Environment variables
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Update `.env` with your configuration:

```bash
# Database (Supabase PostgreSQL)
DATABASE_URL="your-postgresql-connection-string"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-a-random-secret"

# Google OAuth (get from Google Cloud Console)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Email Provider (optional - for magic links)
EMAIL_SERVER="smtp://user:pass@smtp.example.com:587"
EMAIL_FROM="noreply@enterpriseonchain.com"
```

**Generate NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
```

### 3. Set Up Database

```bash
# Push schema to database
npx prisma db push

# Seed with sample articles
npx prisma db seed
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Database Schema

### User Model
- Authentication via NextAuth (Google OAuth or Email)
- Linked to articles as author

### Article Model
- `slug` - URL-friendly identifier
- `title` - Article title
- `excerpt` - Short description
- `content` - Full HTML content
- `category` - news, insight, podcast, jobs, deep-dive
- `isPublished` - Publication status
- `publishedAt` - Publication date

## Authentication Flow

1. **Unauthenticated Users:**
   - Can view blog listing
   - See 30% preview of articles
   - Prompted to sign in for full access

2. **Sign In Options:**
   - Google OAuth (instant)
   - Magic link via email (passwordless)

3. **Authenticated Users:**
   - Full access to all articles
   - Persistent sessions

## Adding New Articles

### Option 1: Via Prisma Studio
```bash
npx prisma studio
```

### Option 2: Direct Database Insert
```typescript
await prisma.article.create({
  data: {
    slug: 'article-slug',
    title: 'Article Title',
    excerpt: 'Short description...',
    content: '<p>Full HTML content...</p>',
    category: 'news',
    isPublished: true,
    publishedAt: new Date(),
    authorId: 'user-id',
  },
})
```

### Option 3: Admin Panel (Future Enhancement)
Consider building an admin dashboard at `/admin` for non-technical content management.

## Design System

All pages match the original HTML website design:

- **Colors:** Zinc palette (zinc-50 to zinc-950), Emerald accents
- **Typography:** Manrope font family
- **Dark Mode:** Supported throughout
- **Navigation:** Consistent 14px height (h-14)
- **Borders:** `border-zinc-200 dark:border-zinc-800`
- **Buttons:** Emerald-600 primary, zinc borders for secondary

## TODO: Homepage Conversion

The current `app/page.tsx` needs to be converted from the HTML version:

**Original:** `/index.html`
**Target:** `/nextjs-app/app/page.tsx`

**Key Requirements:**
1. Convert to React component with `'use client'` directive
2. Integrate `<Sidebar>` component with hamburger button
3. Replace Substack iframe with Next.js forms
4. Maintain all animations and interactions
5. Keep dark mode toggle functionality

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Environment Variables for Production

```bash
DATABASE_URL="production-postgresql-url"
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="production-secret"
GOOGLE_CLIENT_ID="production-google-id"
GOOGLE_CLIENT_SECRET="production-google-secret"
```

## Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Prisma commands
npx prisma studio        # Open database GUI
npx prisma db push       # Push schema changes
npx prisma db seed       # Seed database
npx prisma generate      # Generate Prisma Client
```

## Category System

Articles support the following categories:
- `news` - Breaking news and announcements
- `insight` - Weekly insights and analysis
- `podcast` - Podcast episodes and interviews
- `jobs` - Job postings and opportunities
- `deep-dive` - In-depth technical analysis

Filter by category: `/blog?category=news`

## Mobile Responsiveness

- Hamburger menu appears on screens < 768px (md breakpoint)
- Sidebar slides in from left with backdrop
- Touch-friendly button sizes (min 44x44px)
- Responsive typography and spacing

## Security Considerations

- **Never commit `.env`** - Already in `.gitignore`
- **Use strong NEXTAUTH_SECRET** - Generate with openssl
- **Configure OAuth redirects** - Whitelist production URLs
- **Sanitize HTML content** - Use DOMPurify if accepting user HTML
- **Rate limit auth endpoints** - Prevent brute force attacks

## Support

For questions or issues with the Next.js implementation:
1. Check this README
2. Review the original requirements in commit messages
3. Reference the HTML files in parent directory for design patterns

## License

Proprietary - Enterprise Onchain
