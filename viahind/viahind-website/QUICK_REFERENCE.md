# Scroll Portfolio - Quick Reference Card

## 🎯 Quick Start (3 Steps)

1. **Add Screenshots** → `public/screenshots/` folder
2. **Edit Config** → `config/scrollPortfolioData.js`
3. **Run Dev Server** → `npm run dev`

## 📁 Key Files

| File | Purpose |
|------|---------|
| `components/home/ScrollPortfolio.js` | Main component |
| `config/scrollPortfolioData.js` | Edit content here |
| `public/screenshots/` | Add images here |

## 🎨 Common Customizations

### Change Service Info
```javascript
// config/scrollPortfolioData.js
{
  title: 'Your Service',
  description: 'Your description',
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  clients: ['Client 1', 'Client 2', ...],
}
```

### Change Colors
```javascript
color: 'from-blue-600 to-purple-500'
```

### Adjust Speed
```javascript
animationConfig = {
  scrollSpeed: 1, // Higher = slower
  transitionDuration: 1000 // milliseconds
}
```

### Toggle Features
```javascript
layoutConfig = {
  showSkipButton: true,
  showProgressIndicator: true,
  maxClientsVisible: 4,
  enableClickNavigation: true
}
```

## 📸 Screenshot Names

```
service-name-laptop.jpg   (1920x1080)
service-name-tablet.jpg   (768x1024)
service-name-mobile.jpg   (375x812)
```

## 🎨 Available Gradient Colors

```javascript
'from-blue-600 to-blue-500'
'from-teal-600 to-teal-500'
'from-cyan-600 to-cyan-500'
'from-purple-600 to-purple-500'
'from-indigo-600 to-indigo-500'
'from-green-600 to-green-500'
'from-pink-600 to-pink-500'
'from-red-600 to-red-500'
'from-orange-600 to-orange-500'
'from-yellow-600 to-yellow-500'
```

## 🔧 Troubleshooting

| Issue | Solution |
|-------|----------|
| Images not showing | Check file paths and names |
| Scroll not working | Clear cache, check console |
| Slow performance | Compress images, reduce duration |
| Layout broken | Check responsive classes |

## 📚 Full Documentation

- **Setup Guide**: `SCROLL_PORTFOLIO_SETUP.md`
- **Full Docs**: `SCROLL_PORTFOLIO_GUIDE.md`
- **Summary**: `FEATURE_IMPLEMENTATION_SUMMARY.md`

## 💡 Pro Tips

1. Use WebP format for better performance
2. Keep descriptions under 2 lines
3. Use contrasting colors between services
4. Test on mobile devices
5. Compress images before uploading

## 🚀 Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
```

---

**Need help?** Check the full documentation files!
