# Reverb Website - UC Berkeley Electronic Music Club

A minimal, sleek website for the Reverb electronic music club at UC Berkeley.

## 🚀 Quick Start

1. **Download all files** and put them in a folder called `reverb-website`
2. **Create an `images` folder** inside your project folder
3. **Add your images** to the images folder (see Image Requirements below)
4. **Open `index.html`** in any web browser to view the site

## 📁 Project Structure
```
reverb-website/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Loading animations and interactions
├── README.md          # This file
└── images/            # Your images go here
    ├── reverb-logo.png           # Main logo for loading screen
    ├── reverb-logo-minimal.png   # Smaller logo for navigation
    ├── photo1.jpg               # Gallery photo 1
    ├── photo2.jpg               # Gallery photo 2
    └── ... (photo3.jpg through photo10.jpg)
```

## 🖼️ Image Requirements

You need to add these images to the `images/` folder:

### Logo Files (required):
- `reverb-logo.png` - Your main Reverb logo (used in loading screen)
- `reverb-logo-minimal.png` - Smaller/simpler logo (used in navigation bar)

### Gallery Photos (required):
- `photo1.jpg` through `photo10.jpg` - Community/event photos
- Photos should be high quality (at least 800px wide)
- Mix of horizontal and vertical orientations works well
- JPG or PNG format

## 🎨 Features

- **3-second loading animation** with "find your frequency" text and animated logo
- **Smooth scrolling** navigation
- **Random photo gallery** with hover effects
- **Fully responsive** design for mobile and desktop
- **Minimal black/white aesthetic**

## 🛠️ Customization

### Change the Loading Text:
Edit line 19 in `index.html`:
```html
<div id="loading-text" class="loading-text">your new text here</div>
```

### Update Club Description:
Edit the about section in `index.html` (around line 48)

### Change Apply Link:
Edit line 25 in `index.html`:
```html
<a href="YOUR_GOOGLE_FORM_LINK" target="_blank" class="nav-link apply-btn">apply now</a>
```

### Modify Photo Positions:
Edit the `style` attributes on photo-item divs in `index.html` to change positions:
```html
<div class="photo-item photo-large" style="top: 10%; left: 5%;">
```

## 📱 Browser Compatibility

Works on all modern browsers:
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Going Live

To put this website online:

1. **GitHub Pages** (free):
   - Create a GitHub account
   - Upload your files to a new repository
   - Enable GitHub Pages in repository settings

2. **Netlify** (free):
   - Drag your project folder to netlify.com/drop
   - Get instant live site

3. **Other hosting**: Upload files to any web hosting service

## 🎵 Loading Animation Details

- Total duration: 4 seconds
- Sequence: Text fades in → Text fades out → Logo scales in with bounce effect → Site appears
- Loading screen automatically hides and shows main content

## 💡 Future Enhancements

Ideas you could add later:
- Music player integration
- Event calendar
- Member profiles
- Photo lightbox/modal
- Contact form
- Social media links

## 🔧 Troubleshooting

**Images not showing?**
- Make sure image files are in the `images/` folder
- Check that filenames match exactly (case-sensitive)
- Ensure images are JPG or PNG format

**Loading screen not working?**
- Check browser console (F12) for JavaScript errors
- Make sure all files are in the same folder

**Site looks broken on mobile?**
- The site is responsive, but try refreshing the page
- Some very old mobile browsers might not support all features

---

**Need help?** Check that all files are in the correct structure and image names match exactly!