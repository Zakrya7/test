# HabitBoost - Daily Habit Tracker Landing Page

A modern, mobile-first landing page for a daily habit tracker app, featuring smooth animations, micro-interactions, and SVG mockups.

## Features

- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Modern UI**: Clean, conversion-focused design with visually appealing elements
- **Micro-animations**: Subtle animations triggered on scroll, hover, and interaction
- **SVG App Mockups**: Custom vector graphics showing app functionality
- **Mobile-first approach**: Built with mobile users as the primary audience

## File Structure

- `index.html`: Main HTML structure
- `styles.css`: All styling and animations
- `script.js`: Interactive functionality and animation triggers

## Getting Started

1. Simply open `index.html` in any modern web browser
2. All assets are self-contained or loaded from CDNs

## Customization

### Changing Colors

The color scheme is defined in CSS variables at the top of `styles.css`:

```css
:root {
    --primary: #6366f1;
    --primary-dark: #4f46e5;
    --primary-light: #a5b4fc;
    --secondary: #10b981;
    /* Additional color variables */
}
```

### Replacing Images

Replace the placeholder images with your actual app screenshots:

1. In the HTML, locate the `img` tags with placeholder URLs (e.g., `https://placehold.co/300x600/6366f1/fff?text=HabitBoost+App`)
2. Replace with your own image URLs

### SVG Mockups

Custom SVG mockups can be modified directly in the HTML. Each mockup is contained within `<svg>` tags in the feature sections.

### App Store Links

Update the download links in the CTA section:

```html
<div class="app-badges appear-animation">
    <a href="#" class="app-badge">
        <img src="https://placehold.co/160x50/000/fff?text=App+Store" alt="Download on App Store">
    </a>
    <a href="#" class="app-badge">
        <img src="https://placehold.co/160x50/000/fff?text=Google+Play" alt="Get it on Google Play">
    </a>
</div>
```

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Credits

- Fonts: Inter from Google Fonts
- Icons: Basic SVG shapes and Unicode symbols 