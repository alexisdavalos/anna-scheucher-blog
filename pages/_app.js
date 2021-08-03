import "../styles/index.scss";
import { useRouter } from "next/router";
import Head from "next/head";
import DarkMode from "../lib/darkModeContext";

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();
    return (
        <DarkMode>
            <Head>
                <link
                    rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BLOG_URL}${router.asPath}`}
                />
            </Head>
            <Component {...pageProps} />
        </DarkMode>
    );
}
