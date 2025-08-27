import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      background:{
        
      },
      transformOrigin: {
        'center-right': 'center right'
      },
      fontFamily: {
        Junge: 'https://fonts.googleapis.com/css2?family=Junge&display=swap'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'fusion': 'linear-gradient(#F6E4C8,#FAA11B)',
      },
      screens:{
        '3xl':'1537px',
        'phone':'320px',
      }
    }
  },
  plugins: []
}
export default config
