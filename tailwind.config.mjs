/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		container: {
  			center: true,
  			padding: {
  				DEFAULT: '20px',
  				lg: '16px'
  			}
  		},
  		fontFamily: {
  			Readex: [
  				'Readex Pro',
  				'sans-serif'
  			],
  			Tajawal: [
  				'Tajawal',
  				'sans-serif'
  			]
  		},
  		boxShadow: {
  			'btn-primary-shadow': '0px 0px 0px 6px rgba(230, 230, 234, 1)',
  			'btn-secondary-shadow': '0px 0px 0px 6px rgba(250, 248, 254, 1)',
  			'btn-tertiary-shadow': '0px 0px 0px 6px rgba(242, 251, 213, 1)',
  			'btn-error-shadow': '0px 0px 0px 6px rgba(255, 230, 213, 1)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
