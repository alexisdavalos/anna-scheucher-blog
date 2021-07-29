import Link from "next/link";
import Image from "next/image";
import DateFormatter from "./date-formatter";
export default function Avatar({ name, picture, date }) {
  return (
    <Link href="/posts/about" passHref>
      <div className="cursor-pointer hover:underline flex items-center">
        <Image
          width="48px"
          height="48px"
          src={picture}
          alt={name}
          className="rounded-full"
        />
        <div className="flex items-start flex-col ml-4">
          <div className="text-sm sm:text-base md:text-xl text-left font-bold">
            {name}
          </div>
          <div className="text-sm sm:text-base md:text-xl text-left">
            <DateFormatter
              dateString={date ? date : "0000-01-11T01:11:01.1111"}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
