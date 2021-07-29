import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import cn from "classnames";
import _ from "lodash";
import { getAllPosts } from "../../lib/api.js";
import { filterList } from "../../lib/filter.js";

import { mdiClose, mdiAlertCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";
const PostTitle = dynamic(import("../../components/post-title"));
const Layout = dynamic(import("../../components/layout"));
const Container = dynamic(import("../../components/container"));
const Header = dynamic(import("../../components/header"));
const SearchStories = dynamic(import("../../components/search-stories"));

export default function Post({ allPosts, preview }) {
  const router = useRouter();
  const [searchTerm, setSearch] = useState("");
  const [posts, setPosts] = useState(allPosts);

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

  // Returns the Search UI
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <h2 className="mb-8 mt-16 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
              Search Articles
            </h2>
            <div className="flex justify-between items-center">
              <input
                type="search"
                placeholder="🔎  Search for..."
                className="w-full h-4 p-6 my-6 bg-gray-100 border-gray-300 transition-all duration-500 ease-in-out"
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
                color={searchTerm ? "blue" : "white"}
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
                  <span className="text-blue-700 normal-case">
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
  ]);

  return {
    props: {
      allPosts,
    },
  };
}
