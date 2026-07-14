# Mvuyo & Zinhle's Wedding Website

A beautiful wedding website for Mvuyo and Zinhle's special day.

## Features

- Responsive design that works on all devices
- Live countdown timer to the wedding day
- Photo gallery for wedding memories
- RSVP form for guest responses
- Smooth scrolling navigation
- Elegant styling with gold and brown theme

## Project Structure

```
mvuyo-zinhle-wedding/
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── script.js           # JavaScript functionality
├── assets/
│   ├── images/         # Wedding photos
│   ├── icons/          # Icon files
│   ├── music/          # Background music files
│   └── fonts/          # Custom fonts
└── README.md           # Project documentation
```

## Setup

1. Update the wedding date in `script.js` (line 2)
2. Replace placeholder text in `index.html` with actual wedding details
3. Add your wedding photos to `assets/images/`
4. Customize colors in `style.css` using CSS variables

## Customization

### Colors

Edit the CSS variables in `style.css`:
```css
:root {
    --primary-color: #8B4513;      /* Brown */
    --secondary-color: #D4AF37;    /* Gold */
    --text-color: #333;
    --bg-color: #f9f7f4;
}
```

### Wedding Date

Update the date in `script.js`:
```javascript
const weddingDate = new Date('2024-12-15').getTime();
```

### Sections

Update the following sections in `index.html`:
- Love story in the About section
- Wedding details (dates, times, locations)
- Gallery images
- RSVP form

## Browser Support

Works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## License

Personal use only.
