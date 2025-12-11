# VisionCraft Studios - Video Editing & 3D Modelling Agency Website

A modern, sleek website for a video editing and 3D modelling agency built with Next.js, featuring smooth animations and professional design.

## 🚀 Features

### Core Pages
- **Home/Landing Page** - Compelling hero section with call-to-action, service overview, and featured projects
- **Portfolio/Gallery** - Filterable project showcase with modal view for project details
- **Services** - Comprehensive service descriptions with detailed feature lists
- **Pricing** - Clear pricing tiers with add-on services and FAQ section
- **About/Team** - Company mission, values, and team member profiles
- **Contact** - Professional contact form with validation and success/error handling

### Technical Features
- ✨ Smooth animations with Framer Motion
- 🎨 Modern dark theme with gradient accents
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Optimized performance with Next.js 16
- 🎯 TypeScript for type safety
- 🎭 Tailwind CSS for styling
- 🔍 SEO-optimized with proper meta tags
- ♿ Accessible navigation and UI components

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Font:** Geist Sans & Geist Mono (Next.js Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
project/
├── app/
│   ├── about/          # About & Team page
│   ├── contact/        # Contact form page
│   ├── portfolio/      # Portfolio gallery with filtering
│   ├── pricing/        # Pricing plans and packages
│   ├── services/       # Services overview page
│   ├── layout.tsx      # Root layout with Navbar & Footer
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Navbar.tsx      # Navigation component
│   └── Footer.tsx      # Footer component
├── public/             # Static assets
└── package.json
```

## 🎨 Design Features

### Color Scheme
- **Primary:** Indigo (#6366f1)
- **Secondary:** Purple (#8b5cf6)
- **Accent:** Pink (#ec4899)
- **Background:** Dark (#0a0a0a)
- **Text:** Light gray (#ededed)

### Animations
- Smooth page transitions
- Scroll-triggered animations
- Hover effects on interactive elements
- Staggered content reveals
- Loading states

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 📄 Pages Overview

### Home Page (`/`)
- Hero section with animated gradient background
- Statistics showcase (500+ projects, 200+ clients, etc.)
- Featured services grid
- Recent projects showcase
- Call-to-action section

### Portfolio Page (`/portfolio`)
- Filterable project grid (All, Video Editing, 3D Modelling, Animation, VFX, Motion Graphics)
- Project cards with hover effects
- Modal view for detailed project information
- Smooth animations on filter changes

### Services Page (`/services`)
- 8 comprehensive service offerings
- Detailed feature lists for each service
- Why choose us section
- Call-to-action

### Pricing Page (`/pricing`)
- 3 pricing tiers (Basic, Professional, Premium)
- Clear feature comparison
- Add-on services
- FAQ section
- Custom package inquiry

### About Page (`/about`)
- Company statistics
- Company story and mission
- Core values
- Team member profiles with specialties
- Career opportunities section

### Contact Page (`/contact`)
- Contact information (email, phone, address)
- Business hours
- Professional contact form with:
  - Full name
  - Email (validated)
  - Phone number
  - Service type selection
  - Budget range
  - Project details (minimum 20 characters)
- Form validation
- Success/error message handling
- Loading states

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 🎯 Future Enhancements

- Blog/Case studies section
- Testimonials carousel
- Email service integration (SendGrid/Resend)
- Analytics integration (Google Analytics/Plausible)
- CMS integration for dynamic content
- Advanced SEO with structured data
- Performance monitoring
- A/B testing capabilities

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License.

## 👥 Contact

For inquiries about this project:
- Email: info@visioncraft.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ using Next.js and TypeScript
