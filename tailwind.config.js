/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    
    theme: {
        fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        },
        extend: {
        colors: {
            'fondo': '#F3F3F3',
            'texto-principal': '#1E1E1E',
            'texto-secundario': '#4B5563',
            
            'acento': {
            DEFAULT: '#047857',
            'claro': '#34D399',
            'oscuro': '#064E3B',
            },
            
            'contraste': '#0070F3',
        },
        spacing: {
            '128': '32rem',
            '144': '36rem',
        },
        boxShadow: {
            'sutil': '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.03)',
            'elevado': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
        }
        },
    },
    
    plugins: [],
}