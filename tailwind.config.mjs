/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      textColor: {
        "dark-theme": "#4064b6"
      },
      backgroundImage: {
        "dark-theme": "#4064b6"

      }
    },
  },
  plugins: [],
};
