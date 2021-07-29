import Link from "next/link";
import Icon from "@mdi/react";
import Image from "next/image";
import { mdiArrowLeft } from "@mdi/js";
import logo from "../public/logo/annaScheucherLogo.png";

export default function Header() {
  return (
    <>
      <div className="mx-auto w-1/3 mt-16">
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
      <h2 className="text-2xl mt-6 mb-1 md:mb-6 md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight flex justify-start items-center font-serif">
        <Icon
          className="cursor-pointer mx-2"
          path={mdiArrowLeft}
          size={1}
          color="black"
        />
        <Link href="/">
          <a aria-label="back-to-blog">Back to Blog</a>
        </Link>
        .
      </h2>
      <hr className="my-4" />
    </>
  );
}
