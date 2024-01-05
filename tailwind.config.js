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
        secondary3: "#272841",
        "complementary": "#1E1F36",
        accent: '#32D4D2',
        neutral: '#020309',
        info: '#00dfff',
        opacity: '#FFFFFF',
        'base-100': '#0A0C24',
        success: '#00ef9f',
        warning: '#ab5600',
        error: '#ff5080',
      },
      fontSize: {
        'h1': '79.008px', // 4.938rem * 16px
        'h2': '59.008px', // 3.688rem * 16px
        'h3': '47.008px', // 2.938rem * 16px
        'h4': '33.008px', // 2.063rem * 16px
        'h5': '24px',     // 1.5rem * 16px
        'h6': '20px',     // 1.25rem * 16px
        'sub1': '16px',   // 1rem * 16px
        'sub2': '14px',   // 0.875rem * 16px
        'body1': '24px',  // 1.5rem * 16px
        'body2': '20px',  // 1.25rem * 16px
        'body3': '16px',  // 1rem * 16px
        'body4': '14px',  // 0.875rem * 16px
        'button-medium': '16px', // 1rem * 16px
        'button-small': '14px',  // 0.875rem * 16px
        'caption': '12px',       // 0.75rem * 16px
        'overline': '10px',      // 0.625rem * 16px
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
          "opacity": '#FFFFFF',
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