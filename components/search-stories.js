import dynamic from "next/dynamic";
const PostPreview = dynamic(import("../components/post-preview"));
import { useState, useEffect, useRef, useContext } from "react";
import Icon from "@mdi/react";
import { mdiAutorenew } from "@mdi/js";
import { DarkModeContext } from "../lib/darkModeContext";

export default function SearchStories({ posts }) {
    const interval = 4;
    const { darkMode, setDarkMode } = useContext(DarkModeContext);
    const [loadablePosts, setloadablePosts] = useState([]);
    const [isLoadable, setIsLoadable] = useState(
        loadablePosts.length > interval && loadablePosts.length !== posts.length
    );
    const loadRef = useRef(null);

    // Listen to scroll positions for loading more data on scroll
    useEffect(() => {
        if (typeof window !== undefined && loadRef) {
            window.addEventListener("scroll", onScrollHandler);
            // Removes event listener on component un-mount
            return () => {
                window.removeEventListener("scroll", onScrollHandler);
            };
        }
    });

    // Reloads the state of posts if the props change
    useEffect(() => {
        if (posts.length > 0) {
            setloadablePosts(posts.slice(0, interval));
        }
    }, [posts]);

    const loadMorePosts = (posts, postState) => {
        const currentPosts = postState.length;
        const start = currentPosts; // Arr is 0 idx
        const end = start + (interval + 1); // Adds invterval more posts slice does not include end indx
        const morePosts = posts.slice(start, end);
        const newPosts = [...loadablePosts, ...morePosts];
        const loadable = newPosts.length !== posts.length;
        setIsLoadable(loadable);
        setloadablePosts(newPosts);
    };

    const onScrollHandler = (e) => {
        if (typeof window !== undefined && loadRef) {
            const scrollY = window.pageYOffset; //Don't get confused by what's scrolling - It's not the window
            const scrollYOffset = loadRef.current.offsetTop;
            const difference = scrollYOffset - scrollY;
            const threshHold = 400;

            // Load more posts when scrolling the loader ref into view is within the threshold and there are posts to load
            if (difference <= threshHold && isLoadable) {
                loadMorePosts(posts, loadablePosts);
            }
        }
    };
    return (
        <section>
            <h2 className="mb-8 mt-16 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                Search Articles
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-16">
                {loadablePosts.map((post) => (
                    <PostPreview
                        key={post.slug}
                        title={post.title}
                        coverImage={post.coverImage}
                        date={post.date}
                        author={post.author}
                        slug={post.slug}
                        excerpt={post.excerpt}
                        topics={post.topics}
                        content={post.content}
                    />
                ))}
            </div>
            <div
                ref={loadRef}
                className={
                    "flex flex-col justify-center items-center my-16 " +
                    (isLoadable ? "block" : "hidden")
                }
            >
                <Icon
                    className="animate-spin cursor-pointer relative transition-all duration-500 ease-in-out"
                    path={mdiAutorenew}
                    size={1.75}
                    color={darkMode ? "white" : "black"}
                />
            </div>
        </section>
    );
}
