/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors:{
        Cyan: "hsl(180, 66%, 49%)",
        darkViolet: "hsl(257, 27%, 26%)",
        Red: "hsl(0, 87%, 67%)",
        Gray: "hsl(0, 0%, 75%)",
        grayishViolet: "hsl(257, 7%, 63%)",
        verydarkBlue: "hsl(255, 11%, 22%)",
        verydarkViolet: "hsl(260, 8%, 14%)",
       
      },
      fontFamily:{
        Poppins: ['Poppins',]
      },
      fontSize:{
        bdFont : "18px"
      }
    },
  },
  plugins: [],
}
