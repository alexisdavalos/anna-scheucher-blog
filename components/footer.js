import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./container";
import { FOOTER_MESSAGES } from "../lib/constants";
import Typed from "react-typed";
import ShareButtons from "./share-buttons";
import darkLogo from "../public/logo/fullyholistic-logo-light.png";
import lightLogo from "../public/logo/fullyholistic-logo-dark.png";

export default function Footer({ typedState, darkMode }) {
    const [typed, setTyped] = useState(typedState);
    const [url, setURL] = useState("");
    const year = new Date().getFullYear();

    useEffect(() => {
        setTyped(true);
        if (typeof window !== undefined) {
            setURL(window.location.href);
        }
    }, []);
    return (
        <section>
            <footer className="bg-inverse dark:bg-primary text-inverse dark:text-primary border-none">
                <Container>
                    <div className="py-16 flex flex-col lg:flex-row items-center">
                        {/* Typed Element */}
                        <Typed
                            className="text-3xl lg:text-4xl font-bold tracking-tighter leading-tight text-center mb-10 lg:mb-0 lg:pr-4 lg:w-1/2"
                            strings={FOOTER_MESSAGES}
                            typeSpeed={60}
                            backSpeed={75}
                            stopped={typed}
                        />
                        <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
                            <Link href="/search?">
                                <a className="text-primary rounded-sm dark:text-inverse hover:shadow-md mx-3 bg-primary dark:bg-inverse border border-none outline-none font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0">
                                    Search Now <span className="text-xs"></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </Container>
            </footer>
            <footer className="bg-primary dark:bg-inverse text-primary dark:text-inverse border-none">
                <div className="py-12 flex items-center justify-center text-center flex-col">
                    <ul className="flex flex-col justify-center items-center w-2/5 mx-auto my-2">
                        <Link href="/" passHref>
                            <a aria-label="home">
                                <Image
                                    width="225px"
                                    height="225px"
                                    placeholder="blur"
                                    src={darkMode ? lightLogo : darkLogo}
                                    alt=" Health and Healing Practices"
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
                    </ul>

                    <ShareButtons
                        url={url}
                        title={"FullyHolistic Health and Healing Practices"}
                        size={30}
                        windowWidth={640}
                        windowHeight={620}
                        hashtag={"#annascheucher"}
                        message="Share This Blog on Social Media"
                    />
                </div>
            </footer>
            <section className="w-full text-center bg-inverse text-inverse p-4">
                <span>
                    Fully Holistic Copyright &copy; {year} | All Rights Reserved
                    -{" "}
                </span>
                <Link href="/privacy" passHref>
                    <a className="text-inverse hover:underline cursor-pointer font-semibold tracking-tighter leading-tight pr-2">
                        Privacy Policy
                    </a>
                </Link>
            </section>
        </section>
    );
}
