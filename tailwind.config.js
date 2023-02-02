const defaultTheme = require("tailwindcss/defaultTheme");

const labelsClasses = [
    "indigo",
    "gray",
    "green",
    "blue",
    "red",
    "purple",
];
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
        ...labelsClasses.map((lbl) => `text-${lbl}-400`)
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
