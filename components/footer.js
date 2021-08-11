import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./container";
import {
    SOURCE_PATH,
    FOOTER_MESSAGES,
    AUTHOR_GITHUB_LINK,
    LICENSE_LINK,
} from "../lib/constants";
import Typed from "react-typed";
import ShareButtons from "./share-buttons";

export default function Footer({ typedState }) {
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
                                <a className="text-primary rounded-sm dark:text-inverse hover:shadow-md hover:text-white mx-3 bg-primary dark:bg-inverse bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:border-purple-600 border border-none outline-none font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0">
                                    Search Now{" "}
                                    <span className="text-xs">🔎</span>
                                </a>
                            </Link>
                            <a
                                href={`${SOURCE_PATH}`}
                                className="mx-3 font-bold hover:underline"
                                target="_blank"
                                rel="noreferrer"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </Container>
            </footer>
            <footer className="bg-primary dark:bg-inverse text-primary dark:text-inverse border-none">
                <div className="py-12 flex items-center justify-center text-center flex-col">
                    <Link href="/" passHref>
                        <a>
                            <Image
                                width="120px"
                                height="120px"
                                src="/favicons/android-chrome-512x512.png"
                                alt="Agamov.Dev - Technology, Crypto, and Coding Blog"
                                className="w-16 md:w-16 lg:w-32 color:black"
                            />
                        </a>
                    </Link>
                    <p className="mt-10 w-3/4">
                        Built by{" "}
                        <a
                            className="underline font-bold"
                            href={AUTHOR_GITHUB_LINK}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Alexis Davalos
                        </a>
                        . The source code is licensed under open source{" "}
                        <a
                            className="underline font-bold"
                            href={LICENSE_LINK}
                            target="_blank"
                            rel="noreferrer"
                        >
                            MIT
                        </a>{" "}
                        License.
                    </p>
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
                        <Link href="/" passHref>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                className="hover:underline cursor-pointer text-lg font-semibold tracking-tighter leading-tight pr-2"
                            >
                                Contact
                            </a>
                        </Link>
                    </div>
                    <ShareButtons
                        url={url}
                        title={"Agamov Dev is a Programming and Design Blog..."}
                        size={30}
                        windowWidth={640}
                        windowHeight={620}
                        hashtag={"#agamov"}
                        message="Share This Blog on Social Media"
                    />
                    <Link href="/search?">
                        <a className="cursor-pointer my-4 text-lg font-semibold">
                            Search Blog
                        </a>
                    </Link>
                </div>
            </footer>
            <section className="w-full text-center bg-inverse text-inverse p-4">
                <span>
                    Copyright &copy; {year} Agamov.Dev All rights reserved{" "}
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
