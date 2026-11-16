# CampusBites

CampusBites is a student-focused food ordering website built with React. It helps students browse meals, add items to a cart, and get in touch through a validated contact form.

## Features

- Responsive layout for desktop and mobile screens
- Menu browsing and cart access
- Cart items saved in the browser with `localStorage` (when implemented in the app)
- Multiple pages with React Router (when implemented in the app)
- Contact form with required-field and email validation
- Orange, white, and charcoal visual theme

## Built With

- React
- Vite
- JavaScript
- CSS
- React Router (if installed)

## Getting Started

### Requirements

- Node.js and npm

### Install and run

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR-USERNAME/campusbites.git
   ```

2. Change into the project folder:

   ```bash
   cd campusbites
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

Open the local URL printed in the terminal, usually `http://localhost:5173`.

## Production Build

Create an optimized production build with:

```bash
npm run build
```

To preview that build locally:

```bash
npm run preview
```

## Deployment

CampusBites can be deployed to a static hosting provider such as Vercel or Netlify:

1. Push the project to a GitHub repository.
2. Import the repository into your hosting provider.
3. Set the build command to `npm run build`.
4. Set the output directory to `dist`.
5. If the app uses React Router, configure the host to rewrite page requests to `index.html` so direct links to app pages work.

## Notes

The contact form currently provides client-side validation and a success state. It does not deliver messages unless connected to a backend or form service. Cart persistence depends on the app saving and restoring cart data through `localStorage`.

## License

This project was created as a learning assignment. Add a license here if you plan to distribute or reuse the code.
