/** @type {import('tailwindcss').Config} */
export default {
  content: ["./css/**/*.{html,js,ejs}", "./views/*.ejs"],
  theme: {
    extend: {fontFamily: {horror:"Patrick Hand"},
  gridTemplateRows:{
    layout1: "100px 150px auto",
    layout2: "100px 1fr auto"
  }}
  },
  plugins: [],
};
