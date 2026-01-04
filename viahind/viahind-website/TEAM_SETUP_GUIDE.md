# Team Section Setup Guide

## Overview
Your team section has been added to the About page (`/about`) with 6 team members showcasing their profiles, experience, and expertise.

## How to Update Team Information

### 1. Edit Team Member Details
Open `config/teamData.js` and update each team member's information:

```javascript
{
  id: 1,
  name: 'Your Name',              // Full name
  role: 'Marketing Manager',       // Job title
  domain: 'Digital Marketing',     // Area of expertise
  experience: '5+ years',          // Years of experience
  image: '/team/photo.jpg',        // Profile photo path
  bio: 'Short bio...',             // Brief description
  skills: ['SEO', 'Marketing'],    // Key skills (array)
  linkedin: 'https://linkedin.com/in/username',
  email: 'email@viahind.com'
}
```

### 2. Add Team Photos
Place team member photos in `public/team/` folder:
- Recommended size: 400x400px or 800x800px (square)
- Format: JPG or PNG
- File names: `member1.jpg`, `member2.jpg`, etc.

Then update the `image` field in `teamData.js`:
```javascript
image: '/team/member1.jpg'
```

### 3. Current Team Structure
- 1 Marketing Manager
- 2 Data Analytics Engineers
- 2 ML Developers
- 1 Web Developer

### 4. Customize Display Options
In `config/teamData.js`, adjust the `teamConfig` object:

```javascript
export const teamConfig = {
  showSocialLinks: true,      // Show LinkedIn/Email icons
  showSkills: true,           // Display skill tags
  showExperience: true,       // Show experience badge
  cardStyle: 'modern'         // Card design style
};
```

### 5. View the Team Section
Navigate to: `http://localhost:3000/about`

The team section appears after the Core Values section and before the CTA.

## Features Included
✅ Responsive grid layout (1 column mobile, 2 tablet, 3 desktop)
✅ Hover effects with bio overlay
✅ Experience badges
✅ Skill tags (shows first 4, with +N indicator)
✅ LinkedIn and Email contact links
✅ Smooth animations on scroll
✅ Professional card design

## Tips
- Use consistent photo backgrounds for a professional look
- Keep bios concise (1-2 sentences)
- List 4-6 key skills per person
- Update LinkedIn URLs to actual profiles
- Use company email addresses

## Need Help?
- Team data: `config/teamData.js`
- Team component: `components/TeamSection.js`
- About page: `app/about/page.js`
