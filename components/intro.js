import Link from "next/link";
import Image from "next/image";
import animations from "../styles/animations.module.scss";
import logo from '../public/logo/annaScheucherLogo.png'


export default function Intro() {
  return (
    <div
      className={`border-b-4 ${animations.hueRotate} ${animations.bottomShadow}`}
    >
      <section className="flex-col flex items-center align-middle justify-center mt-16 mb-4 md:mb-12">
        <div className="flex flex-col w-2/5">
          <Link href="/" passHref>
              <a aria-label="home">
                <Image
                    laceholder="blur"
                    src={logo}
                    alt="Anna Scheucher Healing Practices"
                  />
              </a>
            </Link>
        </div>
        <div className="w-2/5 flex-col justify-center items-center text-center font-serif hidden md:flex">
          <Link href="/search?" passHref>
              <h1 className="cursor-pointer font-medium pr-2 uppercase">
                Search My Blog 🔎
              </h1>
          </Link>
          <h4 className="text-xs opacity-75 my-2">
            A wide variety of resources can be found here!
          </h4>
        </div>
      </section>
    </div>
  );
}

