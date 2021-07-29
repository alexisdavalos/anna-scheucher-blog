import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { getPostBySlug, getAllPosts } from "../../lib/api.js";
import markdownToHtml from "../../lib/markdownToHtml";

const PostTitle = dynamic(import("../../components/post-title"));
const Layout = dynamic(import("../../components/layout"));
const Container = dynamic(import("../../components/container"));
const Header = dynamic(import("../../components/header"));
const Avatar = dynamic(import("../../components/avatar"));
const PostHeader = dynamic(import("../../components/post-header"));
const PostBody = dynamic(import("../../components/post-body"));
const MoreStories = dynamic(import("../../components/more-stories"));

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
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
              <Head>
                <title>{post.title} | Stoic.Dev Blog</title>
                <meta property="og:image" content={post.ogImage.url} />
                <meta property="og:title" content={post.title} />
                <meta property="og:date" content={post.date} />
                <meta property="og:author" content={post.author.name} />
                <meta name="twitter:card" content={post.excerpt} />
                <meta
                  name="twitter:url"
                  content={`https://blog.alexisdavalos.dev/posts/${post.slug}`}
                />
                <meta name="twitter:title" content={post.title} />
                <meta
                  name="twitter:image"
                  content={`https://blog.alexisdavalos.dev/${post.ogImage.url}`}
                />
                <meta
                  name="twitter:description"
                  content={`Written by: ${post.author.name}`}
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                topics={post.topics}
              />
              <PostBody content={post.content} />
              <p className="text-gray-600 text-xl mb-3 hidden md:block ">
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
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "topics",
    "coverImage",
    "excerpt",
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
  ]);

  const otherPosts = allPosts.filter((post) => post.title !== curPost.title);

  const content = await markdownToHtml(curPost.content || "");

  return {
    props: {
      post: {
        ...curPost,
        content,
      },
      morePosts: [...otherPosts],
    },
  };
}

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
