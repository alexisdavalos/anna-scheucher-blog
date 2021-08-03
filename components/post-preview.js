import dynamic from "next/dynamic";
import Link from "next/link";
const Avatar = dynamic(import("../components/avatar"));
const CoverImage = dynamic(() => import("../components/cover-image"));
import { v4 as uuid } from "uuid";
import readingTime from "reading-time";

export default function PostPreview({
	title,
	coverImage,
	date,
	excerpt,
	author,
	topics,
	slug,
	views,
	content,
}) {
	const { text } = readingTime(content);
	return (
		<div className="bg-secondary max-w-m rounded overflow-hidden shadow-lg mb-10 mr-3">
			<CoverImage slug={slug} title={title} src={coverImage} hero={false} />
			<div className="flex flex-col justify-evenly">
				<div className="px-6 py-4">
					<h2 className="text-xl md:text-3xl mb-3 mt-3 truncate leading-snug">
						<Link as={`/posts/${slug}`} href="/posts/[slug]">
							<a className="hover:underline">{title}</a>
						</Link>
					</h2>
					<p className="hidden md:block text-sm leading-relaxed mb-4">
						{excerpt}
					</p>
				</div>
				<div className="flex justify-content flex-col ml-8 mr-8 p-2">
					<Avatar name={author.name} picture={author.picture} date={date} />
					<div className="flex justify-between items-center w-full mt-3">
						<p className="text-sm xl:text-md font-light tracking-normal leading-loose">
							{text}
						</p>
					</div>
				</div>
				<div className="px-6 pt-4 pb-2 mb-4">
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
		</div>
	);
}
