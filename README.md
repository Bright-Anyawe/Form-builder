# Form Builder

A web application for generating and managing progress development reports for The Winkles School. Built with Next.js and React.

## Features

- Customizable form sections and headers
- School branding with logo and contact details
- Responsive, modern UI using Tailwind CSS
- Easy to extend with new components

## Project Structure

```
app/
  components/
    CheckboxGroup.js      # Checkbox group component
    FormHeader.js         # School header and report info
    FormSection.js        # Section for form fields
  favicon.ico
  globals.css
  layout.js
  page.js
public/
  file.svg                # School logo
  globe.svg
  next.svg
  vercel.svg
  window.svg
eslint.config.mjs
jsconfig.json
next.config.mjs
package.json
postcss.config.mjs
README.md
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

- Update `app/components/FormHeader.js` for school details and logo.
- Add or modify form sections in `app/components/FormSection.js`.
- Add new components in `app/components/`.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## License

MIT
