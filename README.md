# Pixel Space - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Supabase. Features a clean design with contact form functionality and email notifications.

## 🚀 Live Demo

Visit the live website: [Your Portfolio URL]

## ✨ Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Contact Form**: Functional contact form with email notifications
- **Email Integration**: Automated email sending via Resend API
- **Database Storage**: Contact form submissions stored in Supabase
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Modern styling with utility-first CSS framework

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router 6** - Client-side routing
- **Radix UI** - Accessible component primitives

### Backend
- **Supabase** - Backend-as-a-Service
- **Edge Functions** - Serverless functions for email handling
- **PostgreSQL** - Database for storing contact form data

### Email Service
- **Resend** - Modern email API for transactional emails

## 📁 Project Structure

```
pixel-space/
├── client/                   # React frontend
│   ├── pages/               # Route components
│   │   ├── Index.tsx        # Home page
│   │   ├── Contact.tsx      # Contact form page
│   │   └── NotFound.tsx     # 404 page
│   ├── components/          # Reusable components
│   │   ├── site/            # Site-specific components
│   │   └── ui/              # UI component library
│   ├── lib/                 # Utilities and configurations
│   └── global.css           # Global styles and Tailwind config
├── server/                  # Express server (minimal usage)
├── supabase/               # Supabase configuration
│   └── functions/          # Edge functions
│       └── resend-email/    # Email sending function
├── shared/                 # Shared types and interfaces
└── public/                 # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- Supabase account
- Resend account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/pixel-space.git
   cd pixel-space
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up Supabase**
   - Create a new Supabase project
   - Get your project URL and anon key
   - Update `client/lib/supabaseClient.ts` with your credentials

4. **Set up Resend**
   - Create a Resend account
   - Get your API key
   - Add it to your Supabase Edge Function environment variables

5. **Set up the database**
   Run this SQL in your Supabase SQL editor:
   ```sql
   CREATE TABLE IF NOT EXISTS public.user_messages (
     id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
     name text NOT NULL,
     email text NOT NULL,
     description text NOT NULL,
     created_at timestamptz NOT NULL DEFAULT now()
   );
   
   ALTER TABLE public.user_messages ENABLE ROW LEVEL SECURITY;
   CREATE POLICY "Allow insert for anon" ON public.user_messages
     FOR INSERT TO anon WITH CHECK (true);
   ```

6. **Deploy Edge Function**
   ```bash
   npx supabase functions deploy resend-email
   ```

7. **Start development server**
   ```bash
   pnpm dev
   ```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Supabase Edge Function Environment

Add these environment variables in your Supabase dashboard:
- `RESEND_API_KEY` - Your Resend API key

## 📝 Customization

### Personal Information

Update your personal details in `client/pages/Index.tsx`:

```typescript
const email = "your-email@example.com";
const phone = "+1234567890";
```

### Projects

Add your projects in the `projects` array in `client/pages/Index.tsx`:

```typescript
const projects = [
  {
    name: "Your Project",
    stack: ["React", "TypeScript"],
    description: "Project description here"
  }
];
```

### Skills

Update your technical skills in `client/pages/Index.tsx`:

```typescript
const technical = [
  "React",
  "TypeScript", 
  "Node.js",
  // Add your skills
];
```

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Netlify

1. Connect your GitHub repository to Netlify
2. Add environment variables in Netlify dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
pnpm build
pnpm start
```

## 📧 Contact Form Setup

The contact form automatically:
1. Saves submissions to Supabase database
2. Sends email notifications via Resend
3. Shows success/error messages to users

### Email Template

The email template includes:
- Sender's name and email
- Message content
- Professional HTML formatting
- Responsive design

## 🎨 Styling

The project uses Tailwind CSS with custom configuration:

- **Colors**: Custom color palette defined in `client/global.css`
- **Typography**: Manrope and Inter fonts
- **Components**: Radix UI components with custom styling
- **Animations**: Smooth transitions and hover effects

## 🧪 Testing

```bash
# Run tests
pnpm test

# Type checking
pnpm typecheck
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help, feel free to:

- Open an issue on GitHub
- Contact me at: mohammedsameers766@gmail.com

## 🙏 Acknowledgments

- [Fusion Starter](https://github.com/supabase/fusion-starter) - Base template
- [Supabase](https://supabase.com) - Backend services
- [Resend](https://resend.com) - Email service
- [Tailwind CSS](https://tailwindcss.com) - Styling framework
- [Radix UI](https://radix-ui.com) - Component primitives

---

**Built with ❤️ by Mohammed Sameer Ahmed**







