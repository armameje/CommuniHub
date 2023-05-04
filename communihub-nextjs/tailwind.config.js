/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'service-background': "url('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a804053a-0ee2-47fa-a082-0494deb6f00c/precision-6-basketball-shoes-h5907m.png')"
      },
    },
  },
  plugins: [],
}
