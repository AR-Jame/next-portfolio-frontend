/** @type {import('tailwindcss').Config} */
export default {
    theme: {
        extend: {
            gridTemplateColumns: {
                18: 'repeat(18, minmax(0, 1fr))', // ✅ custom 18-column grid
            },
        },
    },
    plugins: [],
}