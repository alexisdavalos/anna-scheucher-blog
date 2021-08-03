import dynamic from "next/dynamic";
import PostBody from "../components/post-body";
import { getPostBySlug } from "../lib/staticApi";

const Layout = dynamic(import("../components/layout"));

export default function About({ post }) {
    return (
        <Layout>
            <PostBody content={post.content} />
        </Layout>
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
