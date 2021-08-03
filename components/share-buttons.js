import {
	FacebookShareButton,
	FacebookIcon,
	RedditShareButton,
	RedditIcon,
	TwitterShareButton,
	TwitterIcon,
	LinkedinShareButton,
	LinkedinIcon,
	TelegramShareButton,
	TelegramIcon,
} from "next-share";

export default function shareButtons({
	url,
	title,
	size,
	windowWidth,
	windowHeight,
	hashtag,
	quote,
	message,
}) {
	return (
		<>
			{/* Share Button Section */}
			<h3 className="mt-4 font-md">{message}</h3>
			<section className="my-2 flex justify-start space-x-3 items-center">
				{/* Facebook */}
				<FacebookShareButton url={url} hashtag={hashtag} quote={quote}>
					<FacebookIcon size={size} round />
				</FacebookShareButton>

				{/* Reddit */}
				<RedditShareButton
					url={url}
					quote={quote}
					windowWidth={windowWidth}
					windowHeight={windowHeight}
				>
					<RedditIcon size={size} round />
				</RedditShareButton>

				{/* Twitter */}
				<TwitterShareButton url={url} title={title}>
					<TwitterIcon size={size} round />
				</TwitterShareButton>

				{/* LinkedIn */}
				<LinkedinShareButton url={url}>
					<LinkedinIcon size={size} round />
				</LinkedinShareButton>

				{/* Telegram */}
				<TelegramShareButton url={url} title={title}>
					<TelegramIcon size={size} round />
				</TelegramShareButton>
			</section>
		</>
	);
}
