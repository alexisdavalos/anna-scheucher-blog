import Link from "next/link";
import DateFormatter from "./date-formatter";
export default function Avatar({ name, picture, date }) {
    return (
        <div className="m-2">
            <Link href="/posts/about" passHref>
                <a className="cursor-pointer hover:underline flex items-center">
                    {/* eslint-disable */}
                    <img
                        src={picture}
                        alt={name}
                        className="rounded-full h-12 w-12"
                    />
                    <div className="flex items-start flex-col ml-4">
                        <div className="text-sm sm:text-base md:text-xl text-left font-bold">
                            {name}
                        </div>
                        <div className="text-sm sm:text-base md:text-xl text-left">
                            <DateFormatter
                                dateString={
                                    date ? date : "0000-01-11T01:11:01.1111"
                                }
                            />
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
}
