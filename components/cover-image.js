import cn from "classnames";
import Link from "next/link";
import Head from "next/head";

export default function CoverImage({ title, src, slug, hero }) {
    const createSetUrl = (src) => {
        let sizes = ["600", "1000", "1400"];
        let srcSet = [];
        for (let i = 0; i < sizes.length; i++) {
            let size = sizes[i];
            let newSrc = src.split(".")[0];
            let extension = src.split(".")[1];
            newSrc += `-${size}px.${extension}`;

            if (i + 1 === sizes.length) {
                srcSet.push(`${newSrc} ${size}w`);
            } else {
                srcSet.push(`${newSrc} ${size}w, `);
            }
        }
        return srcSet.length > 0 ? srcSet.join(" ") : [];
    };
    const srcSetUrl = createSetUrl(src);
    const image = (
        /* eslint-disable */
        <img
            srcSet={srcSetUrl ? srcSetUrl : `/meta/og-image.png`}
            alt={title}
            className={cn(
                `shadow-small w-full ${
                    hero
                        ? ""
                        : "min-h-250 max-h-250 md:min-h-315 md:max-h-315 object-cover"
                }`,
                {
                    "hover:shadow-medium transition-shadow duration-200 w-full":
                        slug,
                }
            )}
        />
        /* eslint-disable */
    );
    return (
        <>
            <Head>
                <link
                    rel="preload"
                    as="image"
                    href={src}
                    imagesrcset={srcSetUrl}
                />
            </Head>
            <div className={`sm:mx-0`}>
                {slug ? (
                    <Link as={`/posts/${slug}`} href="/posts/[slug]">
                        <a aria-label={title}>{image}</a>
                    </Link>
                ) : (
                    image
                )}
            </div>
        </>
    );
}
