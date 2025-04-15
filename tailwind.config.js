/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ["JetBrainsMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};
