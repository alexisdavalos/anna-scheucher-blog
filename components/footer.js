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

export default function Footer({ typedState }) {
  const [typed, setTyped] = useState(typedState);
  useEffect(() => {
    setTyped(true);
  }, []);
  return (
    <div className="bg-yellow-500">
      <footer className="bg-accent-1 border-t border-accent-2 font-serif">
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
                <a className="mx-3 bg-yellow-500 hover:bg-yellow-600 hover:text-white border border-none outline-none text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0">
                  Search Now
                </a>
              </Link>
              <a
                href={`${SOURCE_PATH}`}
                className="mx-3 font-bold hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Contact Me 💬
              </a>
            </div>
          </div>
        </Container>
      </footer>
      <footer className="bg-gradient-to-r from-yellow-700 border-t border-accent-2">
        <div className="py-12 flex items-center justify-center text-center flex-col">
          <Image
            width="150px"
            height="150px"
            src="/favicons/transparent-icon.png"
            alt="Blog Icon"
          />
        </div>
      </footer>
      <section className="bg-black text-white flex justify-center items-center">
        <p className="my-4 text-white mx-auto">
          The source code is licensed under open source{" "}
          <a
            className="underline font-bold"
            href={LICENSE_LINK}
            target="_blank"
            rel="noreferrer"
          >
            MIT
          </a>{" "}
          License.{" "}
        </p>
      </section>
    </div>
  );
}
