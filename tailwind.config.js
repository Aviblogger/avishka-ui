/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        btn: {
          primary: {
            DEFAULT: "#000",
            foreground: "#fff",
          },

          secondary: {
            DEFAULT: "#f4f4f5",
            foreground: "#000",
          },
          danger: {
            DEFAULT: "#ef4444",
            foreground: "#fff",
          },

          disabled: {
            DEFAULT: "#d3d3d3",
            foreground: "#808080",
          },
        },
        badge: {
          primary: {
            DEFAULT: "#000",
            foreground: "#fff",
          },

          secondary: {
            DEFAULT: "#f4f4f5",
            foreground: "#000",
          },
          danger: {
            DEFAULT: "#ef4444",
            foreground: "#fff",
          },
        },

        alert: {
          primary: {
            DEFAULT: "#fff",
            foreground: "#fff",
          },

          danger: {
            DEFAULT: "#ef4444",
            foreground: "#ef4444",
          },
        },

        avatar: {
          primary: {
            DEFAULT: "#fff",
            foreground: "#000",
          },
        },

        input: {
          primary: {
            DEFAULT: "#fff",
            foreground: "#000",
          },

          danger: {
            DEFAULT: "#fff",
            foreground: "#ef4444",
          },
        },

        
        spinner: {
          primary: {
            DEFAULT: "#fff",
          },

          danger: {
            DEFAULT: "#ef4444",
          },
        },

        card: {
          DEFAULT: "#fff",
          foreground: "#000",
        },
      },
    },
  },
  plugins: [],
};
