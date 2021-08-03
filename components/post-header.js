import Avatar from "../components/avatar";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";
import ShareButtons from "../components/share-buttons";
import animations from "../styles/animations.module.scss";
import Link from "next/link";
import { mdiEye } from "@mdi/js";
import Icon from "@mdi/react";
import { v4 as uuid } from "uuid";

export default function PostHeader({
	title,
	coverImage,
	date,
	author,
	topics,
	views,
	excerpt,
	readTime,
	url,
}) {
	return (
		<>
			<PostTitle>
				{title}
				<div className="flex justify-between items-center w-full mt-3">
					<p className="text-sm xl:text-md font-light tracking-normal leading-loose flex flex-row justify-start items-center">
						Total Views:
						<Icon
							className="cursor-pointer relative right-0 mx-2"
							path={mdiEye}
							size={0.75}
						/>
						{views}
					</p>
					<p className="text-sm xl:text-md font-light tracking-normal leading-loose">
						{readTime}
					</p>
				</div>
			</PostTitle>
			<p className="text-xl mb-3 hidden md:block">Written By:</p>
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
							<a className="bg-accent text-white inline-block hover:bg-inverse hover:text-inverse rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
								#{topic}
							</a>
						</Link>
					))}
				</div>
			</div>
			<div className="mb-8 md:mb-16 sm:mx-0">
				<CoverImage title={title} src={coverImage} hero />
				{/* Share Button Section */}
				<ShareButtons
					url={url}
					title={title}
					size={30}
					windowWidth={640}
					windowHeight={620}
					hashtag={"#annascheucher"}
					quote={excerpt}
					message="Share This Article on Social Media"
				/>
				<hr className="my-8 border-b-4" />
			</div>
		</>
	);
}
