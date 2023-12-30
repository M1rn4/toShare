/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      colors: {
        primary: '#1E1E4B',
        secondary: '#2288ff',
        accent: '#32D4D2',
        neutral: '#020309',
        info: '#00dfff',
        'base-100': '#0A0C24',
        success: '#00ef9f',
        warning: '#ab5600',
        error: '#ff5080',
      },
      fontSize: {
        'h1': '4.938rem',
        'h2': '3.688rem',
        'h3': '2.938rem',
        'h4': '2.063rem',
        'h5': '1.5rem',
        'h6': '1.25rem',
        'sub1': '1rem', 
        'sub2': '0.875rem',  
        'body1': '1.5rem', 
        'body2': '1.25rem', 
        'body3': '1rem', 
        'body4': '0.875rem',
        'button-medium': '1rem',
        'button-small': '0.875rem',
        'caption': '0.75rem',
        'overline': '0.625rem',
      },
      fontWeight: {
        bold: 700,
        semibold: 600,
        medium: 500,
        regular: 400 
      },
      boxShadow: {
        'level-1': '2px 4px 6px 0px #0000002E',
        'level-2': '2px 4px 10px 0px #00000052',
        'level-3': '2px 4px 12px 0px #0000007A',
      },
      backgroundColor: {
        'elevation': '#434343',
      },
    },
  },
  
  
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0A0C24",
          "primary2": "#1E1E4B",
          "secondary": "#2288ff", 
          "accent": "#32D4D2",    
          "neutral": "#020309",
          "complementary": "#1E1F36",
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
  ]
}