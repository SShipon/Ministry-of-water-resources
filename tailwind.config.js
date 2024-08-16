/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-background': '#F3F4F6',
        'background-nav':'#683091'
        
        // কাস্টম কালার নাম 'custom-background' সহ যোগ করা
      },
    },
  },
  plugins: [require('daisyui'),],
}

