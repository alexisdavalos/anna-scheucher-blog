import Avatar from "../components/avatar";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";
import animations from "../styles/animations.module.scss";
import Link from "next/link";
import { v4 as uuid } from "uuid";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  topics,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <p className="text-gray-600 text-xl mb-3 hidden md:block ">Written By:</p>
      <div className="hidden md:block md:mb-6">
        <Avatar name={author.name} picture={author.picture} date={date} />
      </div>
      <div
        className={`border-b-4${animations.hueRotate} ${animations.bottomShadow}`}
      >
        <div className="pb-4">
          {topics.map((topic) => (
            <Link
              key={uuid()}
              href={`/search?${encodeURIComponent(topic)}`}
              replace
              shallow
            >
              <a className="inline-block bg-yellow-500 hover:bg-orange-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                #{topic}
              </a>
            </Link>
          ))}
        </div>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} hero />
      </div>
      <div className="max-w-5xl mx-auto">
        <p className="text-gray-600 text-xl mb-3 block md:hidden">
          Written By:
        </p>
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} date={date} />
        </div>
      </div>
    </>
  );
}
