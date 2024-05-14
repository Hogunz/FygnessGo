import { Navbar } from "flowbite-react";
import DarkMode from "@/Components/DarkModeToggle";
export default function Header() {
    return (
        <Navbar className="py-[32px] text-light bg-transparent dark:bg-gradient-to-t from-[#22123F] to-[#22123F]/25">
            <Navbar.Brand href="/">
                <img src="/images/logo.png" className="w-36 h-36" alt="" />
            </Navbar.Brand>
            <div className="flex md:order-2">
                <DarkMode />
                <a href="/register" className="href">
                    <button className="block w-full rounded-3xl border border-[#623AA5] bg-[#623AA5] px-12 py-3 text-sm font-light text-light hover:bg-transparent hover:text-light focus:outline-none focus:ring active:text-opacity-75 transition duration-300 ease-in-out sm:w-auto">
                        Register Now
                    </button>
                </a>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    className=" text-light tracking-wide text-[16px] uppercase transition duration-700 ease-in-out"
                    href="/"
                >
                    Popular Gym
                </Navbar.Link>
                <Navbar.Link
                    className=" text-light tracking-wide text-[16px] uppercase transition duration-700 ease-in-out"
                    href="/"
                >
                    Online Packages
                </Navbar.Link>
                <Navbar.Link
                    className=" text-light tracking-wide text-[16px] uppercase transition duration-700 ease-in-out"
                    href="/find-a-gym"
                >
                    Find A Gym
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
