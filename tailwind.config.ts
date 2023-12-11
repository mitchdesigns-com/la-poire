import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      // padding: '1rem',
      screens: {
        lg: '100%',
        xl: '100%',
        '2xl': '1440px',
      },
    },
    spacing: {
      '0': '0',
      '.5': '4px',
      '1': '8px',
      '2': '12px',
      '5': '5px',
      '10': '10px',
      '14': '14px',
      '13': '13px',
      '20': '20px',
      '22': '22px',
      '44': '44px',
      '30': '30px',
      '3': '16px',
      '4': '24px',
      '95': '95px',
      '26': '26px',
      '32': '32px',
      '34': '34px',
      '36': '36px',
      '56': '56px',
      '60': '60px',
      '64': '64px',
      '6': '48px',
      '7': '60px',
      '8': '68px',
      '28': '206px',
      '240': '240px',
      '50': '50px',
      '100': '100px',
      '70': '70px',
      '40': '40px',
      '265': '265px',
      '460': '460px',
      '634': '634px',
      '688': '688px',
      '130': '130px',
      '320': '320px',
    },
    fontSize: {
      'base': ['16px', {
        lineHeight: '34px',
      }],
      'xs': ['12px', {
        lineHeight: '19px'
      }],
      'sm': ['14px', {
        lineHeight: '150%',
        letterSpacing: '0.05em',
      }],
      'l': ['18px', {
        lineHeight: '27px',
      }],
      'xl': ['20px', {
        lineHeight: '30px',
        fontWeight: '600',
      }],
      '2xl': ['24px', {
        lineHeight: '36px',
        fontWeight: '700',
      }],
      '3xl': ['32px', {
        lineHeight: '42px',
        fontWeight: '700',
      }],
      '4xl': ['40px', {
        lineHeight: '72px',
      }],
      '5xl': ['48px', {
        lineHeight: '67px',
      }],
      '6xl': ['60px', {
        lineHeight: '72px',
        fontWeight: '600',
      }],
      '7xl': ['70px', {
        lineHeight: '80px',
        fontWeight: '500',
      }],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'gray': '#999999',
        'gray2': '#969696',
        'gray3': '#F4F4F4',
        'gray4': '#D9D9D9',
        'gray5': '#454545',
        'pink': '#FDB3C4',
        'pink2': '#E88EA2',
        'gold': '#B3903E',
        'goldHover': '#B3903E',
        'goldLight': '#EAD388',
        'white': '#FFFFFF',
        'black': '#000000',
        'green': '#00754A',
        'greenBlack': '#082F1D',
        'orange': '#F36B22',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-orange',
  ]
}
export default config
