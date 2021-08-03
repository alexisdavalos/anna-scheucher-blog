import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ArticleJsonLd } from "next-seo";
import { getPostBySlug, getAllPosts } from "../../lib/staticApi.js";
import markdownToHtml from "../../lib/markdownToHtml";
import axiosInstance from "../../lib/axiosConfig.js";
import ErrorPage from "next/error";
import Head from "next/head";
import readingTime from "reading-time";

const PostTitle = dynamic(import("../../components/post-title"));
const Layout = dynamic(import("../../components/layout"));
const Container = dynamic(import("../../components/container"));
const Header = dynamic(import("../../components/header"));
const Avatar = dynamic(import("../../components/avatar"));
const PostHeader = dynamic(import("../../components/post-header"));
const PostBody = dynamic(import("../../components/post-body"));
const MoreStories = dynamic(import("../../components/more-stories"));

export default function Post({ post, morePosts, preview, data }) {
    const router = useRouter();
    const { text } = readingTime(post.content);
    const [views, setViews] = useState(post.views);
    const [readTime, setReadTime] = useState(text);
    const baseURL =
        process.env.NODE_ENV === "development"
            ? "http://localhost:3000"
            : process.env.NEXT_PUBLIC_BLOG_URL;

    // Used on first load to determine whether the page has been viewed or not. Updates the state accordingly
    useEffect(() => {
        if (typeof window !== "undefined" && data) {
            let storage = JSON.parse(window.localStorage.getItem(post.slug));

            // Adds a record in local storage if one is not found
            if (!storage) {
                storage = window.localStorage.setItem(
                    post.slug,
                    JSON.stringify({
                        viewed: false,
                        timeStamp: Date.now(),
                    })
                );
            }

            const lastView = storage ? storage.timeStamp : null;
            const today = new Date();

            // Used to determine whether or not to update the view count after a certain period
            // In this case if an article is viewed within 24 hours or 86400000ms, it will update the view count
            const tooOld = today - lastView >= 86400000;

            // Update the view count in firebase && local storage
            if ((storage && !storage.viewed) || tooOld) {
                updateViewCount();
            }

            async function updateViewCount() {
                // Checks view count and adds it or initializes it
                data.views ? (data.views += 1) : (data.views = 1);
                const res = await axiosInstance.post(
                    `/api/posts/update/${post.slug}`,
                    {
                        data: { ...data },
                    }
                );
                if (res && res.data.data) {
                    // Update UI views
                    setViews(res.data.data.views);
                }

                // Update local storage
                window.localStorage.setItem(
                    post.slug,
                    JSON.stringify({
                        viewed: true,
                        timeStamp: Date.now(),
                    })
                );
            }
        }
    });

    // Makes sure to update the state of views and readingTime when we switch between posts
    // Handle any state changes to blog posts here!
    useEffect(() => {
        const { text } = readingTime(post.content);
        setReadTime(text);
        setViews(post.views);
    }, [post]);

    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />;
    }

    return (
        <Layout preview={preview}>
            <Container>
                <Header />
                {router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                    <>
                        <article className="pb-16 mt-8 md:mt-16 border-b-4">
                            <ArticleJsonLd
                                url={`${process.env.NEXT_PUBLIC_BLOG_URL}/posts/${post.slug}`}
                                title={post.title}
                                images={[post.ogImage.url]}
                                datePublished={post.date}
                                dateModified={post.date}
                                authorName={post.author.name}
                                publisherName={post.author.name}
                                description={post.excerpt}
                                keywords={post.content}
                            />
                            <Head>
                                <title>{post.title} | Agamov.Dev Blog</title>
                                <meta
                                    name="description"
                                    content={post.excerpt}
                                />
                                <meta
                                    property="og:image"
                                    content={post.ogImage.url}
                                />
                                <meta
                                    property="og:title"
                                    content={post.title}
                                />
                                <meta property="og:date" content={post.date} />
                                <meta
                                    property="og:author"
                                    content={post.author.name}
                                />
                                <meta
                                    name="twitter:card"
                                    content={post.excerpt}
                                />
                                <meta
                                    name="twitter:url"
                                    content={`${process.env.NEXT_PUBLIC_BLOG_URL}/posts/${post.slug}`}
                                />
                                <meta
                                    name="twitter:title"
                                    content={post.title}
                                />
                                <meta
                                    name="twitter:image"
                                    content={`${process.env.NEXT_PUBLIC_BLOG_URL}/${post.ogImage.url}`}
                                />
                                <meta
                                    name="twitter:description"
                                    content={`Written by: ${post.author.name}`}
                                />
                                <link
                                    rel="canonical"
                                    href={`${process.env.NEXT_PUBLIC_BLOG_URL}/posts/${post.slug}`}
                                />
                            </Head>
                            <PostHeader
                                title={post.title}
                                excerpt={post.excerpt}
                                coverImage={post.coverImage}
                                date={post.date}
                                author={post.author}
                                topics={post.topics}
                                views={views}
                                readTime={readTime}
                                url={baseURL + `${router.asPath}`}
                            />
                            <PostBody content={post.content} />
                            <p className="text-xl mt-24 mb-3 hidden md:block ">
                                Written By:
                            </p>
                            <Avatar
                                name={post.author.name}
                                picture={post.author.picture}
                                date={post.date}
                            />
                        </article>
                        {morePosts ? (
                            <MoreStories posts={morePosts} />
                        ) : (
                            <div>Loading...</div>
                        )}
                    </>
                )}
            </Container>
        </Layout>
    );
}

export async function getStaticProps({ params }) {
    let data = null;

    const allPosts = getAllPosts([
        "title",
        "date",
        "slug",
        "author",
        "topics",
        "coverImage",
        "excerpt",
        "content",
    ]);

    const curPost = getPostBySlug(params.slug, [
        "title",
        "date",
        "slug",
        "topics",
        "author",
        "content",
        "ogImage",
        "coverImage",
        "excerpt",
    ]);

    const otherPosts = allPosts.filter((post) => post.title !== curPost.title);

    const content = await markdownToHtml(curPost.content || "");

    try {
        const res = await axiosInstance.get(`/api/posts/fetch/${params.slug}`);

        // Found post data in server
        if (res && res.data.data !== null) {
            data = res.data.data;
        }

        // Could not find post data, create it from static file
        if (res && res.data.data === null) {
            data = { ...curPost, content, views: 1 };
            const res = await axiosInstance.post(
                `/api/posts/update/${params.slug}`,
                {
                    data,
                }
            );
            if (res && res.data.data) {
                data = res.data.data;
            }
        }
    } catch (error) {
        console.log(error);
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }
    return {
        props: {
            data,
            post: {
                ...curPost,
                content,
                views: data ? data.views : 1,
            },
            morePosts: [...otherPosts],
        },
    };
}

// Note: For use with getStaticProps

export async function getStaticPaths() {
    const posts = getAllPosts(["slug"]);

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            };
        }),
        fallback: false,
    };
}
