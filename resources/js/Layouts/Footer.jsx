import { Typography } from "@material-tailwind/react";

export default function Footer() {
    return (
        <footer className="w-full  p-8">
            <hr className="my-8 border-blue-gray-50" />
            <Typography
                color="blue-gray"
                className="text-center text-dark dark:text-white font-normal"
            >
                &copy; 2024 Test
            </Typography>
        </footer>
    );
}
