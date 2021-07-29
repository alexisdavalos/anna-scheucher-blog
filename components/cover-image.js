import cn from "classnames";
import Link from "next/link";

export default function CoverImage({ title, src, slug, hero }) {
  const image = (
    /* eslint-disable */
    <img
      src={src ? src : `meta/og-image.png`}
      alt={`Cover Image for ${title}`}
      className={cn(
        `shadow-small ${
          hero
            ? ""
            : "min-h-250 max-h-250 md:min-h-315 md:max-h-315 object-cover"
        }`,
        {
          "hover:shadow-medium transition-shadow duration-200 w-full": slug,
        }
      )}
    />
    /* eslint-disable */
  );
  return (
    <div className={`sm:mx-0`}>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
