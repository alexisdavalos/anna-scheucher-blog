import dynamic from "next/dynamic";
import Alert from "../components/alert";
import Meta from "../components/meta";
import PostBody from "../components/post-body";
import { getPostBySlug } from "../lib/api";

const Layout = dynamic(import("../components/layout"));

export default function About({ post }) {
  console.log({ post });
  return (
    <>
      <Layout>
        <PostBody content={post.content} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const fields = [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "topics",
    "coverImage",
    "excerpt",
  ];

  // slug and fields to fetch
  const post = getPostBySlug("about", fields);

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      post,
    },
  };
}
