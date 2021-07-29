import dynamic from "next/dynamic";
import Head from "next/head";
import "highlight.js/styles/github.css";
import { getAllPosts } from "../lib/api";
import { HOME_OG_IMAGE_URL } from "../lib/constants";
const Container = dynamic(import("../components/container"));
const MoreStories = dynamic(import("../components/more-stories"));
const HeroPost = dynamic(import("../components/hero-post"));
const Intro = dynamic(import("../components/intro"));
const Layout = dynamic(import("../components/layout"));

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>Healing and Wellness Practices</title>
          <meta property="og:image" content={HOME_OG_IMAGE_URL} />
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              topics={heroPost.topics}
              excerpt={heroPost.excerpt}
            />
          )}
          <div></div>
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
  ]);

  return {
    props: { allPosts },
  };
}
