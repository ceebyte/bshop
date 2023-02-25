/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js,erb,html.erb}"],
  theme: {
    colors: {
      primary: '#2b2d42',
      secondary: '#8d99ae',
      tertiary: '#eDf2f4',
    },
    fontFamily: {
      // 'sans': ['ui-sans-serif', 'system-ui'],
      // 'serif': ['ui-serif', 'Georgia'],
      // 'mono': ['ui-monospace', 'SFMono-Regular'],
      'prism': ['"Tilt Prism"', 'cursive'],
      'poppins': ['Poppins'],
    },
    extend: {
    },
  },
  plugins: [],
}
