import dynamic from "next/dynamic";
const PostPreview = dynamic(import("../components/post-preview"));

export default function MoreStories({ posts }) {
  return (
    <section className="border-t-4">
      <h2 className="mb-4 mt-16 text-5xl font-bold tracking-tighter leading-tight font-serif">
        More Articles
      </h2>
      <div className="py-6 grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-16 md:row-gap-6 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            topics={post.topics}
          />
        ))}
      </div>
    </section>
  );
}
