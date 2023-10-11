/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.{js,vue,ts}",
        "./pages/**/*.{js,vue,ts}",

    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Public Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
}

