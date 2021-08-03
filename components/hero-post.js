import dynamic from "next/dynamic";
import { v4 as uuid } from "uuid";

// Components
const Avatar = dynamic(import("../components/avatar"));
const DateFormatter = dynamic(import("../components/date-formatter"));
const Link = dynamic(import("next/link"));
const CoverImage = dynamic(() => import("../components/cover-image"));
import readingTime from "reading-time";
export default function HeroPost({
	title,
	coverImage,
	date,
	excerpt,
	topics,
	author,
	slug,
	content,
}) {
	const { text } = readingTime(content);
	return (
		<section>
			<div className="mb-4 md:mb-16">
				<CoverImage title={title} src={coverImage} slug={slug} hero />
				<div className="mt-4 hidden sm:block md:block">
					{topics.map((topic) => (
						<Link
							key={uuid()}
							href={`/search?${encodeURIComponent(topic)}`}
							replace
							shallow
						>
							<a className="bg-accent text-white inline-block hover:bg-inverse hover:text-inverse rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
								#{topic}
							</a>
						</Link>
					))}
				</div>
			</div>
			<div className="md:grid md:grid-cols-2 md:col-gap-8 lg:col-gap-8 mb-16 md:mb-18">
				<div className="mx-5">
					<h3 className="mb-4 mt-8 md:mt-0 text-xl sm:text-2xl md:text-3xl lg:text-6xl leading-tight">
						<Link as={`/posts/${slug}`} href="/posts/[slug]">
							<a className="hover:underline">{title}</a>
						</Link>
					</h3>
					<div className="mb-4 md:mb-0 text-lg">
						<DateFormatter dateString={date} />
					</div>
					<div className="flex justify-between items-center w-full mt-3">
						<p className="text-sm xl:text-md font-light tracking-normal leading-loose">
							{text}
						</p>
					</div>
				</div>
				<div>
					<p className="hidden md:block mx-5 mb-10 text-sm leading-relaxed">
						{excerpt}
					</p>
					<Avatar name={author.name} picture={author.picture} date={date} />
				</div>
			</div>
		</section>
	);
}
