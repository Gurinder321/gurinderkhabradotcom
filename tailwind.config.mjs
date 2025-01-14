/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      spacing: {
        '100': '100px',
        '120': '120px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Adding Poppins to the fontFamily
      },
    },
  },
  plugins: [],
};
