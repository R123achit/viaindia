# Quick Setup Guide

## Prerequisites
- Node.js 18+ installed
- MongoDB Atlas account (free tier works)
- Git (optional)

## Step-by-Step Setup

### 1. Install Dependencies
```bash
cd viahind-website
npm install
```

### 2. Configure MongoDB

#### Option A: MongoDB Atlas (Recommended)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster (free M0 tier)
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Create `.env.local` file in project root:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/viahind?retryWrites=true&w=majority
```
7. Replace `username`, `password`, and `cluster` with your actual values

#### Option B: Local MongoDB
```env
MONGODB_URI=mongodb://localhost:27017/viahind
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Open Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## 🎉 You're Done!

The website should now be running with all features:
- ✅ Homepage with 3D animations
- ✅ All pages (About, Industries, Career, etc.)
- ✅ Contact form with MongoDB integration
- ✅ Responsive design
- ✅ GSAP animations
- ✅ Three.js 3D graphics

## Common Issues

### Issue: MongoDB Connection Error
**Solution**: Check your `.env.local` file and ensure:
- Connection string is correct
- IP address is whitelisted in MongoDB Atlas
- Username and password are correct

### Issue: Module Not Found
**Solution**: Run `npm install` again

### Issue: Port 3000 Already in Use
**Solution**: Use a different port:
```bash
npm run dev -- -p 3001
```

### Issue: Three.js Not Rendering
**Solution**: Ensure you're using a modern browser (Chrome, Firefox, Safari, Edge)

## Production Build

### Build
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Add environment variables in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add `MONGODB_URI` with your connection string

## Customization

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    DEFAULT: '#0066FF', // Change this
    dark: '#003D99',
    light: '#0080FF',
  },
}
```

### Change Company Info
- **Logo**: Update in `components/Navigation.js` and `components/Footer.js`
- **Contact Info**: Update in `components/TopBar.js` and `components/Footer.js`
- **Locations**: Update in `app/contact/page.js`

### Add More Services
Edit `components/home/TechnologySection.js` and add to the `services` array

### Add More Industries
Edit `components/home/IndustriesSlider.js` and `app/industries/page.js`

## Support
For issues or questions, refer to the main README.md or contact support.

---

Happy coding! 🚀
