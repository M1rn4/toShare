/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#1E1E4B",
          "secondary": "#2288ff", 
          "accent": "#32D4D2",    
          "neutral": "#020309",
          "base-100": "#0A0C24",
          "info": "#00dfff",
          "success": "#00ef9f",
          "warning": "#ab5600",
          "error": "#ff5080",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}