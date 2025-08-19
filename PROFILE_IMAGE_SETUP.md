# Profile Image Setup Guide

## 📸 Adding Your Profile Image

To add your professional headshot to the portfolio website, follow these steps:

### 1. Save Your Image
- Save your profile image as `profile.jpg`
- Place it in the `public/images/` folder
- Recommended size: 600x600 pixels or larger (square aspect ratio)
- Format: JPG or PNG

### 2. Image Requirements
- **File name**: `profile.jpg`
- **Location**: `public/images/profile.jpg`
- **Format**: JPG or PNG
- **Size**: Minimum 300x300 pixels, recommended 600x600 pixels
- **Aspect ratio**: Square (1:1)
- **Quality**: High resolution for crisp display

### 3. Where Your Image Will Appear
Your profile image will be displayed in:
- **Hero Section**: Large 3D profile card with glow effect
- **About Section**: Smaller profile image with hover effects
- Both images are fully responsive and will look great on all devices

### 4. Styling Features
The profile images include:
- ✨ Glowing border animation
- 🎭 3D hover effects
- 📱 Responsive sizing
- 🎨 Glassmorphism styling
- 🌟 Smooth animations

### 5. File Structure
```
public/
└── images/
    └── profile.jpg  ← Your image goes here
```

### 6. Alternative Names
If you prefer a different filename, you can use:
- `profile.png`
- `headshot.jpg`
- `avatar.jpg`

Just update the `src` attribute in these files:
- `src/components/Hero.tsx` (line with profile image)
- `src/components/About.tsx` (line with profile image)

## 🎯 Next Steps
Once you've added your profile image:
1. The website will automatically display it
2. The images will be optimized and responsive
3. You can customize the styling in `src/index.css` if needed

Your professional headshot will now be prominently featured in your portfolio! 🚀
