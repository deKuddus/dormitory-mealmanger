const defaultTheme = require("tailwindcss/defaultTheme");

const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],
    safelist: [
        ...labelsClasses.map((lbl) => `bg-${lbl}-500`),
        ...labelsClasses.map((lbl) => `bg-${lbl}-200`),
        ...labelsClasses.map((lbl) => `text-${lbl}-400`),
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                background: {
                    200: "#0094FF",
                    300: "#0094FF",
                    500: "#EEEFF6",
                },
                buttonColor:{
                    100:'#0F52B7',
                    200:'#8B11C5',
                    300:'#5200FF',
                    400:'#29C868',
                    500:'#1CB98A',
                    600:'#CE4D4D',
                    700:'#00B6AB',
                    800:'#CC4A20',
                    900:'#195DE1',
                }
            }
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
