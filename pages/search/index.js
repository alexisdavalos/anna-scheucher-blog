import dynamic from "next/dynamic";
import Head from "next/head";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import cn from "classnames";
import _ from "lodash";
import { getAllPosts } from "../../lib/staticApi";
import { filterList } from "../../lib/filterList";

import { mdiClose, mdiAlertCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { DarkModeContext } from "../../lib/darkModeContext";
import { HOME_OG_IMAGE_URL } from "../../lib/constants";
const PostTitle = dynamic(import("../../components/post-title"));
const Layout = dynamic(import("../../components/layout"));
const Container = dynamic(import("../../components/container"));
const Header = dynamic(import("../../components/header"));
const SearchStories = dynamic(import("../../components/search-stories"));

export default function Post({ allPosts, preview }) {
    const router = useRouter();
    const [searchTerm, setSearch] = useState("");
    const [posts, setPosts] = useState(allPosts);
    const { darkMode, setDarkMode } = useContext(DarkModeContext);

    // Watches the router and updates the search criteria and results - meant to only run once
    /* eslint-disable */
    useEffect(() => {
        const searchTerm = router.asPath.split("?")[1];
        if (searchTerm) {
            setSearch(searchTerm);
            setPosts(filterList(searchTerm, allPosts));
        }
    }, []);
    /* eslint-disable */

    useEffect(() => {
        // Handle route changes in this page
        const handleRouteChange = (url, { shallow }) => {
            // Note: Allows us to update the state of searchTerm and Posts with shallow links from cards
            if (shallow) {
                const searchTerm = url.split("?")[1];
                if (searchTerm) {
                    setSearch(searchTerm);
                    setPosts(filterList(searchTerm, allPosts));
                } else {
                    setSearch("");
                    setPosts(filterList("", allPosts));
                }
            }
        };

        // Turn router events on
        router.events.on("routeChangeStart", handleRouteChange);

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method:
        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, [router]);

    // Input onChange Handler
    const handleChange = (e) => {
        let searchTerm = e.target.value;
        const newUrl = router.pathname + `?${encodeURIComponent(searchTerm)}`;
        const filteredPosts = filterList(searchTerm, allPosts);

        // Update search state and url state based on user input
        if (searchTerm) {
            setSearch(searchTerm);
            router.replace(newUrl);
        } else {
            // Clear for empty values
            setSearch("");
            router.replace("/search?");
        }

        // Update state of posts regardless of matches -> ex: searchTerm = '', returns allPosts
        setPosts(filteredPosts);
    };

    // on search clear
    const onClear = () => {
        setSearch("");
        router.replace("/search?");
        setPosts(allPosts);
    };

    let metaTitle = `Searching for: ${
        searchTerm ? searchTerm : "..."
    } | FullyHolistic - Holistic Health, Fitness, Wellness and Productivity Blog`;

    let metaDescription = `Searching for posts that include the term: ${
        searchTerm ? searchTerm : "..."
    } \n Resulted with - ${posts[0] ? posts[0].title : "Nothing Found"}: ${
        posts[0] ? posts[0].excerpt : ""
    }`;

    // Search engine crawlers only show the first 150-160 characters of the description and 50–60 for titles in the search results page, so if it is too long, searchers may not see all of the text. If it is too short, the search engines may add text found elsewhere on the page.
    // Note: that search engines may show a different description from the one you have authored if they feel it may be more relevant to a user's search.

    metaTitle = metaTitle.slice(0, 60);
    metaDescription = metaDescription.slice(0, 157) + "...";

    // Returns the Search UI
    return (
        <Layout preview={preview} darkMode={darkMode} setDarkMode={setDarkMode}>
            <Head>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={HOME_OG_IMAGE_URL} />
                <meta
                    property="og:date"
                    content={posts[0] ? posts[0].date : new Date(Date.now())}
                />
                <meta
                    property="og:author"
                    content={posts[0] ? posts[0].author.name : "FullyHolistic"}
                />
                <meta
                    property="og:url"
                    content={`${process.env.NEXT_PUBLIC_BLOG_URL}/search`}
                />
                <meta property="og:site_name" content={metaTitle} />
                <meta name="twitter:card" content={metaDescription} />
                <meta
                    name="twitter:url"
                    content={`${process.env.NEXT_PUBLIC_BLOG_URL}/search`}
                />
                <meta name="twitter:title" content={metaTitle} />
                <meta name="twitter:image" content={HOME_OG_IMAGE_URL} />
                <meta name="twitter:description" content={metaDescription} />
                <link
                    rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BLOG_URL}/search`}
                />
            </Head>
            <Container>
                <Header />
                {router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                    <>
                        <h1 className="mb-8 mt-16 text-4xl md:text-7xl font-bold tracking-tighter leading-tight">
                            Search Articles
                        </h1>
                        <div className="flex justify-between items-center">
                            <input
                                type="search"
                                placeholder="🔎  Search for..."
                                className="w-full h-4 p-6 my-6 bg-inverse dark:bg-primary text-inverse dark:text-primary placeholder-primary border-2 rounded-sm focus:outline-none focus:ring focus:border-accent"
                                value={searchTerm}
                                onChange={handleChange}
                            />
                            <Icon
                                onClick={onClear}
                                className={cn(
                                    "cursor-pointer relative right-0 mx-2 transition-all duration-500 ease-in-out",
                                    searchTerm ? "w-full" : "hidden"
                                )}
                                path={mdiClose}
                                size={1}
                                color={searchTerm ? "gold" : "white"}
                            />
                        </div>
                        {posts.length > 0 ? (
                            <SearchStories posts={posts} />
                        ) : (
                            <div className="h-full w-full p-16 flex flex-col justify-center items-center">
                                <div className="text-center w-full flex justify-center items-center">
                                    <Icon
                                        className="text-center"
                                        path={mdiAlertCircleOutline}
                                        size={5}
                                    />
                                </div>
                                <h3 className="mt-6 text-2xl font-bold capitalize">
                                    Nothing Matches For:{" "}
                                    <span className="text-accent normal-case">
                                        {searchTerm}
                                    </span>
                                </h3>
                            </div>
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
        "content",
    ]);

    return {
        props: {
            allPosts,
        },
    };
}
