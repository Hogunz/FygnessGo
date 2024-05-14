
import forms from '@tailwindcss/forms';
const flowbite = require("flowbite-react/tailwind");
const defaultTheme = require('tailwindcss/defaultTheme');
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        './src/**/*.{js,jsx,ts,tsx}',
        "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
        'node_modules/flowbite-react/lib/esm/**/*.js',
        flowbite.content(),
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', defaultTheme.fontFamily.sans],
            },
            colors: {
                // Add your custom colors here
                primary: '#321516',
                secondary: '#240F10',
                secondary1: "#623AA5", //purple
                dark: "#1b1b1b", //black
                light: "#f5f5f5", //white
              yellow: "#8b7949"
                // Add more colors as needed
            },
        },
    },

    plugins: [
        forms,
        flowbite.plugin(),
    ],
};
