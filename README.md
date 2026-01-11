# Angular Landing Page

A simple landing page showcasing Angular components with header, footer, hero section, and middle sections.

## Project Structure

```
src/
├── app/
│   ├── app.component.ts          # Main app component
│   └── components/
│       ├── header/               # Header component
│       ├── hero/                  # Hero section component
│       ├── features/              # Features section component
│       ├── about/                 # About section component
│       └── footer/                # Footer component
├── index.html
├── main.ts
└── styles.css
```

## Components Created

1. **Header Component** (`app-header`)
   - Navigation bar with logo and links
   - Sticky positioning
   - Responsive design

2. **Hero Component** (`app-hero`)
   - Welcome section with title and call-to-action buttons
   - Gradient background
   - Centered content

3. **Features Component** (`app-features`)
   - Three feature cards showcasing key features
   - Grid layout
   - Hover effects

4. **About Component** (`app-about`)
   - Information about the project
   - Text content with list items

5. **Footer Component** (`app-footer`)
   - Footer with links and contact information
   - Multi-column layout

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   # or
   ng serve
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:4200
   ```

## Features

- ✅ Standalone Angular components (Angular 17+ pattern)
- ✅ TypeScript with strict typing
- ✅ Responsive CSS design
- ✅ Component-based architecture
- ✅ All sections properly structured and styled

## Testing

After starting the server, use Chrome DevTools to:
- Check for console errors
- Verify component rendering
- Test responsive design
- Validate accessibility

## Constitution Compliance

This implementation follows the Angular SPA Constitution:
- ✅ Component-based architecture with standalone components
- ✅ TypeScript-first development
- ✅ Modern Angular patterns
- ✅ Responsive design
- ✅ Proper component structure

