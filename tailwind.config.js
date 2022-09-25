/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         animation: {
            fadeIn: "fadeIn 2s ease-in forwards",
         },
         keyframes: {
            fadeIn: {
               "0%": { opacity: 0 },
               "100%": { opacity: 1 },
            },
         },
         minHeight: {
            "1/2": "50%",
            "3/4": "75%",
         },
         fontFamily: {
            "roboto-mono": ["Roboto Mono", "monospace"],
            "space-grotesk": ["Space Grotesk", "sans-serif"],
         },
         variants: {
            animation: ["motion-safe"],
         },
      },
   },
   plugins: [],
};
