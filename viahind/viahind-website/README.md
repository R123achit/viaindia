# Viahind - Premium IT Solutions Website

A complete, fully functional, professional website built with Next.js, MongoDB, JavaScript, Three.js, and GSAP for IT solutions business.

## 🚀 Features

### Complete Website Pages
- **Homepage** - Hero section with 3D animations, trust badges, client carousel, technology sections, tech stack, industries slider, testimonials, and lead capture form
- **About Page** - Company vision, mission, core values, and team stats
- **Services Page** - Comprehensive service listings with detailed information
- **Industries Page** - 12+ industry solutions with expandable details
- **Career Page** - Open positions, benefits, and application system
- **Work Culture Page** - Company values and employee testimonials
- **Contact Page** - Multiple locations, contact form, and Google Maps integration
- **Blogs Page** - Blog grid with categories and pagination

### Technology Stack
- **Frontend**: Next.js 14, React, Tailwind CSS
- **3D Graphics**: Three.js, @react-three/fiber, @react-three/drei
- **Animations**: GSAP, Framer Motion
- **Database**: MongoDB with Mongoose
- **Icons**: React Icons
- **Carousel**: Swiper

### Key Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Sticky navigation with mega dropdown menus
- ✅ 3D animated hero section with Three.js
- ✅ GSAP scroll animations
- ✅ Client logo infinite carousel
- ✅ Tabbed technology stack section
- ✅ Auto-rotating testimonials carousel
- ✅ Lead capture form with MongoDB integration
- ✅ Contact form with API routes
- ✅ Trust badges (Glassdoor, Google, Clutch)
- ✅ Industry-specific solutions
- ✅ SEO optimized
- ✅ Fast page loads
- ✅ Professional color scheme (Primary Blue #0066FF)

## 📦 Installation

1. **Clone the repository**
```bash
cd viahind-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory:
```env
MONGODB_URI=your_mongodb_connection_string
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🗂️ Project Structure

```
viahind-website/
├── app/
│   ├── about/
│   ├── industries/
│   ├── career/
│   ├── work-culture/
│   ├── contact/
│   ├── blogs/
│   ├── api/
│   │   └── contact/
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── components/
│   ├── home/
│   │   ├── HeroSection.js
│   │   ├── TrustBadges.js
│   │   ├── ClientCarousel.js
│   │   ├── TechnologySection.js
│   │   ├── TechStack.js
│   │   ├── IndustriesSlider.js
│   │   ├── Testimonials.js
│   │   ├── LeadForm.js
│   │   └── ThreeScene.js
│   ├── Navigation.js
│   ├── TopBar.js
│   └── Footer.js
├── lib/
│   └── mongodb.js
├── public/
├── tailwind.config.js
├── package.json
└── README.md
```

## 🎨 Design System

### Colors
- **Primary Blue**: #0066FF
- **Dark Blue**: #003D99
- **Light Blue**: #0080FF
- **Accent**: #E6F2FF
- **Dark**: #333333
- **White**: #FFFFFF
- **Gray**: #F5F5F5

### Typography
- **Font Family**: Inter
- **H1**: 56-72px, Bold
- **H2**: 36-48px, Semibold
- **H3**: 24-32px, Semibold
- **Body**: 16-18px, Regular

## 🔧 Configuration

### MongoDB Setup
1. Create a MongoDB Atlas account at [mongodb.com](https://www.mongodb.com/)
2. Create a new cluster
3. Get your connection string
4. Add it to `.env.local`

### Tailwind CSS
The project uses Tailwind CSS with custom configuration in `tailwind.config.js`. Custom colors, fonts, and utilities are defined there.

## 📱 Responsive Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Build for Production
```bash
npm run build
npm start
```

## 📄 API Routes

### POST /api/contact
Submit contact form data
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "company": "Acme Corp",
  "email": "john@example.com",
  "mobile": "+1234567890",
  "description": "Project details"
}
```

### GET /api/contact
Retrieve contact submissions (last 10)

## 🎯 Performance Optimizations
- Next.js App Router for optimal performance
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Tailwind CSS for minimal CSS bundle
- MongoDB connection pooling

## 🔒 Security
- Environment variables for sensitive data
- Input validation on forms
- MongoDB connection security
- CORS configuration

## 📞 Support
For support, email info@viahind.com

## 📝 License
© 2013-2026 All rights reserved. Viahind IT Solutions

---

Built with ❤️ using Next.js, MongoDB, Three.js, and GSAP
