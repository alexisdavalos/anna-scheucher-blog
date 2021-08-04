import dynamic from "next/dynamic";
import Head from "next/head";
import { useContext } from "react";
import "highlight.js/styles/github.css";
import { getAllPosts } from "../lib/staticApi";
import { DarkModeContext } from "../lib/darkModeContext";
import { HOME_OG_IMAGE_URL } from "../lib/constants";
const Container = dynamic(import("../components/container"));
const MoreStories = dynamic(import("../components/more-stories"));
const HeroPost = dynamic(import("../components/hero-post"));
const Intro = dynamic(import("../components/intro"));
const Layout = dynamic(import("../components/layout"));

export default function Index({ allPosts }) {
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);
    const { darkMode, setDarkMode } = useContext(DarkModeContext);
    return (
        <>
            <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
                <Head>
                    <title>
                        Anna Scheucher - Holistic Health, Wellness, Fitness and Productivity Blog
                    </title>
                    <meta property="og:image" content={HOME_OG_IMAGE_URL} />
                </Head>
                <Container>
                    <Intro darkMode={darkMode} setDarkMode={setDarkMode} />
                    {heroPost && (
                        <HeroPost
                            title={heroPost.title}
                            coverImage={heroPost.coverImage}
                            date={heroPost.date}
                            author={heroPost.author}
                            slug={heroPost.slug}
                            topics={heroPost.topics}
                            excerpt={heroPost.excerpt}
                            content={heroPost.content}
                        />
                    )}
                    <hr className="border-b-2" />
                    {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                </Container>
            </Layout>
        </>
    );
}

export async function getStaticProps() {
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

    return {
        props: { allPosts },
    };
}
