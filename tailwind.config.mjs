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
      keyframes: {
        fade: {
          "0%": { backgroundColor: "#69717d" },
          "100%": { backgroundColor: "transparent" },
        },
        blink: {
          from : {opacity: '0', transform: 'translate(0, 100px)', filter: 'blur(33px)'},
          to: {opacity: '1', transform: 'translate(0)', filter: 'blur(0)'},
        },
        blinks: {
          from : {opacity: '0', transform: 'translate(-100px, 0)', filter: 'blur(33px)'},
          to: {opacity: '1', transform: 'translate(0, 0)', filter: 'blur(0)'},
        },
        blinkss: {
          from : {opacity: '0', transform: 'translate(100px, 0)', filter: 'blur(33px)'},
          to: {opacity: '1', transform: 'translate(0, 0)', filter: 'blur(0)'},
        },
        blinksss: {
          from : {opacity: '0', transform: 'translate(100px, 0)', filter: 'blur(33px)'},
          to: {opacity: '1', transform: 'translate(0, 0)', filter: 'blur(0)'},
        },
        blinkssss: {
          from : {opacity: '0', transform: 'translate(-100px, 0)', filter: 'blur(33px)'},
          to: {opacity: '1', transform: 'translate(0, 0)', filter: 'blur(0)'},
        },
        blinksssss: {
          from : {opacity: '0', transform: 'translate(-100px, 0)', filter: 'blur(33px)'},
          to: {opacity: '1', transform: 'translate(0, 0)', filter: 'blur(0)'},
        },
        blinkssssss: {
          from : {opacity: '0', transform: 'translate(-100px, 0)', filter: 'blur(33px)'},
          to: {opacity: '1', transform: 'translate(0, 0)', filter: 'blur(0)'},
        },
        blinksssssss: {
          from : {opacity: '0', transform: 'translate(-100px, 0)', filter: 'blur(33px)'},
          to: {opacity: '1', transform: 'translate(0, 0)', filter: 'blur(0)'},
        },
        blinkssssssss: {
          from : {opacity: '0', transform: 'translate(-100px, 0)', filter: 'blur(33px)'},
          to: {opacity: '1', transform: 'translate(0, 0)', filter: 'blur(0)'},
        },
        bounce:{
          '0%, 100%': { transform: 'translateY(0)'},
          '50%': { transform: 'translateY(-20px)'},
        },
        move: {
          '0%, 49.99%': {opacity: '0', z_index: '1'},
          '50%, 100%': {opacity: '1', z_index: '5'},
        },
        'slide-in-bottom': {
          '0%': {
            transform: 'translateY(10px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },

      },
      animation: {
        "spinner-fade": "fade 1s linear infinite",
      },
    },
  },
  plugins: [],
};
