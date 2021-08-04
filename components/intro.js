import Link from "next/link";
import Image from "next/image";
import Icon from "@mdi/react";
import { mdiMoonWaxingCrescent, mdiWeatherSunset } from "@mdi/js";
import darkLogo from "../public/logo/fullyholistic-logo-dark.png";
import lightLogo from "../public/logo/fullyholistic-logo-light.png";

export default function Intro({ darkMode, setDarkMode, children }) {
    return (
        <header>
            <nav className="flex flex-col items-center align-middle justify-evenly space-y-4 mt-16 mb-16 md:mb-12">
                {/* Blog Header */}
                <ul className="flex flex-col justify-center items-center w-2/5 mx-auto my-2">
                    <Link href="/" passHref>
                        <a aria-label="home">
                            <Image
                                placeholder="blur"
                                src={darkMode ? lightLogo : darkLogo}
                                alt="Anna Scheucher Healing Practices"
                            />
                        </a>
                    </Link>
                    <div className="flex flex-row justify-center items-center space-x-4 my-8">
                        <Link href="/" passHref>
                            <a className="hover:underline cursor-pointer text-lg font-semibold tracking-tighter leading-tight pr-2">
                                Home
                            </a>
                        </Link>
                        <Link href="/about" passHref>
                            <a className="hover:underline cursor-pointer text-lg font-semibold tracking-tighter leading-tight pr-2">
                                About
                            </a>
                        </Link>
                        <Link
                            href="mailto:ascheucher.healing@gmail.com"
                            passHref
                        >
                            <a
                                target="_blank"
                                rel="noreferrer"
                                className="hover:underline cursor-pointer text-lg font-semibold tracking-tighter leading-tight pr-2"
                            >
                                Contact
                            </a>
                        </Link>
                    </div>
                    <div className="flex flex-row justify-center items-center space-x-4 my-8">
                        {children}
                    </div>
                </ul>
                {/* Dark Mode Toggle + Search Link */}
                <div className="w-full sm:w-2/3 flex flex-col justify-center items-center space-y-2">
                    <section
                        onClick={() => setDarkMode(!darkMode)}
                        className="md:hidden cursor-pointer flex justfiy-center items-center space-x-2 transition-all duration-500 ease-in-out"
                    >
                        <span className="text-sm font-semibold">
                            {darkMode ? "Dark Mode" : "Light Mode"}
                        </span>
                        <Icon
                            className="relative my-2"
                            path={
                                darkMode
                                    ? mdiMoonWaxingCrescent
                                    : mdiWeatherSunset
                            }
                            size={1}
                            color={darkMode ? "white" : "black"}
                        />
                    </section>
                    <Link href="/search?" passHref>
                        <h1 className="hover:underline cursor-pointer text-lg font-semibold tracking-tighter leading-tight pr-2">
                            Search My Blog
                        </h1>
                    </Link>
                    <h4 className="text-right text-xs opacity-75 my-2 hidden md:block">
                        A wide variety of resources can be found here!
                    </h4>
                </div>
            </nav>
        </header>
    );
}
